import { createHash } from 'crypto'
import fs from 'fs'
import fetch from 'node-fetch'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) return m.reply(`🏴‍☠️ Ya estás registrado.\n\n*¿Quiere volver a registrarse?*\n\nUse este comando para eliminar su registro.\n*${usedPrefix}unreg* <Número de serie>`)
  if (!Reg.test(text)) return m.reply(`🏴‍☠️ Formato incorrecto.\n\nUso del comamdo: *${usedPrefix + command} nombre.edad*\nEjemplo : *${usedPrefix + command} ${name2}.18*`)
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) return m.reply('🏴‍☠️ El nombre no puede estar vacío.')
  if (!age) return m.reply('🏴‍☠️ La edad no puede estar vacía.')
  if (name.length >= 100) return m.reply('🏴‍☠️ El nombre es demasiado largo.' )
  age = parseInt(age)
  if (age > 100) return m.reply('👴🏻 Wow el abuelo quiere jugar al bot.')
  if (age < 5) return m.reply('🚼  hay un abuelo bebé jsjsj. ')
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)        
  let img = await (await fetch(`https://pomf2.lain.la/f/4078n2i9.jpg`)).buffer()
  let txt = '*`📄 R E G I S T R O 📄`*\n'
      txt += `\`━━━━━━━━━━━━━━━━━━━━\`\n`
      txt += `*\`⁘ NOMBRE:\`* ${name}\n`
      txt += `*\`⁘ EDAD:\`* ${age} años\n`
      txt += `*\`⁘ FECHA:\`* ${fecha}\n`
      txt += `*\`⁘ N° SERIAL:\`* ${sn}\n`
      txt += `\`━━━━━━━━━━━━━━━━━━━━\`\n`
await conn.sendFile(m.chat, img, 'img.jpg', txt, m, null, fake)

// await conn.sendFile(m.chat, botname, textbot, txt, img, img, canal, m)
await m.react('✅')
}
handler.help = ['reg'].map(v => v + ' *<nombre.edad>*')
handler.tags = ['start']

handler.command = ['verify', 'reg', 'register', 'registrar'] 

export default handler
