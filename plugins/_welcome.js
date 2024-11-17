import {WAMessageStubType} from '@adiwajshing/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://pomf2.lain.la/f/b03w5p5.jpg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]

  if (chat.bienvenida && m.messageStubType == 27) {
    let welcome = `*⭒─ׄ─ׅ─ׄ─⭒ \`BIENVENIDA\` ⭒─ׄ─ׅ─ׄ─⭒*\n\n╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*\n┊ ‹‹ *Welcome* :: *@${m.messageStubParameters[0].split`@`[0]}*\n┊• ${groupMetadata.subject}\n╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩`
await conn.sendMini(m.chat, titulowm2, titu, welcome, img, img, canal, estilo)
  }

  if (chat.bienvenida && m.messageStubType == 28) {
    let bye = `*⭒─ׄ─ׅ─ׄ─⭒ \`ADIOS\` ⭒─ׄ─ׅ─ׄ─⭒*\n\n╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*\n┊ ‹‹ *BYE* :: *@${m.messageStubParameters[0].split`@`[0]}*\n┊• *Sayonara 👋* \n╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩`
await conn.sendMini(m.chat, titulowm2, titu, bye, img, img, canal, estilo)
  }

  if (chat.bienvenida && m.messageStubType == 32) {
    let kick = `*⭒─ׄ─ׅ─ׄ─⭒ \`ADIOS\` ⭒─ׄ─ׅ─ׄ─⭒*\n\n╭── ︿︿︿︿︿ *⭒   ⭒   ⭒   ⭒   ⭒   ⭒*\n┊ ‹‹ *BYE* :: *@${m.messageStubParameters[0].split`@`[0]}*\n┊• *Sayonara 👋* \n╰─── ︶︶︶︶ ✰⃕  ⌇ *⭒ ⭒ ⭒*   ˚̩̥̩̥*̩̩͙✩`
await conn.sendMini(m.chat, titulowm2, titu, kick, img, img, canal, estilo)
}}