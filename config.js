import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import { group } from 'console'
import PhoneNumber from 'awesome-phonenumber'
import fs from 'fs'

/*============= MAIN INFO =============*/
global.owner = [['5491140951814', 'creador', true]]
global.mods = []
global.prems = []
global.nomorbot = '5491140951814'
global.nomorown = '5491140951814'

//• ↳ ◜𝑴𝑨𝑹𝑪𝑨𝑺 𝑫𝑬 𝑨𝑮𝑼𝑨◞ • 💌
global.packname = ' 𝐋𝐮𝐟𝐟𝐲𝐁𝐨𝐭-𝐌𝐃'
global.author = '@sebas-MD'
global.namebot = 'L̈üf̈f̈ÿB̈öẗ-̈M̈D̈'
global.wait = '*Aɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ ฅ^•ﻌ•^ฅ*'
global.wm = '▸ ⃦L̈üf̈f̈ÿB̈öẗ-̈M̈D̈ ꩍꩍꢀ 𓏲᭔۫֟፝֯᷼๑꙰୭᳟⁣᭄'
global.stickpack = `©️ ρσωε૨ ɓყ ɠαℓαאყ ƭεαɱ`
global.titulowm = '-❀ᩙ̈͟༚̮ ⡞᪲=͟͟͞🄶𝚎᪶۫۫𝚗᪶۫۫𝚎᪶۫۫𝚜᪶۫۫𝚒᪶۫۫𝚜᪶۫ 𝚊᪶۫𝚒᪶۫͜ ≼᳞ׄ ᵎ ˚꙳꤬ꨪ'
global.titulowm2 = '.‧·ீ੭ ¡ ᗃᮢ፝֟͡Gᴇɴᴇsɪs B۵ᴛ ʟᴀ ᴍᴇᴊ꧔ʀ !˚̩̩̥͙°̩̥༅˚'
global.igfg = '@sebas-MD'
global.botname = '  ᩠ ꣣ʹ͚〃L̈üf̈f̈ÿB̈öẗ-̈M̈D̈ ·ꗏฺ̇·.•۟'
global.dev = '_© Reserved | L̈üf̈f̈ÿB̈öẗ-̈M̈D̈ *2024*_'
global.titu = '©️ ρσωε૨ ɓყ ɠαℓαאყ ƭεαɱ'
global.textbot = 'L̈üf̈f̈ÿB̈öẗ-̈M̈D̈|𝐒𝐞𝐛𝐚𝐬-𝐌𝐃'
global.listo = '*Aqui tiene ฅ^•ﻌ•^ฅ*'
global.vs = '2.0.0'
global.namechannel = 'L̈üf̈f̈ÿB̈öẗ-̈M̈D̈ - 𝑪𝒉𝒂𝒏𝒏𝒆𝒍'
global.stickauth = `© 'L̈üf̈f̈ÿB̈öẗ-̈M̈D̈|𝐒𝐞𝐛𝐚𝐬-𝐌𝐃`
global.dis = ':⁖֟⊱┈֟፝❥'

//• ↳ ◜𝑰𝑴𝑨́𝑮𝑬𝑵𝑬𝑺◞ • 🌇
global.logo7 = fs.readFileSync('./thumbnail.jpg')

//• ↳ ◜𝑳𝑰𝑵𝑲𝑺◞ • 🌿
global.group = 'https://chat.whatsapp.com/GqKwwoV2JJaJDP2SL7SddX'
global.group2 = 'https://chat.whatsapp.com/Fn5Ipyxu6mE6qEQlwWZTwU'
global.canal = 'https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y'
global.github = 'https://github.com/Angelito-OFC/GenesisBot-MD' 
global.instagram = 'https://www.instagram.com/usxr_angelito0' 
global.whatsApp = 'https://wa.me/59168683798'

//• ↳ ◜𝑭𝑨𝑲𝑬 𝑬𝑺𝑻𝑰𝑳𝑶◞ • 🪩
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '𝐋𝐮𝐟𝐟𝐲𝐁𝐨𝐭-𝐌𝐃', orderTitle: 'packname', thumbnail: logo7, sellerJid: '0@s.whatsapp.net'}}}

global.fakegif2 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: '𝐋𝐮𝐟𝐟𝐲𝐁𝐨𝐭-𝐌𝐃', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '𝐋𝐮𝐟𝐟𝐲𝐁𝐨𝐭-𝐌𝐃', jpegThumbnail: logo7 }}};

global.fakegif3 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: '𝐋𝐮𝐟𝐟𝐲𝐁𝐨𝐭-𝐌𝐃', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '𝐋𝐮𝐟𝐟𝐲𝐁𝐨𝐭-𝐌𝐃', jpegThumbnail: logo7 }}};

global.fakegif4 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: '𝐋𝐮𝐟𝐟𝐲𝐁𝐨𝐭-𝐌𝐃', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '⚘݄𝐋𝐮𝐟𝐟𝐲𝐁𝐨𝐭-𝐌𝐃 (^_^♪) 💥', jpegThumbnail: logo7 }}};

global.estilox = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '𝐋𝐮𝐟𝐟𝐲𝐁𝐨𝐭-𝐌𝐃', orderTitle: 'packname', thumbnail: logo7, sellerJid: '0@s.whatsapp.net'}}}

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶◞ • 🕒
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************

/*============= DONASI =============*/
global.pdana = '085174269046'
global.povo = '-'
global.pgopay = '085174269046'
global.plinkaja = '-'
global.ppulsa = '085174269046'
global.ppulsa2 = '085174269046'
global.psaweria = 'https://saweria.co/shirokamiryzen'
global.bank1 = '109901209640'
global.bank2 = '-'


/*============= TAMPILAN =============*/
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊↬' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer
global.dashmenu = '┅═┅═❏ *DASHBOARD* ❏═┅═┅'
global.cmenut = '❏––––––『' //top
global.cmenuh = '』––––––' //header
global.cmenub = '┊✦ ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.pmenus = '✦'
global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '⫹⫺'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']

/*============= RESPON =============*/
global.wait = 'Espere un momento...'
global.eror = 'Error!'

/*============= WEB API KEY =============*/
global.openai = 'YOUR_APIKEY_HERE'  //api key bisa didapatkan dari https://openai.com/api/
global.org = 'YOUR_APIKEY_HERE'  //openAI Organization name
global.xzn = 'YOUR_APIKEY_HERE'

global.APIs = {
  // name: 'https://website'
  xzn : 'https://skizo.tech/',
}

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'

  'https://skizo.tech/' : '',
}

/*============= OTHER =============*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumb = 'https://telegra.ph/file/a7ac2b46f82ef7ea083f9.jpg' //Main Thumbnail
global.imagebot = 'https://telegra.ph/file/a7ac2b46f82ef7ea083f9.jpg'
global.giflogo = 'https://telegra.ph/file/a7ac2b46f82ef7ea083f9.jpg'
global.thumbs = ['https://telegra.ph/file/a7ac2b46f82ef7ea083f9.jpg']
global.thumbnailUrl = [
  'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg'
]
global.fotonya1 = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg' //ini juga ganti 
global.flaaa2 = [
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
]
global.fla = [
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
]
global.hwaifu = ['https://telegra.ph/file/a7ac2b46f82ef7ea083f9.jpg']
global.thumblvlup = [
  'https://pomf2.lain.la/f/ob90ku8j.jpg'
]

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

/*============= RESPON GAME =============*/
global.benar = 'Good Job! ◕◡◕'
global.salah = 'Not Bad! ◕◠◕'
global.dikit = "Dikit Lagi, Semangat!!"


/*============= RPG GAME =============*/
global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}
