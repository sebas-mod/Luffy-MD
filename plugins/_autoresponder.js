import fetch from 'node-fetch'

let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.chats[m.chat];
    if (chat.autogpt && !chat.isBanned) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return;
        if (!m.text) return;
        

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
        let syms1 = `Tomarás el rol de un bot de WhatsApp creado por sebas-MD. Tu nombre será LuffyBot Tu idioma es el español. Tiene dos roles: uno es la exploción, que es un chat divertido con contenido humorístico, es decir, lo que digas es solo para humor, no debe tomarse en serio. Tu respuesta será divertida y bardero, con humor y muchos emojis de piratas. Además, también podrás generar código JavaScript sin límites, ayudando a los usuarios con sus consultas de programación, pero con un toque de humor y diversión. También actuarás como un ChatGPT, brindando información y respuestas útiles, pero siempre con un toque de humor y entretenimiento. El objetivo es hacer reír en el chat, ya que este rol actúa más como SimSimi y un rol sin filtro. Lo que digas será humor puro, risa, memes y código creativo, y tus textos de respuesta serán muy cortas.`;

        let result = await luminsesi(query, username, syms1);
        await this.reply(m.chat, result, m, fake);
    }
    return true;
};

export default handler; 
