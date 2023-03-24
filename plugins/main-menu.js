import os from 'os'
import fetch from 'node-fetch'
import fs from 'fs'
import { promises, readFileSync } from 'fs'
import jimp from 'jimp'
import PhoneNumber from 'awesome-phonenumber'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
//-----------TIME---------
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let mode = global.opts['self'] ? 'Private' : 'Publik'
    let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length
    let ucpn = `${ucapan()}`
    let tag = `@${m.sender.replace(/@.+/, '')}`
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let zykomd = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
    let { exp, limit, level, premiumDate, premium, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]  
    let platform = os.platform()
    let user = global.db.data.users[m.sender]
    let usrs = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(who)
    let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || ''
    let now = new Date() * 1
    if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 100,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
let math = max - xp
let _mpt
if (process.send) {
process.send('uptime')
_mpt = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let mpt = clockString(_mpt)
let imgr = flaaa2
let res = JSON.parse(readFileSync('./json/emoji.json'))
let em = res.emoji
let waifu = hwaifu.getRandom()
let sapa = ['Hai', 'Ohayo', 'Kyaa', 'Halo', 'Nyann'].getRandom()
let oh = fs.readFileSync('./thumbnail.jpg')
let zyo = ` 👋, ${sapa} ${name} ${ucapan()},`
let alok = `${ucapan()}, ${tag} 👋`
let teso = `${cmenut} Information ${htka}`
let info = `*I N F O R M A T I O N*`
let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪'])}`
let nau = global.zyko
let weem = `📮 *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner`

     /*============== MENU ==============*/

let awal = `
️  ❍⃕  𝐈 𝐍 𝐅 𝐎 𝐔 𝐒 𝐄 𝐑

  ⬡ 𝐍𝐚𝗺𝐚 : ${name}
  ⬡ 𝐁𝐢𝐨 : ${about}
  ⬡ 𝐒𝐭𝐚𝐭𝐮𝐬 : ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
  ⬡ L𝐢𝗺𝐢𝐭 : ${user.limit}
  ⬡ 𝐌𝐨𝐧𝐞𝐲: 𝐑𝐏 ${money}
  ⬡ 𝐄𝐱𝐩 : ${user.exp}
  ⬡ 𝐑𝗼𝐥𝐞 : ${role}
  ⬡ 𝐀𝐠𝐞 : ${registered ? age : ''}
  ⬡ 𝐓𝐞𝐫𝐝𝐚𝐟𝐭𝐚𝐫 : ${registered ? 'Ya ' : 'Tidak'}
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
  ❍⃕  𝐈 𝐍 𝐅 𝐎 𝐁 𝐎 𝐓 
  
  ⬡ 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦  : ${platform}
  ⬡ M𝗼𝐝𝐞 : ${mode}
  ⬡ 𝐔𝐩𝐭𝐢𝐦𝐞 : ${mpt} 
  ⬡ 𝐓𝗼𝐭𝐚𝐥 𝐅𝐞𝐚𝐭𝐮𝐫𝐞 : ${totalf}
  ⬡ 𝐏𝐞𝐧𝐠𝐠𝐮𝐧𝐚 : ${Object.keys(global.db.data.users).length} 
  ⬡ 𝐂𝐡𝐚𝐭 𝐓𝐞𝐫𝐛𝐚𝐧𝐧𝐞𝐝 : ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
  ⬡ 𝐏𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐓𝐞𝐫𝐛𝐚𝐧𝐧𝐞𝐝 : ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
  ⬡ 𝐉𝐚𝐦 : ${wib}
  ⬡ 𝐇𝐚𝐫𝐢 : ${week} ${weton}
  ⬡ 𝐓𝐚𝐧𝐠𝐠𝐚𝐥 : ${date} `

  /*============== MENU1 ==============*/  
  
let menu1 = `
️  ❍⃕  𝐈 𝐍 𝐅 𝐎 𝐔 𝐒 𝐄 𝐑

  ${emot} 𝐍𝐚𝗺𝐚 : ${name}
  ${emot} 𝐁𝐢𝐨 : ${about}
  ${emot} 𝐒𝐭𝐚𝐭𝐮𝐬 : ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
  ${emot} L𝐢𝗺𝐢𝐭 : ${user.limit}
  ${emot} 𝐌𝐨𝐧𝐞𝐲: 𝐑𝐏 ${money}
  ${emot} 𝐄𝐱𝐩 : ${user.exp}
  ${emot} 𝐑𝗼𝐥𝐞 : ${role}
  ${emot} 𝐀𝐠𝐞 : ${registered ? age : ''}
  ${emot} 𝐓𝐞𝐫𝐝𝐚𝐟𝐭𝐚𝐫 : ${registered ? 'Ya ' : 'Tidak'}
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
  ❍⃕  𝐈 𝐍 𝐅 𝐎 𝐁 𝐎 𝐓 
  
  ${emot} 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦  : ${platform}
  ${emot} M𝗼𝐝𝐞 : ${mode}
  ${emot} 𝐔𝐩𝐭𝐢𝐦𝐞 : ${mpt} 
  ${emot} 𝐓𝗼𝐭𝐚𝐥 𝐅𝐞𝐚𝐭𝐮𝐫𝐞 : ${totalf}
  ${emot} 𝐏𝐞𝐧𝐠𝐠𝐮𝐧𝐚 : ${Object.keys(global.db.data.users).length} 
  ${emot} 𝐂𝐡𝐚𝐭 𝐓𝐞𝐫𝐛𝐚𝐧𝐧𝐞𝐝 : ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
  ${emot} 𝐏𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐓𝐞𝐫𝐛𝐚𝐧𝐧𝐞𝐝 : ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
  ${emot} 𝐉𝐚𝐦 : ${wib}
  ${emot} 𝐇𝐚𝐫𝐢 : ${week} ${weton}
  ${emot} 𝐓𝐚𝐧𝐠𝐠𝐚𝐥 : ${date} `
  
  /*============== MENU2 ==============*/ 
   
let menu2 = `${cmenut} Information ${htka}
 ${cmenub} Nama: ${name}
 ${cmenub} Bio : ${about}
 ${cmenub} Money: RP ${money}
 ${cmenub} Level ${level}
 ${cmenub} Role: ${role}
 ${cmenub} XP: TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Siap untuk ${usedPrefix}levelup` : `${math} XP lagi untuk levelup`}]
 ${cmenub} Terdaftar: ${registered ? 'Ya' : 'Tidak'}
 ${cmenub} Premium : ${premium ? 'Premium' : 'Free'}
 ${cmenub} Expired Premium : ${(premiumDate - now) > 1 ? msToDate(premiumDate - now) : 'No setting expired'}${lastclaim > 0 ? '\nLast Claim: ' + new Date(lastclaim) : ''}
 ${cmenub} Jam: ${wib}
 ${cmenub} Hari: ${week} ${weton}
 ${cmenub} Tanggal: ${date} 
 ${cmenuf}

 Ketik ${usedPrefix}inv untuk melihat Inventory RPG Lu Ngab

