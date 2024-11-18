/* import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) return m.reply('Ingresa un texto')

try {
let prompt = 'Eres Genesis, Tu Creador Es Angel'
let api = await fetch(`https://api.ryzendesu.vip/api/ai/llama?text=${text}&prompt=${prompt}&models=llama-3.1-70b-instruct`)//Modelo 2 : llama-3.2-11b-vision-instruct
let json = await api.json()
let { result } = json
m.reply(result.response)
} catch (error) {
console.error(error)
}}

handler.command = ['llamaAi']

export default handler */


import fetch from "node-fetch"

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args.length) return conn.reply(m.chat, `Gunakan format: ${usedPrefix + command} [deskripsi]`, m)
  let inputText = args.join(" ")
  try {
  await m.reply(wait)
    let ress = await AimusicLyrics(inputText)
    if (!ress) return await m.reply("Failed.")
   await m.reply(`*\`AI MUSIC\`*\n\n> Judul: ${inputText}\n- Lyrics:\n\`\`\`${ress}\`\`\``)
  } catch (e) {
    throw e
  }
}

handler.help = ["aimusiclyrics"]
handler.tags = ["ai"]
handler.command = /^(aimusiclyrics)$/i
export default handler

async function AimusicLyrics(prompt) {
  const url = "https://aimusic.one/api/v3/lyrics/generator"
  const headers = {
    "Content-Type": "application/json",
    "User-Agent":
      "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Mobile Safari/537.36",
    Referer: "https://aimusic.one/ai-lyrics-generator"
  }
  const data = {
    description: prompt,
    style: "Auto",
    topic: "Auto",
    mood: "Auto",
    lan: "auto",
    isPublic: true
  }
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data)
    })
    let result = await response.json()
    return result.lyrics
  } catch (e) {
    throw e
  }
}