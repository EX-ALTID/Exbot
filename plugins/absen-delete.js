let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
      await conn.sendButton(m.chat, `_*Tidak ada absen berlangsung digrup ini!*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen`, author, null, [
                ['mulaiabsen', `${usedPrefix}mulaiabsen`]
            ], m)
      throw false
    } 
    delete conn.absen[id]
    m.reply(`Done!`)
}
handler.help = ['hapusabsen']
handler.tags = ['absen']
handler.command = /^(delete|hapus)absen$/i
handler.group = true
handler.admin = true
export default handler
