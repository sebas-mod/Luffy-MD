var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = vestimentacuadri.getRandom()
const cat = 
`» 𝙑𝙀𝙎𝙏𝙄𝙈𝙀𝙉𝙏𝘼𝙎 & 𝙋𝙊𝙎𝙄𝘾𝙄𝙊𝙉𝙀𝙎 👕`

await conn.sendFile(m.chat, pp, 'img5.jpg', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(vestimencuadri)$/i

export default handler
