import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'exalt') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;  Ex-Botz\nNICKNAME:👑 Owner Exalt \nORG: Ex-Alt \nTITLE:soft\nitem1.TEL;waid=6282118969778:+62 821-1896-9778\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://s.id/Cerdasin62\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: id.exalt@gmail.com\nitem3.X-ABLabel:💌 Mail Owner  Exalt\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 ,24-april 1990\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
let caption = `👋 Hai *@${who.split("@")[0]}*, ini my owner kak`
    await conn.sendButton(m.chat, caption, author, null, [['👨 Owner', `${usedPrefix}nomor owner`]], m, { quoted: fkontak, mentions: conn.parseMention(caption) })
}
/*if (command == 'Ex-bot') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6283133329293:+62 831-3332-9293\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih pengembang ku kack yg mengaktifkan aq.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor ownerku , jangan di spam ya `,m)
  }*/
}
handler.tags = ['info']
handler.command = /^(exalt|ex-bot)$/i
export default handler