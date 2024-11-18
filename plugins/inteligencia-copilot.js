import fetch from 'node-fetch'

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

export default handler