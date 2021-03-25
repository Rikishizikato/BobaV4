
const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered) => { 
	return `
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
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
${a}⍚ HELPER${a}

⇨ *${prefix}info*
⇨ *${prefix}donasi*
⇨ *${prefix}owner*
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
${a}⍚ OWNER MENU${a}
 
${a}ᐈ ${prefix}bc${a}
 ${a}ᐈ ${prefix}addbadword${a}
 ${a}ᐈ ${prefix}delbadword${a}
 ${a}ᐈ ${prefix}bcgc${a}
 ${a}ᐈ ${prefix}kickall${a}
 ${a}ᐈ ${prefix}setreply${a}
 ${a}ᐈ ${prefix}setprefix${a}
 ${a}ᐈ ${prefix}clearall${a}
 ${a}ᐈ ${prefix}block${a}
 ${a}ᐈ ${prefix}unblock${a}
 ${a}ᐈ ${prefix}leave${a}
 ${a}ᐈ ${prefix}event [1/0]${a}
 ${a}ᐈ ${prefix}clone${a}
 ${a}ᐈ ${prefix}setppbot${a}
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
${a}⍚ MAKER MENU${a}

 ${a}ᐈ ${prefix}sticker${a}
 ${a}ᐈ ${prefix}quotemaker${a}
 ${a}ᐈ ${prefix}qrcode${a}
 ${a}ᐈ ${prefix}ttp${a}
 ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
${a}⍚ FUN MENU${a}

 ${a}ᐈ ${prefix}lirik${a}
 ${a}ᐈ ${prefix}artinama${a}
 ${a}ᐈ ${prefix}chord${a}
 ${a}ᐈ ${prefix}bisakah${a}
 ${a}ᐈ ${prefix}kapankah${a}
 ${a}ᐈ ${prefix}apakah${a}
 ${a}ᐈ ${prefix}rate${a}
 ${a}ᐈ ${prefix}slap${a}
 ${a}ᐈ ${prefix}tampar${a}
 ${a}ᐈ ${prefix}moddroid${a} *[VIP]*
 ${a}ᐈ ${prefix}happymod${a} *[VIP]*
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
 ⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
${a}⍚ MUTUAL${a}

 ${a}ᐈ ${prefix}mutual${a}
 ${a}ᐈ ${prefix}next${a}
 ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
${a}⍚ MEDIA MENU${a}

 ${a}ᐈ ${prefix}brainly${a} *[VIP]*
 ${a}ᐈ ${prefix}pinterest${a}
 ${a}ᐈ ${prefix}resepmasakan${a}
 ${a}ᐈ ${prefix}igstalk${a}
 ${a}ᐈ ${prefix}bitly${a}
 ${a}ᐈ ${prefix}tiktokstalk${a} *[VIP]*
 ${a}ᐈ ${prefix}ssweb${a}
 ${a}ᐈ ${prefix}kbbi${a}
 ⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
${a}⍚ NSFW${a}
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
 ${a}ᐈ ${prefix}anjing${a}
 ${a}ᐈ ${prefix}blowjob${a}
 ${a}ᐈ ${prefix}nekonime${a}
 ${a}ᐈ ${prefix}pokemon${a}
 ${a}ᐈ ${prefix}husbu${a}
 ${a}ᐈ ${prefix}nangis${a}
 ${a}ᐈ ${prefix}cium${a}
 ${a}ᐈ ${prefix}peluk${a}
 ${a}ᐈ ${prefix}ranime${a}
 ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
${a}⍚ LIMIT & DUIT${a}

 ${a}ᐈ ${prefix}limit${a}
 ${a}ᐈ ${prefix}buylimit${a}
 ${a}ᐈ ${prefix}transfer${a}
 ${a}ᐈ ${prefix}dompet${a}
 ${a}ᐈ ${prefix}giftlimit${a}
 ${a}ᐈ ${prefix}leaderboard${a}
 ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
${a}⍚ GROUP MENU${a}

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
 ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
${a}⍚ OTHERS${a}

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
 ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
 ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
${a}⍚ SONG${a}

 ${a}ᐈ ${prefix}joox${a} *[VIP]*
 ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
${a}⍚ thanks team bot${a}

 ${a}ጸ RIKI MAULANA <fixer api>${a}
 ${a}ጸ AFFIS JUNIANTO <dev>${a}
 ${a}ጸ FADHIL GRAPHY <partner>${a}
 ${a}ጸ MHANKBARBAR <sc ori>${a}
 ${a}ጸ MYBOT TEAM <team>${a}
 ${a}ጸ MLSPACETOON <author/repository> ${a}
 ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
ᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇᯇ
`
}
exports.help = help



  