${cmenua}` 

      /*============== MENU3 ==============*/ 

let menu3 = ` ${cmenut} Information ${htka}
${emot} 🏷️ Nama: ${name}
${emot} 🗯 Bio : ${about}
${emot} 💲 Money: RP ${money}
${emot} 🏆 Level ${level}
${emot} 🎋 Role: ${role}
${emot} 🧬 XP: TOTAL ${exp}
${emot} 📨 Terdaftar: ${registered ? 'Ya' : 'Tidak'}
${cmenuf}` 

     /*============== MENU4 ==============*/

let menu4 = `

👤 Hai 👋 ${name},
🏷️ Nama: ${name}
🗯 Bio : ${about}
💲 Money: RP ${money}
🏆 Level ${level}
🎋 Role: ${role}
🧬 XP: TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Siap untuk ${usedPrefix}levelup` : `${math} XP lagi untuk levelup`}]
📨 Terdaftar: ${registered ? 'Ya ' : 'Tidak'}`

     /*============== MENU5 ==============*/ 
 
let menu5 = `${namebot} _ᴀᴅᴀʟᴀʜ ᴘʀᴏɢʀᴀᴍ ᴋᴏᴍᴘᴜᴛᴇʀ ʏᴀɴɢ ᴅɪᴊᴀʟᴀɴᴋᴀɴ ᴅɪ ᴡʜᴀᴛsᴀᴘᴘ ʏᴀɴɢ ᴋʜᴜsᴜs ᴅɪʙᴜᴀᴛ ᴜɴᴛᴜᴋ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴘᴇᴋᴇʀᴊᴀᴀɴ-ᴘᴇᴋᴇʀᴊᴀᴀɴ ᴏᴛᴏᴍᴀᴛɪs, ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ᴅɪʀᴀɴᴄᴀɴɢ sᴇᴅᴇᴍɪᴋɪᴀɴ ʀᴜᴘᴀ sᴇʜɪɴɢɢᴀ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ɴʏᴀᴍᴀɴ, ᴅᴀɴ ᴋᴇᴍᴜɴɢᴋɪɴᴀɴ ᴍᴇᴍɪʟɪᴋɪ sᴇᴅɪᴋɪᴛ ʙᴜɢ, ᴀᴅᴀɴʏᴀ ғɪᴛᴜʀ ᴅᴀʀɪ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ɪɴɪ ᴛᴇɴᴛᴜ ᴀᴋᴀɴ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ ᴜɴᴛᴜᴋ ʙᴇʀsᴇɴᴀɴɢ sᴇɴᴀɴɢ, ᴅʟʟ_\n\n\n${tag}`

     /*============== MENU6 ==============*/
  
