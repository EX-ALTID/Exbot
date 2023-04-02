import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
	let url = 'https://api.ibeng.tech/api/wallpaper/keneki?apikey=tamvan'
	conn.sendButton(m.chat, 'Waifu nya om (≧ω≦)', wm, await(await fetch(url)).buffer(), [['🔁Next',`${usedPrefix + command}`]],m)
}
handler.command = /^(keneki)$/i
handler.tags = ['anime']
handler.help = ['keneki']
handler.premium = false
handler.limit = true

export default handler