import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
       let nnn = `@${m.sender.replace(/@.+/, '')}`
       let hj = '0'
       let mek = '6283133329293'
       let k = `@${mek.split`@`[0]}`
       let akaa = `@${hj.split`@`[0]}`
       
  let mentionedJid = [m.sender]
let scnya = `⟥⟞⟚━┈┈ ❨ Hʏ ${nnn} ❩ ┈┈━⟚⟝⟤`
    let footerny = `Rᴇᴄᴏᴅᴇ Bʏ : ${nameown}
*Owɴᴇʀ* : ${nameown}
*Sᴄ Bᴀsᴇ* : Aldi Lesmana
*Sᴄ Oʀɪ* : ${k}
*Mᴀʀᴋ Zᴜᴋᴇʙᴇʀɢ* : ${akaa}
*Mʏ Pʀᴏᴊᴇᴄᴛ* : 21 𝐷𝑒𝑠𝑒𝑚𝑏𝑒𝑟 2022

Sᴄʀɪᴘᴛ : https://youtu.be/ksSAA3bxs_0

⫹❰⫺ Bɪɢ Tʜᴀɴᴋs Tᴏ ⫹❱⫺
⭝ Aʟʟᴀʜ Yᴀɴɢ Mᴀʜᴀ Esᴀ
⭝ Oʀᴀɴɢ Tᴜᴀ
⭝ Tᴇᴍᴇɴ Gᴡ
⭝ Pᴀᴄᴀʀ Gᴡ LɪsᴀAᴍᴇʟɪᴀ:ᴠ
⭝ Mᴀsᴛᴀʜ - Mᴀsᴛᴀʜ

⫹⫺ Tʜᴇ Nᴀᴍᴇ Tʜᴀᴛ Hᴇʟᴘᴇᴅ Mᴇ ⫹⫺
⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔
⭝ Aᴅɪᴡᴀᴊɪsʜɪɴɢ
⭝ Nᴀʀᴜᴛᴏᴍᴏ
⭝ Jᴀʀᴏᴛ Oғᴄ
⭝ Hʏᴢᴇʀ
⭝ Dᴇғғʀɪ
⭝ KᴀɴɴᴀCʜᴀɴ
⭝ Cʜʀɪsᴛɪᴀɴ Iᴅ
⭝ Aɪɴᴇ
⭝ Fᴏᴋᴜs Iᴅ
⭝ Aʀɪғғʙ
⭝ Iʟᴍᴀɴ
⭝ Kʀɪʏᴢɴ
⭝ Aʟᴅɪ Lᴇsᴍᴀɴᴀ
⭝ Wʜ Mᴏᴅs Dᴇᴠ
⭝ Eʟᴀɪɴᴀ
⭝ Zʏᴋᴏ Mᴅ
⭝ Aᴍɪʀᴜʟ
⭝ Isᴛɪᴋᴍᴀʟ
⭝ Fᴢᴏɴᴇ
⭝ Fᴀᴊᴀʀ
⭝ Aʀᴜʟʟ Oғᴄ
⭝ Zᴇᴇᴏɴᴇ Oғᴄ
⭝ Rᴀᴍʟᴀɴ
⭝ GᴇᴍᴘʏTᴏɴ
▸ - - - —「 Penulis Ulang 」— - - - ◂
${namagithub}
▸ - - - —「 Thanks For Suhu 」— - - - ◂
❉ Wʜ ᴍᴏᴅs ᴅᴇᴠ:
❉ Aʟᴅɪ Lᴇsᴍᴀɴᴀ:
`
 conn.send3ButtonImg(m.chat, `https://telegra.ph/file/ca93c533a0f2749131de1.jpg`, scnya, footerny, emojis + 'Menu', '.menuv1', emojis +'Owner', '.owner',emojis + 'Speed', '.speed', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/kabulsaputra21',
    mediaType: 2, 
    description: sgc,
    title: "Jᴏɪɴ Sɪɴɪ Cᴜʏ",
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
     }}
  })
}
handler.help = ['tqto']
handler.tags = ['main','info']
handler.command = /^(credits|credit|tqto)$/i
export default handler
