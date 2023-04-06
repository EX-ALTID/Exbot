import axios from 'axios'
import fetch from 'node-fetch'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn, usedPrefix, args }) => {
    if (!args[0]) throw `Link?`
    if (!args[0].includes("anime")) throw `Invalid Url...`

   let res = (await axios.get(`https://pnggilajacn.my.id/api/anime/otakudesu/info?link=${args[0]}`)).data;
  
    if (!res) throw res.message;
    let v = res.result
    let sections = []
    for(let z of v.episode) {
    let list = {
      title: `${v.title}`,
      rows: [{
        title: `${z._title}`,
        rowId: `${usedPrefix}otakudl ${z._eps}`
      }]
    }
    sections.push(list)
  }

    await conn.sendMessage(m.chat, {text: " info episode", buttonText: 'Click Here!', sections}, {quoted: m})

	await apivisit
	// By Chandra XD
	// Follow bang
	// TikTok : @pnggilajacn
	// Github : https://github.com/Chandra-XD
	}
handler.help = ['otakuinfo'].map(v => v + ' <url>')
handler.tags = ['tools']
handler.command = /^(otakuinfo|otakudesuinfo)$/i
export default handler