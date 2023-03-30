import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
	let url = 'https://telegra.ph/file/c78b2ae0ccc5e2b355623.jpg'
let wm = 'Hai Saya Ex-Bot, rate ini di buat febuary 2023'
let cap = `*🅓︎ 🅐︎ 🅨︎ 🅡︎ - 🅡︎ 🅐︎ 🅣︎ 🅔︎*`
	conn.sendButton(m.chat, cap, wm, await(await fetch(url)).buffer(), [['🅓︎🅐︎🅨︎',`🅡︎`]],m)
}

handler.command = /^(rate|dayr)$/i
handler.premium = false
handler.limit = true

export default handler
