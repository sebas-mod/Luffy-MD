var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = reglascuadri.getRandom()
const cat = 
`» 𝙍𝙀𝙂𝙇𝘼𝙈𝙀𝙉𝙏𝙊 𝘾𝙐𝘼𝘿𝙍𝙄𝙇𝘼́𝙏𝙀𝙍𝙊 📑`

await conn.sendFile(m.chat, pp, 'img5.jpg', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(reglascuadri)$/i

export default handler
