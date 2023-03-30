let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
✦ @${nomorown.split`@`[0]} ✦
------- ${nameown} -------

📮 *Note:*
• Owner tidak menerima save contact
• Owner berhak blockir tanpa alasan
• Berbicaralah yang sopan & tidak spam
• Owner Hanya merespon yang berkaitan dengan BOT
• No Telp`
const sections = [
   {
	title: `${htjava} PRESET MENU/APK –––––––––·•`,
	rows: [
	{title: "▢ Preset 1", rowId: `${usedPrefix}p1`},
    {title: "▢ Preset 2", rowId: `${usedPrefix}p2`},
	{title: "▢ Preset 3", rowId: `${usedPrefix}p3`},
	{title: "▢ Preset 4", rowId: `${usedPrefix}p4`},
	{title: "▢ Preset 5", rowId: `${usedPrefix}p5`},
	{title: "▢ Preset 6", rowId: `${usedPrefix}p6`},
	{title: "▢ Preset 7", rowId: `${usedPrefix}p7`},
	{title: "▢ Preset 8", rowId: `${usedPrefix}p8`},
	{title: "▢ Preset 9", rowId: `${usedPrefix}p9`},
	{title: "▢ Preset 10", rowId: `${usedPrefix}p10`},
    {title: "▢ Apk Alight Montion", rowId: `${usedPrefix}ammod`},
  	{title: "▢ Apk Minecraft", rowId: `${usedPrefix}mcpe`},
	{title: "▢ Apk NodeVideo", rowId: `${usedPrefix}node`},
	{title: "▢ Apk Pixellab", rowId: `${usedPrefix}pxlb`},
	{title: "▢ Apk Photoshop", rowId: `${usedPrefix}pscc`},
]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: `${usedPrefix}owner nomor`},
	{title: "🔖 • Sewa", rowId: `${usedPrefix}sewa`},
	{title: "🌟 • Buy Premium", rowId: `${usedPrefix}premium`},
	]
  },
]
const listMessage = {
  text: 'ᴄʟɪᴄᴋ ʙᴜᴛᴛᴏɴ ɴᴏᴡ!',
  footer: '【 ʟɪsᴛ ᴘʀᴇsᴇᴛ ᴍᴇɴᴜ/ᴀᴘᴋ 】',
  title: ' ',
  buttonText: "Preset Alight Montion/Apk",
  sections
}

  try {
    if (/(presetmenu)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `${usedPrefix}menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['presetmenu']
handler.tags = ['preset']
handler.command = /^(presetmenu)/i


export default handler
