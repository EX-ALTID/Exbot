
// BY ZYKO MD 
import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw `Hay adakah yang bisa saya bantu??`
await m.reply(`${htki} ${htjava} Searching... ${htka}`)
let zykomd = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=2da1fcd209f20ae428d8482f&text=${text}&user=user-unique-id`)
let hasil = await zykomd.json()
 m.reply(`${hasil.result}`.trim())
    }  
handler.help = ['ai', 'openai']
handler.tags = ['openaimenu']
handler.command = /^(ai|openai)$/i
export default handler