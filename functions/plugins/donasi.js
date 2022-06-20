import fetch from 'node-fetch'
let handler = async(m, { conn }) => {
    let teks = `
${conn.top('Donasi')}
├ -
│
${conn.bottom('Powered by WhatsApp™')}`.trim()
    const message = {
        image: { url: image},
        jpegThumbnail: await(await fetch(image)).buffer(),
        caption: teks,
        footer: watermark,
        templateButtons: [
            {
                urlButton: {
                    displayText: 'Saweria',
                    url: 'https://saweria.co/SonyCovery'
                }
            }, {
                quickReplyButton: {
                    displayText: 'D A S H B O A R D',
                    id: '.menu'
                }
            }
        ]
    }
    return await conn.sendMessage(m.chat, message, { quoted: m })
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler