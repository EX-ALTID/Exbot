
let { MessageType } = (await import('@adiwajshing/baileys')).default
import moment from 'moment-timezone'
let handler  = async (m, { conn, command, args, text, usedPrefix, DevMode }) => {
if (!text) return m.reply(`Masukkan @${m.sender.split(`@`)[0]} Teks nyah!!`)
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

  let teks = `${htki} 📠 🅑︎🅤︎🅐︎🅣︎ 🅛︎🅞︎🅖︎🅞︎ ${htka}

• Silakan pilih Logo  di bawah ini...

• *Teks yang anda kirim:* ${text}

• Ketik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi

• Nomor Developer : wa.me/6289637252247
• Nomor Owner Bot : wa.me/${nomorown}`
let descc = 'BUAT LOGO BY EX-BOT'
const sections = [
   {
		title: `${htjava} 📠 🅑︎🅤︎🅐︎🅣︎ 🅛︎🅞︎🅖︎🅞︎✦-------`,
	rows: [
        {title: "1917", rowId: `${usedPrefix}1917 ${text}`, description: `${descc}` },
	{title: "3d-crack-text-effect-online", rowId: `${usedPrefix}3d-crack-text-effect-online ${text}`, description: `${descc}` },
        {title: "3d-underwater", rowId: `${usedPrefix}3d-underwater ${text}`, description: `${descc}` },
        {title: "3d-wood", rowId: `${usedPrefix}3d-wood ${text}`, description: `${descc}` },
        {title: "3damerican-flag", rowId: `${usedPrefix}3damerican-flag ${text}`, description: `${descc}` },
        {title: "3dglue-realistic", rowId: `${usedPrefix}3dglue-realistic ${text}`, description: `${descc}` },
        {title: "3dgradient", rowId: `${usedPrefix}3dgradient ${text}`, description: `${descc}` },     
        {title: "3dgradient2", rowId: `${usedPrefix}3dgradient2 ${text}`, description: `${descc}` },
	{title: "3dmetal-effect", rowId: `${usedPrefix}3dmetal-effect ${text}`, description: `${descc}` },
        {title: "3dmetal-text-", rowId: `${usedPrefix}3dmetal-text- ${text}`, description: `${descc}` },
        {title: "3dmulticolor-papercut", rowId: `${usedPrefix}3dmulticolor-papercut ${text}`, description: `${descc}` },
        {title: "3druby-stone", rowId: `${usedPrefix}3druby-stone ${text}`, description: `${descc}` },
        {title: "3dpig-gif", rowId: `${usedPrefix}3dpig-gif ${text}`, description: `${descc}` },
        {title: "3dsand-engraved", rowId: `${usedPrefix}3dsand-engraved ${text}`, description: `${descc}` },
        {title: "3dshiny-metallic", rowId: `${usedPrefix}3dshiny-metallic ${text}`, description: `${descc}` },                                
        {title: "3dsparkle-christmas", rowId: `${usedPrefix}3dsparkle-christmas ${text}`, description: `${descc}` },
        {title: "3dsub-zombie", rowId: `${usedPrefix}3dsub-zombie ${text}`, description: `${descc}` },
        {title: "3dtext-effect2", rowId: `${usedPrefix}3dtext-effect2 ${text}`, description: `${descc}` },
        {title: "3dtext-effect", rowId: `${usedPrefix}3dtext-effect ${text}`, description: `${descc}` },     
        {title: "3dtext-effect3", rowId: `${usedPrefix}3dtext-effect3 ${text}`, description: `${descc}` },
        {title: "3dtext-pig", rowId: `${usedPrefix}3dtext-pig ${text}`, description: `${descc}` },
        {title: "3dvalentine-cards", rowId: `${usedPrefix}3dvalentine-cards ${text}`, description: `${descc}` },
        {title: "3dxmas-cards", rowId: `${usedPrefix}3dxmas-cards ${text}`, description: `${descc}` },
        {title: "3dxmas-cards2", rowId: `${usedPrefix}3dxmas-cards2 ${text}`, description: `${descc}` },
	{title: "83day-card", rowId: `${usedPrefix}83day-card ${text}`, description: `${descc}` },
        {title: "83day-card2", rowId: `${usedPrefix}83day-card2 ${text}`, description: `${descc}` },
        {title: "83day-card3", rowId: `${usedPrefix}83day-card3 ${text}`, description: `${descc}` },
        {title: "83day-card4", rowId: `${usedPrefix}83day-card4 ${text}`, description: `${descc}` },
        {title: "advanced-glow", rowId: `${usedPrefix}advanced-glow ${text}`, description: `${descc}` },
        {title: "ahri-league-of-legends", rowId: `${usedPrefix}ahri-league-of-legends ${text}`, description: `${descc}` },               
        {title: "alice-league-of-kings", rowId: `${usedPrefix}alice-league-of-kings ${text}`, description: `${descc}` },
        {title: "amily-arena-of-valor", rowId: `${usedPrefix}amily-arena-of-valor ${text}`, description: `${descc}` },
        {title: "angels-wings", rowId: `${usedPrefix}angels-wings ${text}`, description: `${descc}` },
        {title: "anonymous-neon", rowId: `${usedPrefix}anonymous-neon ${text}`, description: `${descc}` },
        {title: "art-shader", rowId: `${usedPrefix}art-shader ${text}`, description: `${descc}` },
        {title: "zzenka-league-of-kings", rowId: `${usedPrefix}zzenka-league-of-kings ${text}`, description: `${descc}` },
        {title: "balloon-noel", rowId: `${usedPrefix}balloon-noel ${text}`, description: `${descc}` },     
        {title: "bats-halloween", rowId: `${usedPrefix}bats-halloween ${text}`, description: `${descc}` },
	{title: "bear2", rowId: `${usedPrefix}bear2 ${text}`, description: `${descc}` },
        {title: "bee", rowId: `${usedPrefix}bee ${text}`, description: `${descc}` },
        {title: "birthday-cake", rowId: `${usedPrefix}birthday-cake ${text}`, description: `${descc}` },
        {title: "birthday-cake10", rowId: `${usedPrefix}birthday-cake10 ${text}`, description: `${descc}` },
        {title: "birthday-cake2", rowId: `${usedPrefix}birthday-cake3 ${text}`, description: `${descc}` },
        {title: "birthday-cake4", rowId: `${usedPrefix}birthday-cake4 ${text}`, description: `${descc}` },                                
        {title: "birthday-cake5", rowId: `${usedPrefix}birthday-cake5 ${text}`, description: `${descc}` },
        {title: "birthday-cake6", rowId: `${usedPrefix}birthday-cake6 ${text}`, description: `${descc}` },
        {title: "birthday-cake7", rowId: `${usedPrefix}birthday-cake7 ${text}`, description: `${descc}` },
        {title: "birthday-cake8", rowId: `${usedPrefix}birthday-cake8 ${text}`, description: `${descc}` },
        {title: "birthday-cake9", rowId: `${usedPrefix}birthday-cake9 ${text}`, description: `${descc}` },
        {title: "birthday-cards", rowId: `${usedPrefix}birthday-cards ${text}`, description: `${descc}` },
        {title: "birthdayfoil-balloon", rowId: `${usedPrefix}birthdayfoil-balloon ${text}`, description: `${descc}` },
        {title: "blackpink", rowId: `${usedPrefix}blackpink ${text}`, description: `${descc}` },
        {title: "blackskin-snake", rowId: `${usedPrefix}blackskin-snake ${text}`, description: `${descc}` },
        {title: "blood-frosted", rowId: `${usedPrefix}blood-frosted ${text}`, description: `${descc}` },
        {title: "blood-steel", rowId: `${usedPrefix}blood-steel ${text}`, description: `${descc}` },
        {title: "blood-text", rowId: `${usedPrefix}blood-text ${text}`, description: `${descc}` },
        {title: "blood-text2", rowId: `${usedPrefix}blood-text2 ${text}`, description: `${descc}` },
        {title: "blood-wall", rowId: `${usedPrefix}blood-wall ${text}`, description: `${descc}` },                                                                                                  
        {title: "blue-effect", rowId: `${usedPrefix}blue-effect ${text}`, description: `${descc}` },
        {title: "blue-neon", rowId: `${usedPrefix}blue-neon ${text}`, description: `${descc}` },
        {title: "bokeh-text", rowId: `${usedPrefix}bokeh-text ${text}`, description: `${descc}` },
        {title: "boom-comic", rowId: `${usedPrefix}boom-comic ${text}`, description: `${descc}` },
        {title: "broken-glass", rowId: `${usedPrefix}broken-glass ${text}`, description: `${descc}` },
        {title: "bulb-effect", rowId: `${usedPrefix}bulb-effect ${text}`, description: `${descc}` },                                
        {title: "cake-text", rowId: `${usedPrefix}cake-text ${text}`, description: `${descc}` },
        {title: "cake-text2", rowId: `${usedPrefix}cake-text2 ${text}`, description: `${descc}` },
        {title: "cake-text3", rowId: `${usedPrefix}cake-text3 ${text}`, description: `${descc}` },
        {title: "candy-text", rowId: `${usedPrefix}candy-text ${text}`, description: `${descc}` },
        {title: "card-christmas", rowId: `${usedPrefix}card-christmas ${text}`, description: `${descc}` },
        {title: "card-christmas2", rowId: `${usedPrefix}card-christmas2 ${text}`, description: `${descc}` },
        {title: "cartoon-graffiti", rowId: `${usedPrefix}cartoon-graffiti ${text}`, description: `${descc}` },
        {title: "christmas-snow", rowId: `${usedPrefix}christmas-snow ${text}`, description: `${descc}` },
        {title: "christmas-tree", rowId: `${usedPrefix}christmas-tree ${text}`, description: `${descc}` },
        {title: "christmasball-ornaments", rowId: `${usedPrefix}christmasball-ornaments ${text}`, description: `${descc}` },
        {title: "circle-mascot-team", rowId: `${usedPrefix}circle-mascot-team ${text}`, description: `${descc}` },
        {title: "cloth-effect", rowId: `${usedPrefix}cloth-effect ${text}`, description: `${descc}` },
        {title: "cloud-sky", rowId: `${usedPrefix}cloud-sky ${text}`, description: `${descc}` },
        {title: "clouds-sky", rowId: `${usedPrefix}clouds-sky ${text}`, description: `${descc}` },             
        {title: "color-fireworks", rowId: `${usedPrefix}color-fireworks ${text}`, description: `${descc}` },
	{title: "colorful-angelwing", rowId: `${usedPrefix}colorful-angelwing ${text}`, description: `${descc}` },
        {title: "cool-metal", rowId: `${usedPrefix}cool-metal ${text}`, description: `${descc}` },
        {title: "cute-girl-gamer", rowId: `${usedPrefix}cute-girl-gamer ${text}`, description: `${descc}` },
        {title: "cute-typography", rowId: `${usedPrefix}cute-typography ${text}`, description: `${descc}` },
        {title: "dance-effect", rowId: `${usedPrefix}dance-effect ${text}`, description: `${descc}` },
        {title: "dancing-santaclaus", rowId: `${usedPrefix}dancing-santaclaus ${text}`, description: `${descc}` },     
        {title: "darkgreen-typography", rowId: `${usedPrefix}darkgreen-typography ${text}`, description: `${descc}` },
	{title: "darth-vader", rowId: `${usedPrefix}darth-vader ${text}`, description: `${descc}` },
        {title: "decorated-cookie", rowId: `${usedPrefix}decorated-cookie ${text}`, description: `${descc}` },
        {title: "decorated-cookie", rowId: `${usedPrefix}decorated-cookie ${text}`, description: `${descc}` },
        {title: "deluxe-silver", rowId: `${usedPrefix}deluxe-silver ${text}`, description: `${descc}` },
        {title: "dinamo-effect", rowId: `${usedPrefix}dinamo-effect ${text}`, description: `${descc}` },
        {title: "double-exposure", rowId: `${usedPrefix}double-exposure ${text}`, description: `${descc}` },                                
        {title: "dragon-fire", rowId: `${usedPrefix}dragon-fire ${text}`, description: `${descc}` },
        {title: "equalizer-effect", rowId: `${usedPrefix}equalizer-effect ${text}`, description: `${descc}` },
        {title: "equalizer-blue", rowId: `${usedPrefix}equalizer-blue ${text}`, description: `${descc}` },
        {title: "eraser-effect", rowId: `${usedPrefix}eraser-effect ${text}`, description: `${descc}` },
        {title: "evelynn-league-of-legends", rowId: `${usedPrefix}evelynn-league-of-legends ${text}`, description: `${descc}` },
        {title: "fabric-effect", rowId: `${usedPrefix}fabric-effect ${text}`, description: `${descc}` },
        {title: "fabric-effect2", rowId: `${usedPrefix}fabric-effect2 ${text}`, description: `${descc}` },
        {title: "facebook-gold-play-button", rowId: `${usedPrefix}facebook-gold-play-button ${text}`, description: `${descc}` },
	{title: "facebook-silver-play-button", rowId: `${usedPrefix}facebook-silver-play-button ${text}`, description: `${descc}` },
        {title: "firework-effect", rowId: `${usedPrefix}firework-effect ${text}`, description: `${descc}` },
        {title: "firework-effect2", rowId: `${usedPrefix}firework-effect2 ${text}`, description: `${descc}` },
        {title: "flower-card", rowId: `${usedPrefix}flower-card ${text}`, description: `${descc}` },
        {title: "flower-effect", rowId: `${usedPrefix}flower-effect ${text}`, description: `${descc}` },
        {title: "football-club2", rowId: `${usedPrefix}football-club2 ${text}`, description: `${descc}` },               
        {title: "fps-game", rowId: `${usedPrefix}fps-game ${text}`, description: `${descc}` },
        {title: "fun-certify", rowId: `${usedPrefix}fun-certify ${text}`, description: `${descc}` },
        {title: "fun-certify2", rowId: `${usedPrefix}fun-certify2 ${text}`, description: `${descc}` },      
        {title: "galaxy-angel", rowId: `${usedPrefix}galaxy-angel ${text}`, description: `${descc}` },
        {title: "galaxy-angelwings", rowId: `${usedPrefix}galaxy-angelwings ${text}`, description: `${descc}` },
        {title: "galaxy-effect", rowId: `${usedPrefix}galaxy-effect ${text}`, description: `${descc}` },
        {title: "galaxy-effect2", rowId: `${usedPrefix}galaxy-effect2 ${text}`, description: `${descc}` },     
        {title: "galaxy-text", rowId: `${usedPrefix}galaxy-text ${text}`, description: `${descc}` },
	{title: "galaxy-text2", rowId: `${usedPrefix}galaxy-text2 ${text}`, description: `${descc}` },
        {title: "galaxy-text3", rowId: `${usedPrefix}galaxy-text3 ${text}`, description: `${descc}` },
        {title: "galaxy-text4", rowId: `${usedPrefix}galaxy-text4 ${text}`, description: `${descc}` },
        {title: "galaxy-text5", rowId: `${usedPrefix}galaxy-text5 ${text}`, description: `${descc}` },
        {title: "galaxyangel-wings", rowId: `${usedPrefix}galaxyangel-wings ${text}`, description: `${descc}` },
        {title: "gankk-league-of-kings", rowId: `${usedPrefix}gankk-league-of-kings ${text}`, description: `${descc}` },                                
        {title: "gemstone-effect", rowId: `${usedPrefix}gemstone-effect ${text}`, description: `${descc}` },
        {title: "glitter-gold", rowId: `${usedPrefix}birthday-cake6 ${text}`, description: `${descc}` },
        {title: "glossy-carbon", rowId: `${usedPrefix}glossy-carbon ${text}`, description: `${descc}` },
        {title: "glowing-effect", rowId: `${usedPrefix}glowing-effect ${text}`, description: `${descc}` },
        {title: "gold-effect", rowId: `${usedPrefix}gold-effect ${text}`, description: `${descc}` },
        {title: "gold-effect2", rowId: `${usedPrefix}gold-effect2 ${text}`, description: `${descc}` },
        {title: "gold-effect3", rowId: `${usedPrefix}gold-effect3 ${text}`, description: `${descc}` },
        {title: "gold-text", rowId: `${usedPrefix}gold-text ${text}`, description: `${descc}` },
        {title: "gold-text2", rowId: `${usedPrefix}gold-text2 ${text}`, description: `${descc}` },
        {title: "golden-text", rowId: `${usedPrefix}golden-text ${text}`, description: `${descc}` },
        {title: "graffiti-text", rowId: `${usedPrefix}graffiti-text ${text}`, description: `${descc}` },
        {title: "graffiti-text2", rowId: `${usedPrefix}graffiti-text2 ${text}`, description: `${descc}` },
        {title: "graffiti-text3", rowId: `${usedPrefix}graffiti-text3 ${text}`, description: `${descc}` },
        {title: "graffiti-text4", rowId: `${usedPrefix}graffiti-text4 ${text}`, description: `${descc}` },                                    
        {title: "graffiti-text5", rowId: `${usedPrefix}graffiti-text5 ${text}`, description: `${descc}` },
        {title: "green-brush", rowId: `${usedPrefix}green-brush ${text}`, description: `${descc}` },
        {title: "green-fireworks", rowId: `${usedPrefix}green-fireworks ${text}`, description: `${descc}` },
        {title: "greenskin-snake", rowId: `${usedPrefix}greenskin-snake ${text}`, description: `${descc}` },
        {title: "greeting-cards", rowId: `${usedPrefix}greeting-cards ${text}`, description: `${descc}` },
        {title: "greetingcard-birthday", rowId: `${usedPrefix}greetingcard-birthday ${text}`, description: `${descc}` }, 
        {title: "greetingcard-birthday2", rowId: `${usedPrefix}greetingcard-birthday2 ${text}`, description: `${descc}` },
        {title: "halloween-fire", rowId: `${usedPrefix}halloween-fire ${text}`, description: `${descc}` },
        {title: "halloween-frankenstain", rowId: `${usedPrefix}halloween-frankenstain ${text}`, description: `${descc}` },
        {title: "halloween-text", rowId: `${usedPrefix}halloween-text ${text}`, description: `${descc}` },
        {title: "halloween-text2", rowId: `${usedPrefix}halloween-text2 ${text}`, description: `${descc}` },
        {title: "halloween-videocard", rowId: `${usedPrefix}halloween-videocard ${text}`, description: `${descc}` },
        {title: "hand-love|hand-love2", rowId: `${usedPrefix}hand-love|hand-love2 ${text}`, description: `${descc}` },
        {title: "handwritten-foggyglass", rowId: `${usedPrefix}handwritten-foggyglass ${text}`, description: `${descc}` },
        {title: "happynewyear-firework", rowId: `${usedPrefix}happynewyear-firework ${text}`, description: `${descc}` },
        {title: "heart-cup", rowId: `${usedPrefix}heart-cup ${text}`, description: `${descc}` },
        {title: "heart-flashlight", rowId: `${usedPrefix}heart-flashlight ${text}`, description: `${descc}` },
        {title: "heart-wings", rowId: `${usedPrefix}heart-wings ${text}`, description: `${descc}` },
        {title: "holographic-effect", rowId: `${usedPrefix}holographic-effect ${text}`, description: `${descc}` },
        {title: "horror-gift", rowId: `${usedPrefix}horror-gift ${text}`, description: `${descc}` },            
        {title: "icecream-chocolate", rowId: `${usedPrefix}icecream-chocolate ${text}`, description: `${descc}` },
	{title: "jean-text-effect", rowId: `${usedPrefix}jean-text-effect ${text}`, description: `${descc}` },
        {title: "jewel-effect", rowId: `${usedPrefix}jewel-effect ${text}`, description: `${descc}` },
        {title: "joker", rowId: `${usedPrefix}joker ${text}`, description: `${descc}` },
        {title: "kahlii-arena-of-valor", rowId: `${usedPrefix}kahlii-arena-of-valor ${text}`, description: `${descc}` },
        {title: "kaisa-league-of-legends", rowId: `${usedPrefix}kaisa-league-of-legends ${text}`, description: `${descc}` },
        {title: "leaves-text", rowId: `${usedPrefix}leaves-text ${text}`, description: `${descc}` },     
        {title: "lend-effect", rowId: `${usedPrefix}lend-effect ${text}`, description: `${descc}` },
	{title: "light-effect", rowId: `${usedPrefix}light-effect ${text}`, description: `${descc}` },
        {title: "light-neonsign", rowId: `${usedPrefix}light-neonsign ${text}`, description: `${descc}` },
        {title: "lightfuturistic-technology", rowId: `${usedPrefix}lightfuturistic-technology ${text}`, description: `${descc}` },
        {title: "lightning-pubg-video", rowId: `${usedPrefix}lightning-pubg-video ${text}`, description: `${descc}` },
        {title: "lol-fiora", rowId: `${usedPrefix}lol-fiora ${text}`, description: `${descc}` },
        {title: "lol-master-yi", rowId: `${usedPrefix}lol-master-yi ${text}`, description: `${descc}` },                                
        {title: "lol-notice", rowId: `${usedPrefix}lol-notice ${text}`, description: `${descc}` },
        {title: "lol-zed", rowId: `${usedPrefix}lol-zed ${text}`, description: `${descc}` },
        {title: "luxury-gold", rowId: `${usedPrefix}luxury-gold ${text}`, description: `${descc}` },
        {title: "magic-effect", rowId: `${usedPrefix}magic-effect ${text}`, description: `${descc}` },
        {title: "matrix", rowId: `${usedPrefix}matrix ${text}`, description: `${descc}` },
        {title: "metal-darkgold", rowId: `${usedPrefix}metal-darkgold ${text}`, description: `${descc}` },
        {title: "metal-eagle", rowId: `${usedPrefix}metal-eagle ${text}`, description: `${descc}` },
        {title: "metal-effect", rowId: `${usedPrefix}metal-effect ${text}`, description: `${descc}` },
	{title: "metal-headshot", rowId: `${usedPrefix}metal-headshot ${text}`, description: `${descc}` },
        {title: "metal-lion", rowId: `${usedPrefix}metal-lion ${text}`, description: `${descc}` },
        {title: "metal-logo", rowId: `${usedPrefix}metal-logo ${text}`, description: `${descc}` },
        {title: "metal-star", rowId: `${usedPrefix}metal-star ${text}`, description: `${descc}` },
        {title: "metal-text", rowId: `${usedPrefix}metal-text ${text}`, description: `${descc}` },
        {title: "metallic-text", rowId: `${usedPrefix}metallic-text ${text}`, description: `${descc}` },               
        {title: "mganga-league-of-kings", rowId: `${usedPrefix}mganga-league-of-kings ${text}`, description: `${descc}` },
        {title: "minimal-logomaker", rowId: `${usedPrefix}minimal-logomaker ${text}`, description: `${descc}` },
        {title: "mobile-legends", rowId: `${usedPrefix}mobile-legends ${text}`, description: `${descc}` },
        {title: "modern-gold3", rowId: `${usedPrefix}modern-gold3 ${text}`, description: `${descc}` },
        {title: "modern-gold4", rowId: `${usedPrefix}modern-gold4 ${text}`, description: `${descc}` },
        {title: "modern-gold5", rowId: `${usedPrefix}modern-gold5 ${text}`, description: `${descc}` },
        {title: "modern-goldgreen", rowId: `${usedPrefix}modern-goldgreen ${text}`, description: `${descc}` },     
        {title: "modern-goldpurple", rowId: `${usedPrefix}modern-goldpurple ${text}`, description: `${descc}` },
	{title: "modern-goldred", rowId: `${usedPrefix}modern-goldred ${text}`, description: `${descc}` },
        {title: "modern-goldred2", rowId: `${usedPrefix}modern-goldred2 ${text}`, description: `${descc}` },
        {title: "modern-goldsliver", rowId: `${usedPrefix}modern-goldsliver ${text}`, description: `${descc}` },
        {title: "my-love", rowId: `${usedPrefix}my-love ${text}`, description: `${descc}` },
        {title: "name-football", rowId: `${usedPrefix}name-football ${text}`, description: `${descc}` },
        {title: "neon-brightblue", rowId: `${usedPrefix}neon-brightblue ${text}`, description: `${descc}` },                                
        {title: "neon-devilwing", rowId: `${usedPrefix}neon-devilwing ${text}`, description: `${descc}` },
        {title: "neon-satin", rowId: `${usedPrefix}neon-satin ${text}`, description: `${descc}` },
        {title: "neon-valentine", rowId: `${usedPrefix}neon-valentine ${text}`, description: `${descc}` },
        {title: "neonlight-galaxy", rowId: `${usedPrefix}neonlight-galaxy ${text}`, description: `${descc}` },
        {title: "newyear-greeting", rowId: `${usedPrefix}newyear-greeting ${text}`, description: `${descc}` },
        {title: "newyear-greeting2", rowId: `${usedPrefix}newyear-greeting2 ${text}`, description: `${descc}` },
        {title: "newyear-greeting3", rowId: `${usedPrefix}newyear-greeting3 ${text}`, description: `${descc}` },
        {title: "ninja-mascot", rowId: `${usedPrefix}ninja-mascot ${text}`, description: `${descc}` },
        {title: "orangeskin-snake", rowId: `${usedPrefix}orangeskin-snake ${text}`, description: `${descc}` },
        {title: "paper-cutou", rowId: `${usedPrefix}paper-cutou ${text}`, description: `${descc}` },
        {title: "paperclip-quote", rowId: `${usedPrefix}paperclip-quote ${text}`, description: `${descc}` },
        {title: "papercut-effect", rowId: `${usedPrefix}papercut-effect ${text}`, description: `${descc}` },
        {title: "personalized-christmas", rowId: `${usedPrefix}personalized-christmas ${text}`, description: `${descc}` },
        {title: "personalized-queen", rowId: `${usedPrefix}personalized-queen ${text}`, description: `${descc}` },                                                                                                  
        {title: "pikachu", rowId: `${usedPrefix}pikachu ${text}`, description: `${descc}` },
        {title: "project-yasuo", rowId: `${usedPrefix}project-yasuo ${text}`, description: `${descc}` },
        {title: "pubg-birthdaycake", rowId: `${usedPrefix}pubg-birthdaycake ${text}`, description: `${descc}` },
        {title: "pubg-maker", rowId: `${usedPrefix}pubg-maker ${text}`, description: `${descc}` },
        {title: "pubg-maker2", rowId: `${usedPrefix}pubg-maker2 ${text}`, description: `${descc}` },
        {title: "pubg-maker3", rowId: `${usedPrefix}pubg-maker3 ${text}`, description: `${descc}` },                                
        {title: "pubg-maker4", rowId: `${usedPrefix}pubg-maker4 ${text}`, description: `${descc}` },
        {title: "purple-effect", rowId: `${usedPrefix}purple-effect ${text}`, description: `${descc}` },
        {title: "rainbow-glow", rowId: `${usedPrefix}rainbow-glow ${text}`, description: `${descc}` },
        {title: "realistic-cloud", rowId: `${usedPrefix}realistic-cloud ${text}`, description: `${descc}` },
        {title: "realistic-embroidery", rowId: `${usedPrefix}realistic-embroidery ${text}`, description: `${descc}` },
        {title: "redhot-metal", rowId: `${usedPrefix}redhot-metal ${text}`, description: `${descc}` },
        {title: "redhot-metal2", rowId: `${usedPrefix}redhot-metal2 ${text}`, description: `${descc}` },
        {title: "resht-league-of-kings", rowId: `${usedPrefix}resht-league-of-kings ${text}`, description: `${descc}` },
        {title: "road-paint", rowId: `${usedPrefix}road-paint ${text}`, description: `${descc}` },
        {title: "romantic-valentine", rowId: `${usedPrefix}romantic-valentine ${text}`, description: `${descc}` },
        {title: "rooster", rowId: `${usedPrefix}rooster ${text}`, description: `${descc}` },
        {title: "round-thunder", rowId: `${usedPrefix}round-thunder ${text}`, description: `${descc}` },
        {title: "sandsummer-beach", rowId: `${usedPrefix}sandsummer-beach ${text}`, description: `${descc}` },
        {title: "sandsummer-beach2", rowId: `${usedPrefix}sandsummer-beach2 ${text}`, description: `${descc}` },             
        {title: "signature", rowId: `${usedPrefix}signature ${text}`, description: `${descc}` },
	{title: "skull-videomaker", rowId: `${usedPrefix}skull-videomaker ${text}`, description: `${descc}` },
        {title: "snake-text", rowId: `${usedPrefix}snake-text ${text}`, description: `${descc}` },
        {title: "snow-text", rowId: `${usedPrefix}snow-text ${text}`, description: `${descc}` },
        {title: "stars-night", rowId: `${usedPrefix}stars-night ${text}`, description: `${descc}` },
        {title: "status-life", rowId: `${usedPrefix}status-life ${text}`, description: `${descc}` },
        {title: "status-life2", rowId: `${usedPrefix}status-life2 ${text}`, description: `${descc}` },     
        {title: "status-life3", rowId: `${usedPrefix}status-life3 ${text}`, description: `${descc}` },
	{title: "status-love", rowId: `${usedPrefix}status-love ${text}`, description: `${descc}` },
        {title: "status-love2", rowId: `${usedPrefix}status-love2 ${text}`, description: `${descc}` },
        {title: "status-mood", rowId: `${usedPrefix}status-mood ${text}`, description: `${descc}` },
        {title: "status-mood2", rowId: `${usedPrefix}status-mood2 ${text}`, description: `${descc}` },
        {title: "status-mood3", rowId: `${usedPrefix}status-mood3 ${text}`, description: `${descc}` },
        {title: "status-mood4", rowId: `${usedPrefix}status-mood4 ${text}`, description: `${descc}` },                                
        {title: "storm-trooper", rowId: `${usedPrefix}storm-trooper ${text}`, description: `${descc}` },
        {title: "summerysand", rowId: `${usedPrefix}summerysand ${text}`, description: `${descc}` },
        {title: "sunflower-birthdaycake", rowId: `${usedPrefix}sunflower-birthdaycake ${text}`, description: `${descc}` },
        {title: "sunlight-shadow", rowId: `${usedPrefix}sunlight-shadow ${text}`, description: `${descc}` },
        {title: "tattoo-body", rowId: `${usedPrefix}tattoo-body ${text}`, description: `${descc}` },
        {title: "tattoo-body2", rowId: `${usedPrefix}tattoo-body2 ${text}`, description: `${descc}` },
        {title: "tattoo-girl", rowId: `${usedPrefix}tattoo-girl ${text}`, description: `${descc}` },
        {title: "tattoo-hand2", rowId: `${usedPrefix}tattoo-hand2 ${text}`, description: `${descc}` },
	{title: "text-christmas", rowId: `${usedPrefix}text-christmas ${text}`, description: `${descc}` },
        {title: "text-effectcolor", rowId: `${usedPrefix}text-effectcolor ${text}`, description: `${descc}` },
        {title: "text-leaves", rowId: `${usedPrefix}text-leaves ${text}`, description: `${descc}` },
        {title: "text-party", rowId: `${usedPrefix}text-party ${text}`, description: `${descc}` },
        {title: "text-rain", rowId: `${usedPrefix}text-rain ${text}`, description: `${descc}` },
        {title: "text-wall", rowId: `${usedPrefix}text-wall ${text}`, description: `${descc}` },               
        {title: "tiger", rowId: `${usedPrefix}tiger ${text}`, description: `${descc}` },
        {title: "traveling-bear", rowId: `${usedPrefix}traveling-bear ${text}`, description: `${descc}` },
        {title: "typography-leaves", rowId: `${usedPrefix}typography-leaves ${text}`, description: `${descc}` },      
        {title: "typography-leavesautumn", rowId: `${usedPrefix}typography-leavesautumn ${text}`, description: `${descc}` },
        {title: "typography-maker", rowId: `${usedPrefix}typography-maker ${text}`, description: `${descc}` },
        {title: "typography-maker2", rowId: `${usedPrefix}typography-maker2 ${text}`, description: `${descc}` },
        {title: "typography-maker3", rowId: `${usedPrefix}typography-maker3 ${text}`, description: `${descc}` },     
        {title: "underwater-text", rowId: `${usedPrefix}underwater-text ${text}`, description: `${descc}` },
	{title: "valentine-day", rowId: `${usedPrefix}valentine-day ${text}`, description: `${descc}` },
        {title: "video-greeting-cards", rowId: `${usedPrefix}video-greeting-cards ${text}`, description: `${descc}` },
        {title: "violet-league-of-kings", rowId: `${usedPrefix}violet-league-of-kings ${text}`, description: `${descc}` },    
        {title: "wallpaper-moblie", rowId: `${usedPrefix}wallpaper-moblie ${text}`, description: `${descc}` },
        {title: "water-3d", rowId: `${usedPrefix}water-3d ${text}`, description: `${descc}` },
        {title: "water-effect", rowId: `${usedPrefix}water-effect ${text}`, description: `${descc}` },                                
        {title: "water-effect2", rowId: `${usedPrefix}water-effect2 ${text}`, description: `${descc}` },
        {title: "watercolor-effect", rowId: `${usedPrefix}watercolor-effect ${text}`, description: `${descc}` },
        {title: "wedding-silver", rowId: `${usedPrefix}wedding-silver ${text}`, description: `${descc}` },
        {title: "wet-glass", rowId: `${usedPrefix}wet-glass ${text}`, description: `${descc}` },
        {title: "wings-effect", rowId: `${usedPrefix}wings-effect ${text}`, description: `${descc}` },
        {title: "women-day", rowId: `${usedPrefix}women-day ${text}`, description: `${descc}` },
        {title: "yasuo", rowId: `${usedPrefix}yasuo ${text}`, description: `${descc}` },
        {title: "yellowskin-snake", rowId: `${usedPrefix}yellowskin-snake ${text}`, description: `${descc}` },
        {title: "yena-arena-of-valor", rowId: `${usedPrefix}yena-arena-of-valor ${text}`, description: `${descc}` },                       

	
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
  text: ` `,
  footer: teks,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(teks), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
}

handler.help = ['logolist <teks>', 'logo <teks>']
handler.tags = ['maker']
handler.command = /^(logolist|logo|listlogo|buatlogo)$/i
handler.premium = false
handler.limit = true
export default handler
