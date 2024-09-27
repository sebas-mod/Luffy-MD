import cheerio from 'cheerio';
import axios from 'axios';
import fetch from 'node-fetch';

let handler = async (m, { conn, args, command, usedPrefix }) => {
  if (!args[0]) throw `*Formato incorrecto*\nEjemplo:\n\n${usedPrefix + command} con mi prima`;
  
  try {
    let searchResults = await searchXvideos(args[0]); // Cambié la función a "searchXvideos"
    let teks = searchResults.result.map((v, i) => 
      `🌸 𝐒𝐄𝐀𝐑𝐂𝐇 🌸 
       𝐓𝐈𝐓𝐔𝐋𝐎: ${v.title}
       𝐃𝐔𝐑𝐀𝐂𝐈𝐎𝐍: ${v.duration}
       𝐕𝐈𝐒𝐈𝐓𝐀𝐒: ${v.views}
       𝐋𝐈𝐍𝐊: ${v.url}
      ---------------------------------------------------\n`).join('\n\n');
    
    if (searchResults.result.length === 0) {
      teks = '*Sin resultados*';
    }
    
    m.reply(teks);
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
    
    // Cambié los selectores para adaptarlos a la estructura de Xvideos
    $('div.thumb-block').each(function() {
      const _title = $(this).find('p.title a').attr('title');
      const _duration = $(this).find('.duration').text().trim();
      const _views = $(this).find('.meta span').first().text().trim();
      const _url = 'https://www.xvideos.com' + $(this).find('p.title a').attr('href');
      
      if (_title && _duration && _url) {  // Verificación para evitar valores nulos
        const hasil = { title: _title, duration: _duration, views: _views, url: _url };
        result.push(hasil);
      }
    });

    return { result };
  } catch (error) {
    console.error('Ocurrió un error al buscar en Xvideos:', error);  // Cambié el mensaje de error
    return { result: [] };
  }
}
