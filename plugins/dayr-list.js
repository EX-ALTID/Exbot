let handler = async (m, { conn, usedPrefix, command}) => {
	//--
let info = `
╭━━━━「 *Day R Info* 」
┊⫹⫺ *List npc item: v748* 
┊⫹⫺ *List all resep: v748*
┊⫹⫺ *List skk resep: v748*
┊⫹⫺ *day R rate: Feb-2023*             
┊⫹⫺ * DayR info 
┊⫹⫺  🇮🇩『』🅽︎ 🆄︎ 🆂︎ 🅰︎ 🅽︎ 🆃︎ 🅰︎ 🆁︎ 🅰︎
╰═┅═━––––––๑
`
const sections = [
   {
     title: `${htjava} LIST NPC ✦-------`,
	rows: [
	  {title: "DAYR RATE", rowId: `${usedPrefix}rate`, description: 'rate feb-2023' },
	 ]
    }, {
	title: `${htjava} LIST NPC ✦-------`,
	rows: [
	    {title: "DESA NELAYAN", rowId: `${usedPrefix}drnelayan`, description: 'PRICE LIST' },
	    {title: " KAMP TURIS", rowId: `${usedPrefix}drturis`, description: 'PRICE LIST' },
    	{title: " TVER ", rowId: `${usedPrefix}drtver`, description: 'PRICE LIST'},
    	{title: "RYZAN", rowId: `${usedPrefix}drryzan`, description: 'PRICE LIST'},
    	{title: "TULA", rowId: `${usedPrefix}drtula`, description: 'PRICE LIST'},
      {title: "BRYANSK", rowId: `${usedPrefix}drbryansk`, description: 'PRICE LIST'},
      {title: "KIEV", rowId: `${usedPrefix}drkiev`, description: 'PRICE LIST'},
      {title: "VORONEZH", rowId: `${usedPrefix}drvoronezh`, description: 'PRICE LIST'},
      {title: "ROSTOV", rowId: `${usedPrefix}drrostov`, description: 'PRICE LIST'},
      {title: "ARZAMAS", rowId: `${usedPrefix}drarzamas`, description: 'PRICE LIST'},
      {title: "IZHEVSK", rowId: `${usedPrefix}drizhevsk`, description: 'PRICE LIST'},
      {title: "SVERDLOVSK", rowId: `${usedPrefix}drsverdlovsk`, description: 'PRICE LIST'},
      {title: "CHELYABINKS", rowId: `${usedPrefix}drchelya`, description: 'PRICE LIST'},
      {title: "MAGNITORSK", rowId: `${usedPrefix}drmagni`, description: 'PRICE LIST'},
      {title: "TIUMEN", rowId: `${usedPrefix}drtiumen`, description: 'PRICE LIST'},
      {title: "KURGAN", rowId: `${usedPrefix}drkurgan`, description: 'PRICE LIST'},
      {title: "SURGUT", rowId: `${usedPrefix}drsurgut`, description: 'PRICE LIST'},
      {title: "OMSK", rowId: `${usedPrefix}dromsk`, description: 'PRICE LIST'},
      {title: "NOVOSIBIRISK", rowId: `${usedPrefix}drnovosibirisk`, description: 'PRICE LIST'},
      {title: "KRASNOYARSK", rowId: `${usedPrefix}drkrasnoyarsk`, description: 'PRICE LIST'},
      {title: "IRKUTS", rowId: `${usedPrefix}drirkuts`, description: 'PRICE LIST'},
	]
    }, {
    title: `${htjava} RESEP ✦-------`,
	rows: [
	    {title: " ALL RESEP ", rowId: `${usedPrefix}drresep`, description: 'all resep v.748' },
	    {title: "SKK", rowId: `${usedPrefix}drskk`, description: 'resep skk'},
	]
    }, {
    title: `${htjava} PERK ✦-------`,
	rows: [
	    {title: "Perk merah", rowId: `${usedPrefix}drperk1`, description: 'gold' },
	    {title: "Perk Silver", rowId: `${usedPrefix}drperk2`, description: 'silver'},
	    {title: "Perk perunggu", rowId: `${usedPrefix}drperk3`, description: 'Bronze ' },
	]
    }
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['dayr', 'infodayr']
handler.tags = ['dayr']
handler.command = /^(dayr|infodayr)$/i

export default handler
