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
      text: `*╭┈─────⸌̗⸃》̗̀💥̖́《⸍̖⸂─────┈╮*\n*│≣ 🔥 ʀᴇsᴜʟᴛᴀᴅᴏs ᴏʙᴛᴇɴɪᴅᴏs:* ${searchResults.result.length}\n*│≡ 🎲 Video aleatorio:*\n*│≠ 🌹-› Título:* ${randomVideo.title}\n*│≜ 👤-› Visitas:* ${randomVideo.views}\n*│≚ 💫-› Duración:* ${randomVideo.duration}\n*│≋ 🌱-› Link :* ${randomVideo.url}\n*╰┈─────⸌̗⸃》̗̀🔥̖́《⸍̖⸂─────┈╯*`.trim(),
      footer: { text: `${global.wm}`.trim() },  
      buttons: searchResults.result.map((video) => ({
        buttonId: `${usedPrefix}play.1 ${video.url}`,
        buttonText: { displayText: `MP3 - ${video.title}` },
        type: 1,
      }))
    };

    const buttonMessage = {
      text: interactiveMessage.text,
      footer: interactiveMessage.footer.text,
      buttons: interactiveMessage.buttons,
      headerType: 1
    };

    await conn.sendMessage(m.chat, buttonMessage, { quoted: m });

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