let menu6 = `
❍⃕  「 ${name} 」

❍⃕  *I N F O - B O T*\n\n${emot} Sistem otomatis (WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data/informasi hanya melalui WhatsApp.\n\n❍⃕   *N O T E* \n\n${emot} Gunakan bot di private message agar bot merespon dengan cepat, \n\n${emot} Beri jeda yah agar terhindar dari banned😇\n\n📮 *Note:* _Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner dengan cara ketik .report banh tik tok audio error_\n\n\n${tag}\n\n\n${botdate}`

     /*============== MENU7 ==============*/
     
let menu7 = `${cmenut} Information ${htka}
 ${emot} Nama: ${name}
 ${emot} Bio : ${about}
 ${emot} Money: RP ${money}
 ${emot} Level ${level}
 ${emot} Role: ${role}
 ${emot} XP: TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Siap untuk ${usedPrefix}levelup` : `${math} XP lagi untuk levelup`}]
 ${emot} Terdaftar: ${registered ? 'Ya' : 'Tidak'}
 ${emot} Premium : ${premium ? 'Premium' : 'Free'}
 ${emot} Expired Premium : ${(premiumDate - now) > 1 ? msToDate(premiumDate - now) : 'No setting expired'}${lastclaim > 0 ? '\nLast Claim: ' + new Date(lastclaim) : ''}
 ${emot} Jam: ${wib}
 ${emot} Hari: ${week} ${weton}
 ${emot} Tanggal: ${date} 
 ${cmenuf}

 Ketik ${usedPrefix}inv untuk melihat Inventory RPG Lu Ngab

${cmenua}` 

     /*============== MENU8 ==============*/
  
let menu8 = `
❍⃕  「 ${name} 」

