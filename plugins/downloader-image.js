/* 
*`[ By JTxs 🎃 ]`*

[ Canal Principal ] :
https://whatsapp.com/channel/0029VaeQcFXEFeXtNMHk0D0n

[ Canal Rikka Takanashi Bot ] :
https://whatsapp.com/channel/0029VaksDf4I1rcsIO6Rip2X

[ Canal StarlightsTeam ] :
https://whatsapp.com/channel/0029VaBfsIwGk1FyaqFcK91S

[ HasumiBot FreeCodes ] :
https://whatsapp.com/channel/0029Vanjyqb2f3ERifCpGT0W


*/

//*`[ IMAGEN SEARCH - CARRUSEL ]`*
import axios from 'axios';
const { proto, generateWAMessageFromContent, generateWAMessageContent } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, text }) => {
if (!text) return m.reply('Ingresa el texto de lo que quieres buscar');

async function createImage(url) {
const { imageMessage } = await generateWAMessageContent({image: { url }}, { upload: conn.waUploadToServer })
return imageMessage
}

try {
let HasumiBotFreeCodes = []
let { data } = await axios.get(`https://api.ryzendesu.vip/api/search/gimage?query=${encodeURIComponent(text)}`)
let JT = data
let imgs = JT.slice(0, 7)

for (let result of imgs) {
HasumiBotFreeCodes.push({
header: proto.Message.InteractiveMessage.Header.fromObject({ title: ``, hasMediaAttachment: true, imageMessage: await createImage(result) }),
body: proto.Message.InteractiveMessage.Body.fromObject({ text: `${text}` }),
footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: `` }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] })
})
}

const msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
},
interactiveMessage: proto.Message.InteractiveMessage.fromObject({contextInfo: {mentionedJid: [m.sender]},
body: proto.Message.InteractiveMessage.Body.create({ text: 'HasumiBotFreeCodes' }),
footer: proto.Message.InteractiveMessage.Footer.create({ text: 'imagen search' }),
header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards: [...HasumiBotFreeCodes] })
})
}}}, { quoted: m })

await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
} catch (error) {
console.error(error) 
}}

handler.command = ['imagen']

export default handler
