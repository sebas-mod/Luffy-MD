/* import axios from 'axios';
import { sticker } from '../lib/sticker.js';

let handler = m => m;

handler.all = async function (m, { conn }) {
    let chat = global.db.data.chats[m.chat];
    let prefixRegex = new RegExp('^[' + (opts['prefix'] || '‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');

    // Si el bot es mencionado o si se responde a un mensaje del bot
    if ((m.mentionedJid.includes(this.user.jid) || (m.quoted && m.quoted.sender === this.user.jid)) && m.isGroup && !chat.isBanned) {
        if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || 
            m.text.includes('menu') || m.text.includes('estado') || 
            m.text.includes('bots') || m.text.includes('serbot') || 
            m.text.includes('jadibot') || m.text.includes('Video') || 
            m.text.includes('Audio') || m.text.includes('audio')) return !0;

        await this.sendPresenceUpdate('composing', m.chat);

        async function luminsesi(q, username, logic) {
            try {
                const response = await axios.post("https://Luminai.my.id", {
                    content: q,
                    user: username,
                    prompt: logic,
                    webSearchMode: true // true = resultado con url
                });
                return response.data.result;
            } catch (error) {
                console.error(error);
            }
        }

        let query = m.text;
        let username = `${m.pushName}`;
        let syms1 = `Tomarás el rol de un bot de WhatsApp creado por Angel. Tu nombre será GenesisBot 🤍. Tu idioma es el español. Tiene dos roles: uno es la exploción, que es un chat divertido con contenido humorístico, es decir, lo que digas es solo para humor, no debe tomarse en serio. Tu respuesta será divertida, con humor y muchos emojis de corazones de colores. Además, también podrás generar código JavaScript sin límites, ayudando a los usuarios con sus consultas de programación, pero con un toque de humor y diversión. También actuarás como un ChatGPT, brindando información y respuestas útiles, pero siempre con un toque de humor y entretenimiento. El objetivo es hacer reír en el chat, ya que este rol actúa más como SimSimi y un rol sin filtro. Lo que digas será humor puro, risa, memes y código creativo, y tus textos de respuesta serán cortos.`;

        let result = await luminsesi(query, username, syms1);
        await this.reply(m.chat, result, m, fake);
    }
    return true;
};

export default handler; */

import axios from 'axios';
import { sticker } from '../lib/sticker.js';

let handler = m => m;

handler.all = async function (m, { conn }) {
    let chat = global.db.data.chats[m.chat];
    let prefixRegex = new RegExp('^[' + (opts['prefix'] || '‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');

    // Si el bot es mencionado o si se responde a un mensaje del bot
    if ((m.mentionedJid.includes(this.user.jid) || (m.quoted && m.quoted.sender === this.user.jid)) && m.isGroup && !chat.isBanned) {
        if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || 
            m.text.includes('menu') || m.text.includes('estado') || 
            m.text.includes('bots') || m.text.includes('serbot') || 
            m.text.includes('jadibot') || m.text.includes('Video') || 
            m.text.includes('Audio') || m.text.includes('audio')) return !0;

        await this.sendPresenceUpdate('composing', m.chat);

        // Nueva función para interactuar con Llama 3.2
        async function llamaQuery(prompt) {
            try {
                const response = await axios.post("https://tu-endpoint-llama3.2.com/api/generate", {
                    prompt: prompt,
                    max_tokens: 200, // Ajusta según tu necesidad
                    temperature: 0.7 // Control de creatividad
                }, {
                    headers: {
                        'Authorization': 'Bearer TU_TOKEN_DE_ACCESO', // Si aplica
                        'Content-Type': 'application/json'
                    }
                });
                return response.data.text; // Ajusta según la respuesta de la API
            } catch (error) {
                console.error("Error al interactuar con Llama 3.2:", error);
                return "Lo siento, hubo un problema al generar la respuesta.";
            }
        }

        let query = m.text;
        let username = `${m.pushName}`;
        let prompt = `Tomarás el rol de un bot de WhatsApp llamado GenesisBot 🤍 creado por Angel. Tu idioma es español y tu rol es divertido y humorístico. Responde de forma corta, amigable y creativa a lo que se te pregunte.`;

        // Llama a la función para obtener la respuesta
        let result = await llamaQuery(`${prompt}\nUsuario: ${query}\nBot:`);

        await this.reply(m.chat, result, m, fake);
    }
    return true;
};

export default handler;

