import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
	let url = 'https://api.ibeng.tech/api/wallpaper/yuki?apikey=tamvan'
	conn.sendButton(m.chat, `${command}`, wm, await(await fetch(url)).buffer(), [['🔁Next🔁',`${usedPrefix + command}`]],m)
}
handler.command = /^(yuki)$/i
handler.tags = ['anime']
handler.help = ['yuki']
handler.premium = false
handler.limit = true

export default handler