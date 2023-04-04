let handler = async (m, { conn, groupMetadata, usedPrefix }) => {
  let id = m.chat
  conn.absen = conn.absen ? conn.absen : {}
  if (!(id in conn.absen)) {
    await conn.sendButton(m.chat, `Tidak ada absen berlangsung!`, author, null, [
        ['Mulaiabsen', `${usedPrefix}mulaiabsen`]
    ], m)
    throw false
  }

  let absen = conn.absen[id][1]
  const wasVote = absen.includes(m.sender)
  let d = new Date
  let date = d.toLocaleDateString('id', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  let list = absen.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')
  let caption = `*${htjava} TANGGAL ${htjava}*\n${date}
${conn.absen[id][2]}

*${htjava} DAFTAR ABSEN ${htjava}*
*Total:* ${absen.length}

${dmenut}
${list}
${dmenuf}
`
  await conn.sendButton(m.chat, caption, author, null, [['absen', `${usedPrefix}absen`], ['cekabsen', `${usedPrefix}cekabsen`]], m, { mentions: conn.parseMention(caption) })


}
handler.help = ['absen']
handler.tags = ['absen']
handler.command = /^(cekabsen)$/i

export default handler