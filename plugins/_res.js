import fetch from 'node-fetch'
import fs from 'fs'

export async function all(m) {
  let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
  
  
  let stc = await fs.readFileSync('./sticker/emror.webp')


if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.sendMessage(m.chat, { sticker : stc, thumbnail: await( await fetch(pp)).buffer() , contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6289637252247',
title: '「 ❔ 」',
body: wm,
sourceUrl: 'http://github.com/WH-MODS-BOT', thumbnail: await( await fetch(pp)).buffer()
  }
 }}, { quoted: m })
          
        }
    } catch (e) {
        return
    }

                                
}
