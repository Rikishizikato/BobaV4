const a = '```'

exports.wait = () => {
	return`*「 WAIT 」 SEDANG di PROSESS*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GROUP BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 BELUM MENDAFTAR 」*\nᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ\n*Cara daftar ${prefix}daftar nama|umur*\n*Contoh ${prefix}daftar mlspacetoon|17*`
}

exports.rediregis = () => {
	return`*「 SUDAH MENDAFTAR 」*\nᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ\n*Kamu sudah terdaftar di dalam database bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW TIDAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*Format salah/text kosong*`
}

exports.clears = () => {
	return`*Clear All Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\nᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ\nUntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NEGARA 」*\nᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ\nKamu sudah terdaftar dengan data \n\nᐈ Nama: ${namaUser}\nᐈ Number: wa.me/${sender.split("@")[0]}\nᐈ Umur: ${umurUser}\nᐈ Waktu Pendaftaran: ${time}\n\nᐈ SN: ${serialUser}\nᐈ NOTE: Diharapkan Jangan Sampai Hilang Number SN\nKarena ini Penting`
}

exports.cmdnf = (prefix, command) => {
	return`Maaf command *${prefix}${command}* tidak di temukan\coba ketik *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*ᐈ Level: ${getLevelingLevel(sender)}*\n*ᐈ Jenis command : ${command}*\n*ᐈ Syarat Level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*ᐈ Level: ${getLevelingLevel(sender)}*\n*ᐈ Jenis command : ${command}*\n*ᐈ Syarat Level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*ᐈ Level: ${getLevelingLevel(sender)}*\n*ᐈ Jenis command : ${command}*\n*ᐈ Syarat Level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*ᐈ Level: ${getLevelingLevel(sender)}*\n*ᐈ Jenis command : ${command}*\n*ᐈ Syarat Level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*ᐈ Level: ${getLevelingLevel(sender)}*\n*ᐈ Jenis command : ${command}*\n*ᐈ Syarat Level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*ᐈ Level: ${getLevelingLevel(sender)}*\n*ᐈ Jenis command : ${command}*\n*ᐈ Syarat Level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi) => { 
	return `${a}Simple WhatsApp Bot${a}

⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
⍚  *ABOUT USER*
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
⌬ *Nama* :  ${pushname}
⌬ *Premium* :  ${premi}
⌬ *Number* :  wa.me/${sender.split("@")[0]}
⌬ *Duit* :  Rp${uangku}
⌬ *XP* :  ${getLevelingXp(sender)}/${reqXp} 
⌬ *Level* :  ${getLevelingLevel(sender)}
⌬ *Role* :  ${role}
⌬ *Database User* :  ${_registered.length}
⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥

${a}⍚ HELPER${a}
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
⇨ *${prefix}info*
⇨ *${prefix}owner*
⇨ *${prefix}report*
⇨ *${prefix}donasi*
⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥

${a}⍚ NEW FEATURES${a}
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
⇨  ${a}ᐈ ${prefix}antilink [1/0]${a}
⇨  ${a}ᐈ ${prefix}addbadword${a}
⇨  ${a}ᐈ ${prefix}delbadword${a}
⇨  ${a}ᐈ ${prefix}nobadword [enable/disable]${a}
⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥

${a}⍚ OWNER MENU${a}
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
 ${a}ᐈ ${prefix}bc${a}
 ${a}ᐈ ${prefix}bcgc${a}
 ${a}ᐈ ${prefix}leave${a}
 ${a}ᐈ ${prefix}clone${a}
 ${a}ᐈ ${prefix}block${a}
 ${a}ᐈ ${prefix}kickall${a}
 ${a}ᐈ ${prefix}clearall${a}
 ${a}ᐈ ${prefix}unblock${a}
 ${a}ᐈ ${prefix}setreply${a}
 ${a}ᐈ ${prefix}setprefix${a}
 ${a}ᐈ ${prefix}event [1/0]${a}
 ${a}ᐈ ${prefix}setppbot${a}
 ${a}ᐈ ${prefix}addbadword${a}
 ${a}ᐈ ${prefix}delbadword${a}
⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥

${a}⍚ MAKER MENU${a}
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
 ${a}ᐈ ${prefix}ttp${a}
 ${a}ᐈ ${prefix}sticker${a}
 ${a}ᐈ ${prefix}qrcode${a}
 ${a}ᐈ ${prefix}quotemaker${a}
 ⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
 
${a}⍚ FUN MENU${a}
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
 ${a}ᐈ ${prefix}lirik${a}
 ${a}ᐈ ${prefix}rate${a}
 ${a}ᐈ ${prefix}slap${a}
 ${a}ᐈ ${prefix}chord${a}
 ${a}ᐈ ${prefix}apakah${a}
 ${a}ᐈ ${prefix}bisakah${a}
 ${a}ᐈ ${prefix}tampar${a}
 ${a}ᐈ ${prefix}artinama${a}
 ${a}ᐈ ${prefix}kapankah${a}
 ${a}ᐈ ${prefix}moddroid${a} *[VIP]*
 ${a}ᐈ ${prefix}happymod${a} *[VIP]*
 ⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
 
${a}⍚ MUTUAL${a}
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
 ${a}ᐈ ${prefix}mutual${a}
 ${a}ᐈ ${prefix}next${a}
 ⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
 
${a}⍚ MEDIA MENU${a}
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
 ${a}ᐈ ${prefix}bitly${a}
 ${a}ᐈ ${prefix}kbbi${a}
 ${a}ᐈ ${prefix}igstalk${a}
 ${a}ᐈ ${prefix}ssweb${a}
 ${a}ᐈ ${prefix}brainly${a} *[VIP]*
 ${a}ᐈ ${prefix}pinterest${a}
 ${a}ᐈ ${prefix}resepmasakan${a}
 ${a}ᐈ ${prefix}tiktokstalk${a} *[VIP]*
 ⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
 
${a}⍚ NSFW${a}
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
 ${a}ᐈ ${prefix}cium${a}
 ${a}ᐈ ${prefix}peluk${a}
 ${a}ᐈ ${prefix}husbu${a}
 ${a}ᐈ ${prefix}anjing${a}
 ${a}ᐈ ${prefix}nangis${a}
 ${a}ᐈ ${prefix}ranime${a}
 ${a}ᐈ ${prefix}blowjob${a}
 ${a}ᐈ ${prefix}pokemon${a}
 ${a}ᐈ ${prefix}nekonime${a}
 ⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
 
${a}⍚ LIMIT & DUIT${a}
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
 ${a}ᐈ ${prefix}limit${a}
 ${a}ᐈ ${prefix}buylimit${a}
 ${a}ᐈ ${prefix}transfer${a}
 ${a}ᐈ ${prefix}dompet${a}
 ${a}ᐈ ${prefix}giftlimit${a}
 ${a}ᐈ ${prefix}leaderboard${a}
 ⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
 
${a}⍚ GROUP MENU${a}
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
 ${a}ᐈ ${prefix}delete${a}
 ${a}ᐈ ${prefix}hidetag${a}
 ${a}ᐈ ${prefix}blocklist${a}
 ${a}ᐈ ${prefix}grouplist${a}
 ${a}ᐈ ${prefix}level${a}
 ${a}ᐈ ${prefix}linkgc${a}
 ${a}ᐈ ${prefix}tagall${a}
 ${a}ᐈ ${prefix}setpp${a}
 ${a}ᐈ ${prefix}add${a}
 ${a}ᐈ ${prefix}kick${a}
 ${a}ᐈ ${prefix}setname${a}
 ${a}ᐈ ${prefix}setdesc${a}
 ${a}ᐈ ${prefix}demote${a}
 ${a}ᐈ ${prefix}promote${a}
 ${a}ᐈ ${prefix}listadmin${a}
 ${a}ᐈ ${prefix}group [buka/tutup]${a}
 ${a}ᐈ ${prefix}leveling [enable/disable]${a}
 ${a}ᐈ ${prefix}nsfw [1/0]${a}
 ${a}ᐈ ${prefix}simih [1/0]${a}
 ${a}ᐈ ${prefix}welcome [1/0]${a}
 ${a}ᐈ ${prefix}antilink [1/0]${a}
 ${a}ᐈ ${prefix}nobadword [enable/disable]${a}
 ⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
 
${a}⍚ OTHERS${a}
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
 ${a}ᐈ ${prefix}addsticker${a}
 ${a}ᐈ ${prefix}getsticker${a}
 ${a}ᐈ ${prefix}stickerlist${a}
 ${a}ᐈ ${prefix}addvideo${a}
 ${a}ᐈ ${prefix}getvideo${a}
 ${a}ᐈ ${prefix}videolist${a}
 ${a}ᐈ ${prefix}getimage${a}
 ${a}ᐈ ${prefix}addImage${a}
 ${a}ᐈ ${prefix}imagelist${a}
 ${a}ᐈ ${prefix}addaudio${a}
 ${a}ᐈ ${prefix}getaudio${a}
 ${a}ᐈ ${prefix}audiolist${a}
 ⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
 
 ${a}⍚ MUSIC${a}
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
 ${a}ᐈ ${prefix}play${a} *[VIP]*
 ${a}ᐈ ${prefix}joox${a} *[VIP]*
 ⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
 
☬  ɾìցհէ  հąղժ  օƒ  էհҽ  ҍօէ 
╭───────────
│ᴍʜᴀɴᴋʙᴀʀʙᴀʀ <sᴄ ᴏʀɪ
│ᴀғғɪsᴊᴜɴɪᴀɴᴛᴏ <ᴅᴇᴠ 
│ғᴀᴅʜɪʟɢʀᴀᴘʜʏ <ᴘᴀʀᴛɴᴇʀ 
│ᴍʟsᴘᴀᴄᴇᴛᴏᴏɴ <ᴀᴜᴛʜᴏʀ/ʀᴇᴘᴏsɪᴛᴏʀʏ 
╰───────────
 ⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
⍚ *「 CONGRATS!!🚀 」*
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
ᐈ *Nama* : ${pushname}
ᐈ *Number* : wa.me/${sender.split("@")[0]}
ᐈ *XP* : ${getLevelingXp(sender)}
ᐈ *Limit* : +3
ᐈ *Role*: ${role}
ᐈ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Maaf ${pushname} limit kamu hari ini habis*\n*Silahkan apabila ingin membeli limit hubungi own / bisa juga lewat naik level*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Limit anda tersisa : ${limitCounts}

NOTE : Untuk mendapatkan limit. Kamu bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah Parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*⇨ 「 ATM 」*\nᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ\n⌬ *Nama* : ${pushname}\n⌬ *Number* : ${sender.split("@")[0]}\n⌬ *Duit* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.premadd = (pnom) => {
	return`
*「 PREMIUM ADD 」*
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
ᐈ *Name* : ${pnom}
ᐈ *Expired* : 30 DAYS\n*Thanks for ORDER PREMIUM*`
}

exports.dellprem = (hnom) => {
	return`
*「 PREMIUM DELETE 」*
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
ᐈ *Name* : ${hnom}
ᐈ *Expired* : umm:v\n*Thanks for ORDER PREMIUM BACK SOON for BUY-ing AGAIN:)*`
}

exports.premon = (pushname) => {
	return`MAAF ${pushname} KAMU BUKAN USER PREMIUM`
}

