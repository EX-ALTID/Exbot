import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
	let url = 'https://violetics.pw/api/asupan/thailand?apikey=0a5f-75fe-5ea4'
	conn.sendButton(m.chat, `Nih ${command}`, botdate, await(await fetch(url)).buffer(), [['Next',`${usedPrefix + command}`]],m)
}
handler.command = /^(thailand)$/i
handler.tags = ['asupan']
handler.help = ['thailand']
handler.premium = false
handler.limit = true

export default handler