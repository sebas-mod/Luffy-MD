
let handler = async function (m, { conn, text, usedPrefix }) {

    m.react('🐈‍⬛')

let m2 = `
*▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬*

. .╭─── ︿︿︿︿︿ .   .   .   .   .   . 
. .┊• *ɢᴇɴᴇꜱɪꜱ ʙᴏᴛ ᴘʀᴏꜰᴇꜱɪᴏɴᴀʟ*
. .╰─── ︶︶︶︶ ♡⃕  ⌇. . .
 . . ┊⿻ [ *ꜰᴇᴄʜᴀ* :: ${fecha}]. . 
 . . ┊⿻ [ *ᴠᴇʀꜱɪᴏɴ* :: ${vs} ] . .
 . . ┊⿻ [ *ᴄʀᴇᴀᴅᴏʀ* :: Angelito ]. . 
 . . ╰─────────╮

*▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬*


*╭─「 ꜰ ʀ ᴇ ᴇ  ꜰ ɪ ʀ ᴇ 」*
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.agenda*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.alpes*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.bermuda*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.kalahari*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.nexterra*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.purgatorio*_
*╰─────────────────┈°✿︎*


*╭─「 ʟ ɪ ꜱ ᴛ ᴀ ꜱ  ᴠ ꜱ  ꜰ ꜰ 」*
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.4vs4infifem <hora>*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.4vs4infimasc <hora>*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.4vs4compefem <hora>*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.4vs4compemasc <hora>*_
*╰─────────────────┈°✿︎*
`
    let pp = 'https://i.ibb.co/jHctydb/Genesis-Bot.jpg' 

global.fcontact = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            remoteJid: "status@broadcast",
        },
        message: {
            contactMessage: {
                displayName: `\nɢ ᴇ ɴ ᴇ ꜱ ɪ ꜱ  ʙ ᴏ ᴛ  ᴘ ʀ ᴏ`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:xd\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            },
        },
    };

    await conn.reply(m.chat, '🐈‍⬛ `𝗖𝗔𝗥𝗚𝗔𝗡𝗗𝗢 𝗠𝗘𝗡𝗨....`', fcontact);
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    /*conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rcanal)*/
conn.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/59ee7d5b8b09d6eb83ec9.mp4"},
      gifPlayback: true,
      caption: m2.trim(),
      })

}

handler.help = ['menuff']
handler.tags = ['main']
handler.command = ['menuff', 'ffmenu'] 

export default handler
