
import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
if (!args[0]) throw `Membuat gambar dari AI.\n\nContoh:\n${command} Wooden house on snow mountain`
await m.reply(`${htki} ${htjava} Searching... ${htka}`)
  let res = `https://api.lolhuman.xyz/api/dall-e?apikey=2da1fcd209f20ae428d8482f&text=${text}`
  let nih = "nih udah jadi"
  conn.sendHydrated2(m.chat, nih, wm3, res,  'https://instagram.com/miskawatydihuma', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', [['Donasi', `${usedPrefix}donasi`],
  ['Owner', `${usedPrefix}owner`]], m)
  
}
handler.help = ['ai-image', 'aidraw']
handler.tags = ['openaimenu']
handler.command = /^(ai-image|aidraw)$/i
handler.limit = false

export default handler
       