import fetch from 'node-fetch';
import yts from 'yt-search';

let limit = 100;

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  let fkontak = { 
    "key": { 
      "participants": "0@s.whatsapp.net", 
      "remoteJid": "status@broadcast", 
      "fromMe": false, 
      "id": "Halo" 
    }, 
    "message": { 
      "contactMessage": { 
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` 
      }
    }, 
    "participant": "0@s.whatsapp.net" 
  };

  if (!args || !args[0]) return conn.reply(m.chat, `*Ingresa el link del vídeo a descargar 🤍*`, m);
  if (!args[0].match(/youtu/gi)) return conn.reply(m.chat, `Verifica que la *URL* sea de YouTube`, m).then(() => m.react('✖️'));

  await m.react('🕒');

  try {
    // Uso de la API proporcionada para obtener los detalles del video
    const response = await fetch(`https://api.agatz.xyz/api/ytmp4?url=${args[0]}`);
    const result = await response.json();

    if (!result || !result.result) throw '*[❗] Error al obtener el enlace de descarga.*';

    let { title, result: dl_url, size, thumb } = result;
    size = size || 'Desconocido';
    const fileSizeMB = parseFloat(size);

    if (fileSizeMB > limit) return conn.reply(m.chat, `El archivo pesa más de ${limit} MB, se canceló la descarga.`, m).then(() => m.react('✖️'));

    await m.react('📀');
    
    const vid = (await yts(text)).all[0];
    await conn.sendFile(m.chat, dl_url, 'yt.mp4', `${title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━━━●────── ${vid.timestamp}`, m);
    
  } catch (error) {
    console.log(error);
    await conn.reply(m.chat, `*☓ Ocurrió un error inesperado*`, m).then(() => m.react('✖️'));
  }
};

handler.help = ['ytmp4 <url yt>'];
handler.corazones = 2;
handler.tags = ['dl'];
handler.command = /^(fgmp4|dlmp4|video|vídeo|yt(v|mp4)?)$/i;
handler.star = 2;
handler.register = true;
export default handler;
