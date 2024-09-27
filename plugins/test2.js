import cheerio from 'cheerio';
import axios from 'axios';

let handler = async (m, { conn, args, command, usedPrefix }) => {
  if (!args[0]) throw `*Formato incorrecto*\nEjemplo:\n\n${usedPrefix + command} con mi prima`;

  try {
    let searchResults = await searchXvideos(args[0]);

    if (searchResults.result.length === 0) {
      return m.reply('*Sin resultados*');
    }

    // Creando las secciones de los resultados para los botones
    const sections = searchResults.result.map((video, index) => ({
      title: `${index + 1}. ${video.title}`,
      rows: [
        {
          title: `${video.title}`,
          description: `Duración: ${video.duration} - Visitas: ${video.views}`,
          rowId: `${usedPrefix}play.1 ${video.url}`
        }
      ]
    }));

    const title = `Resultados de la búsqueda: ${args[0]}`;
    const buttonText = 'Selecciona un video';
    const text = `Se encontraron ${searchResults.result.length} resultados.`;

    // Generar el mensaje interactivo con los botones
    const message = {
      interactiveMessage: {
        header: {
          title: title,
          hasMediaAttachment: false
        },
        body: { text: text },
        nativeFlowMessage: {
          buttons: [
            {
              name: 'single_select',
              buttonParamsJson: JSON.stringify({
                title: buttonText,
                sections: sections
              })
            }
          ],
          messageParamsJson: ''
        }
      }
    };

    // Generando y enviando el mensaje
    let msgL = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message
      }
    }, { userJid: conn.user.jid, quoted: m });

    await conn.relayMessage(m.chat, msgL.message, { messageId: msgL.key.id });

  } catch (e) {
    console.error(e);
    m.reply('*Ocurrió un error al buscar los resultados.*');
  }
};

handler.command = /^(xvideosearch)$/i;
export default handler;

async function searchXvideos(search) {
  try {
    const response = await axios.get(`https://www.xvideos.com/?k=${search}`);
    const html = response.data;
    const $ = cheerio.load(html);
    const result = [];

    $('div.thumb-block').each(function() {
      const _title = $(this).find('p.title a').attr('title');
      const _duration = $(this).find('.duration').text().trim();
      const _views = $(this).find('.meta span').first().text().trim();
      const _url = 'https://www.xvideos.com' + $(this).find('p.title a').attr('href');

      if (_title && _duration && _url) {
        const hasil = { title: _title, duration: _duration, views: _views, url: _url };
        result.push(hasil);
      }
    });

    return { result };
  } catch (error) {
    console.error('Ocurrió un error al buscar en Xvideos:', error);
    return { result: [] };
  }
}
