let { MessageType } = (await import('@adiwajshing/baileys')).default
import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

 let tag = `@${m.sender.split('@')[0]}`
 let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999, status: 1, surface: 1, message: `${command} ${type}`, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Exalt;;;\nFN:Exalt\nORG:Exalt\nTITLE:\nitem1.TEL;waid=6289637252247:+62 896-3725-2247\nitem1.X-ABLabel:Exalt\nX-WA-BIZ-DESCRIPTION:${htjava} Tᴀᴋ ᴍᴇɴᴇʀɪᴍᴀ sᴀᴠᴇ ᴋᴏɴᴛᴀᴋ!!\nX-WA-BIZ-NAME:Exalt\nEND:VCARD`
//------- NOMOR
 const pp = fs.readFileSync('./media/menu.jpg')
  let nowner1 = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let nowner2 = `${nomorown1.split`@`[0]}@s.whatsapp.net`
let teksnomor = (
`╳ ── ◸ *Mʏ Oᴡɴᴇʀ* ◹ ── ╳
⟣⟮ *${nameown}* ⟯⟢
⟬ @${nomorown.split`@`[0]} ⟭
┆
⟣⟮ *${nameown1}* ⟯⟢
⟬ @${nomorown1.split`@`[0]} ⟭
┆`
)
//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1])
let teksbio = `
┆⫹⫺ 💌 Nama : Exalt
┆⫹⫺ ♂️ Gender : Pria
┆⫹⫺ 🕋 Agama : Islam
┆⫹⫺ ⏰ Tanggal lahir : 24-03-1990
┆⫹⫺ 🎨 Umur : 33
┆⫹⫺ 🧩 Hobby : Liatin kamu
┆⫹⫺ 🗺️ Tinggal : Indonesia, Gorontalo
┆⫹⫺ ${sig}
└––––––––––––·•
`
let ppown2 = await conn.profilePictureUrl(nomorown1 + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio2 = `┆⫹⫺ 💌 Nama : Lisa Amelia
┆⫹⫺ ♂️ Gender : Wanita
┆⫹⫺ 🕋 Agama : Islam
┆⫹⫺ ⏰ Tanggal lahir : 27 - 02- 2006
┆⫹⫺ 🎨 Umur : 17
┆⫹⫺ 🧮 Kelas : XI
┆⫹⫺ 🧩 Hobby : Banyak
┆⫹⫺ 💬 Sifat : ASIK,BAIK,RAMAH
┆⫹⫺ 🗺️ Tinggal : Indonesia, Bogor
┆⫹⫺ ${sigpcr}
└––––––––––––·•
`
  let tek = `⟣⟞⟚⟝ 〨⎣ *${command}* ⎤〨 ⟞⟚⟝⟢`
const sections = 
[{
title: `⫹⫺ OTHER ⫹⫺`,
rows: [
{title: "⸙ Kontak", rowId: `${usedPrefix}owner kontak`},
{title: "⸙ Nomor", rowId: `${usedPrefix}owner nomor`},
{title: "⸙ My owner", rowId: `${usedPrefix}owner bio`},
{title: "⸙ Pengembang", rowId: `${usedPrefix}Exbot`},
{title: "⸙ Creator", rowId: `${usedPrefix}Ex-alt`},
{title: "⸙ Script", rowId: `${usedPrefix}sc`},
]}, {
title: `⬔ SUPPORT ME ⬔`,
rows: [
{title: "〠 Donasi", rowId: `${usedPrefix}owner nomor`},
{title: "〠 Sewa", rowId: `${usedPrefix}sewa`},
{title: "〠 Buy Premium", rowId: `${usedPrefix}premium`},
]},]
const listMessage = {
  text: tek,
  footer: wm,
  title: null,
  buttonText: "Click !!",
  sections
}
  try {
    if (/(creator|owner|pengembang)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {


        case 'kontak': 
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: ftroli })
        break
          case 'nomor':
         /* conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nomorown] }})*/
 /*  conn.sendButton(m.chat, teksnomor, null, pp, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m, { contextInfo: { mentionedJid: [nomorown] }})*/
 conn.send2ButtonImg(m.chat, fs.readFileSync('./media/menu.jpg').buffer, teksnomor, `Halo ${tag}\nIni owner saya \n` + botdate, `Sewa Bot`, `${usedPrefix}sewa`, 'Menu', `${usedPrefix}menu`, ftroli, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/Miskawatydihuma',
    mediaType: 2, 
    description: sgc,
    title: "group gabut",
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
     }}
  })
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

   conn.sendButton(m.chat, '┍┈༺ *BioData Exalt* ༻', teksbio, ppown, [
                ['Sewa', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
                        case 'bio2':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, '┍┈༺ *BioData Ex-Bot* ༻', teksbio2, ppown2, [
                ['Sewa', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
           return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `${usedPrefix}menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|pengembang|creator)$/i
export default handler