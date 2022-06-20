import moment from 'moment-timezone'
import fetch from 'node-fetch'
let handler = m => m

export async function all(m) {

    let user = global.db.data.users[m.sender]
    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (!user.firstchat) return
    if (db.data.settings.groupOnly) return
    let name = conn.getName(m.sender)
    let teks = `
*Hi ${name}, ${this.ucapan()}*
Perkenalkan aku adalah WhatsApp-Bot!

Kamu bisa menggunakan WhatsApp-Bot untuk membuat sticker, mendownload video youtube, facebook, tiktok, instagram, atau hanya sekedar bersenang senang! Fitur selengkapnya tentang WhatsApp-Bot bisa di lihat di *.menu*

Kami tidak akan melakukan spam broadcast ke users.

Jangan lupa patuhi rules, dan harap tidak menelpon, vc, spam, mengirimkan bug atau virtex ke nomor bot.
Jika ada bug atau hal yang ingin ditanyakan silahkan menghubungi owner.
Terimakasih!
`.trim()
    const message = {
        image: { url: 'https://telegra.ph/file/b32e52b09508f1737a760.jpg'},
        jpegThumbnail: await(await fetch('https://telegra.ph/file/b32e52b09508f1737a760.jpg')).buffer(),
        caption: teks,
        footer: watermark,
        templateButtons: [
            {
                urlButton: {
                    displayText: 'Owner\'s group',
                    url: 'https://chat.whatsapp.com/Hzui8NKLFMyF4tkhlJGRzK'
                }
            }, {
                quickReplyButton: {
                    displayText: 'Rules',
                    id: '.rules'
                }
            }, {
                quickReplyButton: {
                    displayText: 'D A S H B O A R D',
                    id: '.menu'
                }
            }
        ]
    }
    await this.sendMessage(m.chat, message, { quoted: m })
    user.firstchat = false
}