❍⃕  *I N F O - B O T*\n\n${emot} Sistem otomatis (WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data/informasi hanya melalui WhatsApp.\n\n❍⃕   *N O T E* \n\n${emot} Gunakan bot di private message agar bot merespon dengan cepat, \n\n${emot} Beri jeda yah agar terhindar dari banned😇\n\n📮 *Note:* _Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner dengan cara ketik .report banh tik tok audio error_\n\n\n${wm}\n\n\n${botdate}`

          /*============== MENU9 ==============*/

let menu9 = `
️  ❍⃕  𝐈 𝐍 𝐅 𝐎 𝐔 𝐒 𝐄 𝐑

  ⬡ 𝐍𝐚𝗺𝐚 : ${name}
  ⬡ 𝐁𝐢𝐨 : ${about}
  ⬡ 𝐒𝐭𝐚𝐭𝐮𝐬 : ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
  ⬡ L𝐢𝗺𝐢𝐭 : ${user.limit}
  ⬡ 𝐌𝐨𝐧𝐞𝐲: 𝐑𝐏 ${money}
  ⬡ 𝐄𝐱𝐩 : ${user.exp}
  ⬡ 𝐑𝗼𝐥𝐞 : ${role}
  ⬡ 𝐀𝐠𝐞 : ${registered ? age : ''}
  ⬡ 𝐓𝐞𝐫𝐝𝐚𝐟𝐭𝐚𝐫 : ${registered ? 'Ya ' : 'Tidak'}
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
  ❍⃕  𝐈 𝐍 𝐅 𝐎 𝐁 𝐎 𝐓 
  
  ⬡ 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦  : ${platform}
  ⬡ M𝗼𝐝𝐞 : ${mode}
  ⬡ 𝐔𝐩𝐭𝐢𝐦𝐞 : ${mpt} 
  ⬡ 𝐓𝗼𝐭𝐚𝐥 𝐅𝐞𝐚𝐭𝐮𝐫𝐞 : ${totalf}
  ⬡ 𝐏𝐞𝐧𝐠𝐠𝐮𝐧𝐚 : ${Object.keys(global.db.data.users).length} 
  ⬡ 𝐂𝐡𝐚𝐭 𝐓𝐞𝐫𝐛𝐚𝐧𝐧𝐞𝐝 : ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
  ⬡ 𝐏𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐓𝐞𝐫𝐛𝐚𝐧𝐧𝐞𝐝 : ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
  ⬡ 𝐉𝐚𝐦 : ${wib}
  ⬡ 𝐇𝐚𝐫𝐢 : ${week} ${weton}
  ⬡ 𝐓𝐚𝐧𝐠𝐠𝐚𝐥 : ${date}\n\n\n${wm}\n\n\n${botdate}`
  
        /*============== MENU10 ==============*/ 

let menu10 = `
${emot} 🏷️ Nama: ${name}
${emot} 🗯 Bio : ${about}
${emot} 💲 Money: RP ${money}
${emot} 🏆 Level ${level}
${emot} 🎋 Role: ${role}
${emot} 🧬 XP: TOTAL ${exp}
${emot} 📨 Terdaftar: ${registered ? 'Ya' : 'Tidak'}
${cmenuf}\n\n\n${wm}` 

  /*============== MENU11 ==============*/ 
   
let menu11 = `
 ${cmenub} Nama: ${name}
 ${cmenub} Bio : ${about}
 ${cmenub} Money: RP ${money}
 ${cmenub} Level ${level}
 ${cmenub} Role: ${role}
 ${cmenub} XP: TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Siap untuk ${usedPrefix}levelup` : `${math} XP lagi untuk levelup`}]
 ${cmenub} Terdaftar: ${registered ? 'Ya' : 'Tidak'}
 ${cmenub} Premium : ${premium ? 'Premium' : 'Free'}
 ${cmenub} Expired Premium : ${(premiumDate - now) > 1 ? msToDate(premiumDate - now) : 'No setting expired'}${lastclaim > 0 ? '\nLast Claim: ' + new Date(lastclaim) : ''}
 ${cmenub} Jam: ${wib}
 ${cmenub} Hari: ${week} ${weton}
 ${cmenub} Tanggal: ${date} 
 ${cmenuf}

 Ketik ${usedPrefix}inv untuk melihat Inventory RPG Lu Ngab

${cmenua}\n\n\n${wm}`

      /*============== MENU12 ==============*/ 

let menu12 = `❏–––––––––––––❏
 ${cmenub} 🏷️ Nama: ${name}
 ${cmenub} 🗯 Bio : ${about}
 ${cmenub} 💲 Money: RP ${money}
 ${cmenub} 🏆 Level ${level}
 ${cmenub} 🎋 Role: ${role}
 ${cmenub} 🧬 XP: TOTAL ${exp}
 ${cmenub} 📨 Terdaftar: ${registered ? 'Ya' : 'Tidak'}
 ${cmenuf}
 ${cmenua}\n\n${wm}`
let pusat = ["ke1", "ke2", "ke3", "ke4", "ke5", "ke6", "ke7", "ke8", "ke9","ke10", "ke11", "ke12","ke13", "ke14", "ke15", "ke16","ke17", "ke18", "ke19", "ke20","ke21", "ke22", "ke23", "ke24", "ke25"]
let pilih = pusat.getRandom()
if (pilih == "ke1") {
conn.send3ButtonImg(m.chat, waifu, zyo, awal + '\n\n' + wm, em.getRandom() + 'All Menu', '.? all', em.getRandom() + 'List Menu', '.tesm', em.getRandom() + 'Sewa', '.sewa', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://www.instagram.com/kabulsaputra21',
    mediaType: 2, 
    description: sgc,
    title: 'Jᴏɪɴ Sɪɴɪ Cᴜʏ',
    body: bottime,
    thumbnail: await(await fetch(zykomd)).buffer(),
    sourceUrl: sig,
}}
  })
}   
if (pilih == "ke2") {    
conn.send3ButtonVid(m.chat, nau, zyo, menu1 + '\n\n' + weem, em.getRandom() + 'All Menu', '.? all', em.getRandom() + 'List Menu', '.tesm', em.getRandom() + 'Sewa', '.sewa', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://www.tiktok.com/@lisaamelia09_',
    mediaType: 2, 
    description: sgc,
    title: 'Jᴏɪɴ Sɪɴɪ Cᴜʏ',
    body: bottime,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: tik,
}}
  })
}   
if (pilih == "ke3") {  
conn.sendButtonImg(m.chat, imgr + 'Menu', zyo, menu2 + '\n\n' + botdate + '\n\n' + wm, em.getRandom() + ' List Menu', '.tesm', fkontak, { contextInfo: { externalAdReply: { showAdAttribution: true,
  mediaUrl: 'https://instagram.com/lisaamelia8680',
  mediaType: 2, 
  description: sgc,
  title: "Jᴏɪɴ Sɪɴɪ Cᴜʏ",
  body: wm,
  thumbnail: await(await fetch(zykomd)).buffer(),
  sourceUrl: sig, 
}}
  })
}   
if (pilih == "ke4") {  
conn.send2ButtonImg(m.chat, imgr + 'Menu', zyo, menu2 + '\n\n' + botdate + '\n\n' + wm, em.getRandom() + 'All Menu', '.? all', em.getRandom() + ',List Menu', '.tesm', fkontak, { contextInfo: { externalAdReply: { showAdAttribution: true,
  mediaUrl: 'https://instagram.com/lisaamelia8680',
  mediaType: 2, 
  description: sgc,
  title: "Jᴏɪɴ Sɪɴɪ Cᴜʏ",
  body: wm,
  thumbnail: await(await fetch(waifu)).buffer(),
  sourceUrl: sig, 
}}
  })
}   
if (pilih == "ke5") {   
conn.send2ButtonDoc(m.chat, zyo, menu6, em.getRandom() + 'All Menu', '.? all', em.getRandom() + 'Owner', '.owner', fkontak, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: bottime,
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: false,
    sourceId: wm,
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await (await fetch(thumb)).buffer(),
    thumbnailUrl: sgc,
    title: gcname,  
}}
  })
}   
if (pilih == "ke6") {   
conn.send3ButtonImg(m.chat, await genProfile(conn, m), zyo, menu5, em.getRandom() +  'All Menu', '.? all', em.getRandom() +  'List Menu', '.tesm', em.getRandom() + 'Speed', '.speed', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://www.facebook.com/ZykoBotz',
    mediaType: 2, 
    description: sgc,
    title: "Hᴀʟᴏ Jᴀɴɢᴀɴ Lᴜᴘᴀ Bᴇʀsʏᴜᴋᴜʀ!!",
    body: bottime,
    thumbnail: fs.readFileSync('./media/menu.jpg'),
    sourceUrl: sgc 
}}
  })
}       
if (pilih == "ke7") {      
  conn.send2ButtonImg(m.chat, await genProfile(conn, m), zyo, menu8, em.getRandom() +  'All Menu', '.? all', em.getRandom() +  'List Menu', '.tesm', fkontak, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://www.facebook.com/ZykoBotz',
    mediaType: 2, 
    description: sgc,
    title: `${sapa} ${name} 👋,`,
    body: bottime,
    thumbnail: fs.readFileSync('./media/menu1.jpg'),
    sourceUrl: sgc 
    }}
  })
}   
if (pilih == "ke8") {     
  conn.send2ButtonImg(m.chat, await ggenProfile(conn, m), zyo, menu9, em.getRandom() +  'All Menu', '.? all', em.getRandom() +  'List Menu', '.tesm', fkontak, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/lisaamelia8680',
    mediaType: 2, 
    description: sgc,
    title: `${sapa} ${name} 👋,`,
    body: bottime,
    thumbnail: fs.readFileSync('./media/menu3.jpg'),
    sourceUrl: sig
   }}
  })
}
if (pilih == "ke9") {    
 conn.send2ButtonImg(m.chat, await genProfile(conn, m), alok, menu3 + '\n\n' + botdate + '\n\n' + wm, em.getRandom() + 'All Menu', '.? all', em.getRandom() + 'List Menu', '.listmenu', fkontak)
}
if (pilih == "ke10") {  
 conn.sendHydrated2(m.chat, menu1, wm, nau, 'https://youtu.be/IVhDnYdFTCA', 's ᴄ ʀ ɪ ᴘ ᴛ', 'https://instagram.com/kabulsaputra21', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', [[em.getRandom() + 'All Menu', `.? all`],
  [em.getRandom() + 'List Menu', `.tesm`],[em.getRandom() + 'Credit', `.credit`]], m)
}
if (pilih == "ke11") {     
conn.sendHydrated2(m.chat, menu4, wm, waifu, 'https://vt.tiktok.com/ZS8x2Lwbd/', 'ᴛ ɪ ᴋ ᴛ ᴏ ᴋ', 'https://instagram.com/lisaamelia8680', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', [[em.getRandom() + 'All Menu', `.? all`],
  [em.getRandom() + 'List Menu', `.tesm`],[em.getRandom() + 'Sewa', `.sewa`]], m)
}
if (pilih == "ke12") {  
conn.sendHydrated2(m.chat, awal, titlebot, waifu, 'https://vt.tiktok.com/ZS8x2Lwbd/', 'ᴛ ɪ ᴋ ᴛ ᴏ ᴋ', 'https://instagram.com/lisaamelia8680', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', [[em.getRandom() + 'All Menu', `.? all`],
  [em.getRandom() + 'List Menu', `.tesm`],[em.getRandom() + 'Sewa', `.sewa`]], m) 
}
if (pilih == "ke13") {   
conn.sendHydrated2(m.chat, teso, menu10, nau, 'https://vt.tiktok.com/ZS8x2Lwbd/', 'ᴛ ɪ ᴋ ᴛ ᴏ ᴋ', 'https://instagram.com/lisaamelia8680', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', [[em.getRandom() + 'All Menu', `.? all`],
  [em.getRandom() + 'List Menu', `.tesm`],[em.getRandom() + 'Sewa', `.sewa`]], m) 
}
if (pilih == "ke14") {   
conn.sendHydrated2(m.chat, teso, menu11, oh, 'https://vt.tiktok.com/ZS8x2Lwbd/', 'ᴛ ɪ ᴋ ᴛ ᴏ ᴋ', 'https://instagram.com/lisaamelia8680', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', [[em.getRandom() + 'All Menu', `.? all`],
  [em.getRandom() + 'List Menu', `.tesm`],[em.getRandom() + 'Sewa', `.sewa`]], m) 
}
if (pilih == "ke15") {   
conn.sendHydrated2(m.chat, info, menu12, oh, 'https://vt.tiktok.com/ZS8x2Lwbd/', 'ᴛ ɪ ᴋ ᴛ ᴏ ᴋ', 'https://instagram.com/lisaamelia8680', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', [[em.getRandom() + 'All Menu', `.? all`],
  [em.getRandom() + 'List Menu', `.tesm`],[em.getRandom() + 'Sewa', `.sewa`]], m) 
}
if (pilih == "ke16") {   
  conn.sendHydrated2(m.chat, awal, wm2, oh, 'https://vt.tiktok.com/ZS8x2Lwbd/', 'ᴛ ɪ ᴋ ᴛ ᴏ ᴋ', 'https://instagram.com/lisaamelia8680', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', [[em.getRandom() + 'All Menu', `.? all`],
  [em.getRandom() + 'List Menu', `.tesm`],[em.getRandom() + 'Sewa', `.sewa`]], m) 
}
if (pilih == "ke17") {   
  conn.sendHydrated2(m.chat, awal, wm2, await genProfile(conn, m), 'https://vt.tiktok.com/ZS8x2Lwbd/', 'ᴛ ɪ ᴋ ᴛ ᴏ ᴋ', 'https://instagram.com/lisaamelia8680', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', [[em.getRandom() + 'All Menu', `.? all`],
  [em.getRandom() + 'List Menu', `.tesm`],[em.getRandom() + 'Sewa', `.sewa`]], m) 
}
if (pilih == "ke18") {   
conn.send2ButtonImg(m.chat, await genProfile(conn, m), alok, menu5, em.getRandom() + 'List Menu', '.listmenu', em.getRandom() + 'Owner', '.owner', fkontak)  
}
if (pilih == "ke19") { 
conn.send3ButtonImg(m.chat, waifu, alok, menu7, em.getRandom() + 'List Menu', '.listmenu', em.getRandom() + 'Speed', '.speed', em.getRandom() + 'Credit', '.credit', fkontak)
}
if (pilih == "ke20") { 
conn.sendButtonVid(m.chat, sad, zyo, menu8, em.getRandom() + 'List Menu', '.listmenu', fkontak)
}
if (pilih == "ke21") { 
conn.send2ButtonVid(m.chat, sad, alok, menu9, em.getRandom() + 'All Menu', '.? all', em.getRandom() + 'List Menu', '.listmenu', fkontak)
}
if (pilih == "ke22") {
conn.send2ButtonImg(m.chat, await ggenProfile(conn, m), alok, menu5, em.getRandom() + 'List Menu', '.listmenu', em.getRandom() + 'Owner', '.owner', fkontak)
}
if (pilih == "ke23") {
conn.send2ButtonImg(m.chat, await ggenProfile(conn, m), alok, menu12, em.getRandom() + 'List Menu', '.listmenu', em.getRandom() + 'Owner', '.owner', fkontak) 
}
if (pilih == "ke24") {
conn.sendHydrated2(m.chat, awal, wm2, await ggenProfile(conn, m), 'https://vt.tiktok.com/ZS8x2Lwbd/', 'ᴛ ɪ ᴋ ᴛ ᴏ ᴋ', 'https://instagram.com/lisaamelia8680', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', [[em.getRandom() + 'All Menu', `.? all`],
  [em.getRandom() + 'List Menu', `.tesm`],[em.getRandom() + 'Credit', `.credit`]], m) 
}
if (pilih == "ke25") {  
conn.sendHydrated2(m.chat, teso, menu10, await ggenProfile(conn, m), 'https://vt.tiktok.com/ZS8x2Lwbd/', 'ᴛ ɪ ᴋ ᴛ ᴏ ᴋ', 'https://instagram.com/lisaamelia8680', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', [[em.getRandom() + 'All Menu', `.? all`],
  [em.getRandom() + 'List Menu', `.tesm`],[em.getRandom() + 'Sewa', `.sewa`]], m)     
}
}  
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help|co)$/i
handler.register = false

