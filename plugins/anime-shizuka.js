import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
  let url = 'https://api.ibeng.tech/api/wallpaper/shizuka?apikey=tamvan'
  conn.sendButton(m.chat, 'Nih', botdate, await (await fetch(url)).buffer(), [['🔁Next🔁', `${usedPrefix + command}`]], m)
}
handler.command = /^(shizuka)$/i
handler.tags = ['anime']
handler.help = ['shizuka']
handler.premium = false
handler.limit = true

export default handler