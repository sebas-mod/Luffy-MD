import cheerio from 'cheerio';
import axios from 'axios';

let handler = async (m, { conn, args, command, usedPrefix }) => {
  if (!args[0]) throw `*Formato incorrecto*\nEjemplo:\n\n${usedPrefix + command} con mi prima`;

  try {
    let searchResults = await searchXvideos(args[0]);
    if (searchResults.result.length === 0) {
      return m.reply('*Sin resultados*');
    }

    const randomVideo = searchResults.result[Math.floor(Math.random() * searchResults.result.length)];
    const interactiveMessage = {
      body: { text: `*╭┈─────⸌̗⸃》̗̀💥̖́《⸍̖⸂─────┈╮*\n*│≣ 🔥 ʀᴇsᴜʟᴛᴀᴅᴏs ᴏʙᴛᴇɴɪᴅᴏs:*\n╰┈─────⸌̗⸃》̗̀🔥̖́《⸍̖⸂─────┈╯*`.trim() },
      footer: { text: `${global.wm}`.trim() },  
      header: {
        title: `*❤️‍🔥 Genesis Search ❤️‍🔥*\n`,
        hasMediaAttachment: false,  // Cambié esto a false ya que no se especificó una imagen
      },
      nativeFlowMessage: {
        buttons: [
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'OPCIONES DISPONIBLES',
              sections: searchResults.result.map((video) => ({
                title: video.title,
                rows: [
                  {
                    header: video.title,
                    title: video.title,
                    description: 'Descargar MP3',
                    id: `${usedPrefix}play.1 ${video.url}`
                  },
                  {
                    header: video.title,
                    title: video.title,
                    description: 'Descargar MP4',
                    id: `${usedPrefix}play.2 ${video.url}`
                  }
                ]
              }))
            })
          }
        ],
        messageParamsJson: ''
      }
    };

    let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage,
        },
      },
    }, { userJid: conn.user.jid, quoted: m });
    
    await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

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
