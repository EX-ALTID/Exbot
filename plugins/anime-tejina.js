import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
  let url = 'https://api.ibeng.tech/api/wallpaper/tejina?apikey=tamvan'
  conn.sendButton(m.chat, 'Nih', botdate, await (await fetch(url)).buffer(), [['🔁Next🔁', `${usedPrefix + command}`]], m)
}
handler.command = /^(tejina)$/i
handler.tags = ['anime']
handler.help = ['tejina']
handler.premium = false
handler.limit = true

export default handler