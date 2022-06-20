let handler = async(m, { conn }) => {
    let caption = `
*Kebijakan Privasi, Syarat Ketentuan dan Peraturan WhatsApp-Bot*

*Kebijakan Privasi*
1. WhatsApp-Bot tidak akan merekam data riwayat chat user.
2. WhatsApp-Bot tidak akan menyebarkan nomor users.
3. WhatsApp-Bot tidak akan menyimpan media yang dikirimkan oleh users.
4. WhatsApp-Bot tidak akan menyalah gunakan data data users.
5. Owner WhatsApp-Bot berhak melihat data riwayat chat users.
6. Owner WhatsApp-Bot berhak melihat status users.
7. Owner WhatsApp-Bot dapat melihat riwayat chat, dan media yang dikirimkan users.

*Peraturan WhatsApp-Bot*
1. Users dilarang menelpon maupun men-video call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi owner.

*Syarat Ketentuan WhatsApp-Bot*
1. WhatsApp-Bot dapan mem-ban users secara sepihak terlepas dari users salah atau tidak.
2. WhatsApp-Bot tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.
3. WhatsApp-Bot akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.

${watermark}`.trim()
    await conn.reply(m.chat, caption, m, { contextInfo: {
        externalAdReply: {
            sourceUrl: 'https://www.youtube.com/c/SonyCovery',
            title: 'Rules',
            body: '© Powered by WhatsApp™',
            thumbnailUrl: image
        }
    }})
}
handler.command = /^(rules|rule|role|roles|snk|aturan|peraturan)$/i
handler.tags = ['main']
handler.help = ['rules']
export default handler