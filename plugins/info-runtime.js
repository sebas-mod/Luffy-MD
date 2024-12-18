import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    
m.reply(`*✧ Rutine*\n${muptime}`)

}
handler.help = ['rutine']
handler.tags = ['info']
handler.command = ['rutine', 'rt']

export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Día(s) ☀️* \n', h, ' *Hora(s) 🕐*\n', m, ' *Minuto(s) ⏰*\n', s, ' *Segundo(s) ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
