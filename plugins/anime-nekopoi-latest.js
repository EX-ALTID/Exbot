import axios from "axios"
import fetch from 'node-fetch'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn, usedPrefix }) => {
  //  let res = (await axios.get(API('can', '/api/anime/nekopoi/latest'))).data;
    let   res = (await fetch('https://pnggilajacn.my.id/api/anime/nekopio/latest')).data;
    if (res.status != 200) throw res.message;
    if (!res) throw res.message;
	let arr = []
	for (let x of res) arr.push({ title: x.title, description: `Upload : ${x.date || 'unknown'} || Id : ${x.id}`, rowId: `${usedPrefix}nekoinfo ${x.id}` })
	conn.sendMessage(m.chat, { text: `Nekopoi Latest`, footer: null, title: null, buttonText: 'Click Here!', sections: [{ title: 'Nekopoi', rows: arr }] }, { quoted: m })
	await apivisit
	// By Chandra XD
	// Follow bang
	// TikTok : @pnggilajacn
	// Github : https://github.com/Chandra-XD
	}
handler.help = ['nekopoilatest']
handler.tags = ['tools']
handler.command = /^(nekopoilatest|nekolatest)$/i
export default handler