let handler = async (m, { conn, args, usedPrefix, command }) => {

    await conn.groupUpdateSubject(m.chat, `${args.join(" ")}`);
    m.reply('✧ El nombre del grupo cambió a'+ `${args.join(" ")}`)
  }
  
  handler.help = ['setnamegc <txt>']
  handler.tags = ['group']
  handler.command = /^setnamegc$/i
  handler.owner = false
  handler.mods = false
  handler.premium = false
  handler.group = true
  handler.private = false
  handler.register = false
  handler.admin = true
  handler.botAdmin = true
  
  export default handler
