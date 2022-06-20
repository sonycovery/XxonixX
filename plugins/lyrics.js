import { lyrics, lyricsv2 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!teks) throw `Use example ${usedPrefix}${command} hallo`
    const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
    m.reply(`
Title: ${result.title}
Author ${result.author}

${result.lyrics}
`.trim())
}

handler.help = ['lirik'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|liriks|lyrics|lyric)$/i

export default handler