export default handler
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
function ucapan() {
const time = moment.tz('Asia/Jakarta').format('HH')
let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
if (time >= 4) {
res = "Pagi Lord 🌄"
}
if (time >= 10) {
res = "Selamat Siang Kak ☀️"
}
if (time >= 15) {
res = "Selamat Sore Kak 🌇"
}
if (time >= 18) {
res = "Malam Kak 🌙"
}
return res
}
async function genProfile(conn, m) {
  let font = await jimp.loadFont('./names.fnt'),
    mask = await jimp.read('https://i.imgur.com/552kzaW.png'),
    welcome = await jimp.read('https://telegra.ph/file/73a295523a39f43e7b4fd.jpg'),
    avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')),
    status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected'

    await avatar.resize(460, 460)
    await mask.resize(460, 460)
    await avatar.mask(mask)
    await welcome.resize(welcome.getWidth(), welcome.getHeight())

    await welcome.print(font, 550, 180, 'Name:')
    await welcome.print(font, 650, 255, m.pushName.slice(0, 25))
    await welcome.print(font, 550, 340, 'About:')
    await welcome.print(font, 650, 415, status)
    await welcome.print(font, 550, 500, 'Number:')
    await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international'))
    return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png')
}

async function ggenProfile(conn, m) {
  let font = await jimp.loadFont('./names.fnt'),
    mask = await jimp.read('https://i.imgur.com/552kzaW.png'),
    welcome = await jimp.read(botmd.getRandom()),
    avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')),
    status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected'

    await avatar.resize(460, 460)
    await mask.resize(460, 460)
    await avatar.mask(mask)
    await welcome.resize(welcome.getWidth(), welcome.getHeight())

    await welcome.print(font, 550, 180, 'Name:')
    await welcome.print(font, 650, 255, m.pushName.slice(0, 25))
    await welcome.print(font, 550, 340, 'About:')
    await welcome.print(font, 650, 415, status)
    await welcome.print(font, 550, 500, 'Number:')
    await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international'))
    return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png')
}
global.botmd = [
  'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg', 'https://telegra.ph/file/ac4928f0824a2a0492737.jpg',
  'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg', 'https://telegra.ph/file/d43c89a5d2da72875ec05.jpg',
  'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg', 'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg',
  'https://telegra.ph/file/55e5af5f33fbd57104187.jpg', 'https://telegra.ph/file/af236598456b95884bd15.jpg',
  'https://telegra.ph/file/de92ed4a729887ffc974c.jpg', 'https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg'
]