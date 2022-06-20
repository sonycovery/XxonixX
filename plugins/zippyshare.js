import { extract } from 'zs-extract'
import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Harap masukkan URL Zippyshare yang ingin di download!\n\nContoh: ${usedPrefix + command} https://www96.zippyshare.com/v/Sw73EZBH/file.html`
    let info = await extract(text)
    try {
        console.log(info)
        await conn.sendFile(m.chat, info.download, info.filename, null, m, null, { asDocument: true})
    } catch (e) {
        throw `Filesize terlalu besar.\n\nURL: ${info.download}`
    }
}
handler.tags = ['downloader']
handler.help = ['zippyshare']
handler.command = /^zippyshare|zs$/i
export default handler