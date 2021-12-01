const {
   WAConnection: _WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   WAMessageProto,
   relayWAMessage,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
   device,
   Browser
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection);
const fs = require('fs')
const { exec } = require('child_process')
const moment = require('moment-timezone')
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const { wait,simih,getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('./lib/functions')
const { color } = require('./lib/color')
const gcrevoke = ["6285748600473@g.us"]
blocked = []

require('./index.js')
nocache('./index.js', module => console.log(`${module} is now updated!`))

const starts = async (alpha = new WAConnection()) => {
    alpha.logger.level = 'warn'
    alpha.version = [2, 2119, 6] 
    console.log(banner.string)
    alpha.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Now scan the qr'))
    })
    var _0xc03a=["\x2E\x2F\x73\x65\x73\x73\x69\x6F\x6E\x2E\x6A\x73\x6F\x6E","\x65\x78\x69\x73\x74\x73\x53\x79\x6E\x63","\x6C\x6F\x61\x64\x41\x75\x74\x68\x49\x6E\x66\x6F","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6E\x67","\x32","\x2E","\x6F\x6E","\x6F\x70\x65\x6E","\x43\x6F\x6E\x6E\x65\x63\x74\x65\x64","\uD83D\uDED2\x20\x53\x55\x42\x53\x43\x52\x49\x42\x45\x20\x59\x4F\x55\x54\x55\x42\x45\x20\x5A\x45\x45\x4F\x4E\x45\x20\x4F\x46\x43","\x79\x65\x6C\x6C\x6F\x77","\x6C\x6F\x67","\x63\x6F\x6E\x6E\x65\x63\x74","\x62\x61\x73\x65\x36\x34\x45\x6E\x63\x6F\x64\x65\x64\x41\x75\x74\x68\x49\x6E\x66\x6F","\x09","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x77\x72\x69\x74\x65\x46\x69\x6C\x65\x53\x79\x6E\x63","\x5D","\x77\x68\x69\x74\x65","\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D","\x6D\x61\x67\x65\x6E\x74\x61","\x20\x43\x4F\x4E\x4E\x45\x43\x54\x45\x44","\x67\x72\x65\x65\x6E","\x5B","\x0A","\x2B","\x72\x65\x64","\x57\x41\x20\x56\x65\x72\x73\x69\x6F\x6E","\x3A","\x61\x71\x75\x61","\x77\x61\x5F\x76\x65\x72\x73\x69\x6F\x6E","\x70\x68\x6F\x6E\x65","\x75\x73\x65\x72","\x4F\x53\x20\x56\x65\x72\x73\x69\x6F\x6E","\x6F\x73\x5F\x76\x65\x72\x73\x69\x6F\x6E","\x44\x65\x76\x69\x63\x65","\x64\x65\x76\x69\x63\x65\x5F\x6D\x61\x6E\x75\x66\x61\x63\x74\x75\x72\x65\x72","\x4D\x6F\x64\x65\x6C","\x64\x65\x76\x69\x63\x65\x5F\x6D\x6F\x64\x65\x6C","\x4D\x43\x43","\x6D\x63\x63","\x4D\x4E\x43","\x6D\x6E\x63","\x4F\x53\x20\x42\x75\x69\x6C\x64\x20\x4E\x75\x6D\x62\x65\x72","\x6F\x73\x5F\x62\x75\x69\x6C\x64\x5F\x6E\x75\x6D\x62\x65\x72","\x20\x41\x4C\x50\x48\x41\x42\x4F\x54\x20","\x53\x75\x62\x73\x63\x72\x69\x62\x65","\x26","\x53\x75\x70\x70\x6F\x72\x74","\x43\x68\x61\x6E\x6E\x65\x6C\x20\x53\x61\x79\x61","\x5A\x45\x45\x4F\x4E\x45\x20\x4F\x46\x43","\x54\x68\x61\x6E\x6B\x73\x20\x42\x75\x61\x74\x20\x4B\x61\x6C\x69\x61\x6E\x20\x59\x61\x6E\x67\x20\x53\x75\x64\x61\x68\x20\x53\x75\x62\x73\x63\x72\x69\x62\x65\x20\x5E\x5F\x5E","\x63\x79\x61\x6E","\x20\x20\x20\x20\x20\xA9\x32\x30\x32\x31\x20\x41\x6C\x70\x68\x61\x62\x6F\x74\x2E\x20\x41\x6C\x6C\x20\x52\x69\x67\x68\x74\x20\x52\x65\x73\x65\x72\x76\x65\x64\x2E\x20","\x63\x68\x61\x74\x2D\x75\x70\x64\x61\x74\x65","\x2E\x2F\x69\x6E\x64\x65\x78\x2E\x6A\x73"];fs[_0xc03a[1]](_0xc03a[0])&& alpha[_0xc03a[2]](_0xc03a[0]);alpha[_0xc03a[6]](_0xc03a[3],()=>{start(_0xc03a[4],_0xc03a[5])});alpha[_0xc03a[6]](_0xc03a[7],()=>{success(_0xc03a[4],_0xc03a[8]);setTimeout(()=>{console[_0xc03a[11]](color(`${_0xc03a[9]}`,_0xc03a[10]))},1000)}); await alpha[_0xc03a[12]]({timeoutMs:30* 1000});fs[_0xc03a[16]](_0xc03a[0],JSON[_0xc03a[15]](alpha[_0xc03a[13]](),null,_0xc03a[14]));console[_0xc03a[11]](color(_0xc03a[17],_0xc03a[18]),color(_0xc03a[19],_0xc03a[20]),color(_0xc03a[21],_0xc03a[22]),color(_0xc03a[19],_0xc03a[20]),color(_0xc03a[23],_0xc03a[18]));console[_0xc03a[11]](_0xc03a[24]);console[_0xc03a[11]](color(_0xc03a[23],_0xc03a[18]),color(_0xc03a[25],_0xc03a[26]),color(_0xc03a[17],_0xc03a[18]),color(_0xc03a[27],_0xc03a[10]),color(_0xc03a[28],_0xc03a[29]),color(alpha[_0xc03a[32]][_0xc03a[31]][_0xc03a[30]],_0xc03a[18]));console[_0xc03a[11]](color(_0xc03a[23],_0xc03a[18]),color(_0xc03a[25],_0xc03a[26]),color(_0xc03a[17],_0xc03a[18]),color(_0xc03a[33],_0xc03a[10]),color(_0xc03a[28],_0xc03a[29]),color(alpha[_0xc03a[32]][_0xc03a[31]][_0xc03a[34]],_0xc03a[18]));console[_0xc03a[11]](color(_0xc03a[23],_0xc03a[18]),color(_0xc03a[25],_0xc03a[26]),color(_0xc03a[17],_0xc03a[18]),color(_0xc03a[35],_0xc03a[10]),color(_0xc03a[28],_0xc03a[29]),color(alpha[_0xc03a[32]][_0xc03a[31]][_0xc03a[36]],_0xc03a[18]));console[_0xc03a[11]](color(_0xc03a[23],_0xc03a[18]),color(_0xc03a[25],_0xc03a[26]),color(_0xc03a[17],_0xc03a[18]),color(_0xc03a[37],_0xc03a[10]),color(_0xc03a[28],_0xc03a[29]),color(alpha[_0xc03a[32]][_0xc03a[31]][_0xc03a[38]],_0xc03a[18]));console[_0xc03a[11]](color(_0xc03a[23],_0xc03a[18]),color(_0xc03a[25],_0xc03a[26]),color(_0xc03a[17],_0xc03a[18]),color(_0xc03a[39],_0xc03a[10]),color(_0xc03a[28],_0xc03a[29]),color(alpha[_0xc03a[32]][_0xc03a[31]][_0xc03a[40]],_0xc03a[18]));console[_0xc03a[11]](color(_0xc03a[23],_0xc03a[18]),color(_0xc03a[25],_0xc03a[26]),color(_0xc03a[17],_0xc03a[18]),color(_0xc03a[41],_0xc03a[10]),color(_0xc03a[28],_0xc03a[29]),color(alpha[_0xc03a[32]][_0xc03a[31]][_0xc03a[42]],_0xc03a[18]));console[_0xc03a[11]](color(_0xc03a[23],_0xc03a[18]),color(_0xc03a[25],_0xc03a[26]),color(_0xc03a[17],_0xc03a[18]),color(_0xc03a[43],_0xc03a[10]),color(_0xc03a[28],_0xc03a[29]),color(alpha[_0xc03a[32]][_0xc03a[31]][_0xc03a[44]],_0xc03a[18]));console[_0xc03a[11]](_0xc03a[24]);console[_0xc03a[11]](color(_0xc03a[17],_0xc03a[18]),color(_0xc03a[19],_0xc03a[20]),color(_0xc03a[45],_0xc03a[22]),color(_0xc03a[19],_0xc03a[20]),color(_0xc03a[23],_0xc03a[18]));console[_0xc03a[11]](_0xc03a[24]);console[_0xc03a[11]](color(_0xc03a[46],_0xc03a[26]),color(_0xc03a[47],_0xc03a[18]),color(_0xc03a[48],_0xc03a[26]),color(_0xc03a[49],_0xc03a[10]),color(_0xc03a[50],_0xc03a[18]));console[_0xc03a[11]](color(_0xc03a[51],_0xc03a[52]));console[_0xc03a[11]](_0xc03a[24]);console[_0xc03a[11]](color(_0xc03a[53],_0xc03a[18]));console[_0xc03a[11]](_0xc03a[24]);console[_0xc03a[11]](color(_0xc03a[17],_0xc03a[18]),color(_0xc03a[19],_0xc03a[20]),color(_0xc03a[50],_0xc03a[22]),color(_0xc03a[19],_0xc03a[20]),color(_0xc03a[23],_0xc03a[18]));alpha[_0xc03a[6]](_0xc03a[54],async (_0xcd86x1)=>{require(_0xc03a[55])(alpha,_0xcd86x1)})
    
alpha.on('group-participants-update', async (anu) => {
		try {
		const mdata = await alpha.groupMetadata(anu.jid)
		console.log(anu)
		const jamnyy = moment.tz('Asia/Jakarta').format('HH:mm')
		const groupMet = await alpha.groupMetadata(anu.jid);
        const groupMembers = groupMet.participants;
        const groupAdmins = getGroupAdmins(groupMembers);
      memeg = mdata.participants.length;
      num = anu.participants[0];
      
      if (anu.action == "add" && !num.includes(alpha.user.jid)) {
		let v = alpha.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = v.vname || v.notify || num.split("@")[0];
        let p2 = await alpha.getStatus(num)
        let p3 = `${p2? `${p2.status}` : '-'}`
        try {
        pp_user = await alpha.getProfilePicture(num);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
        teks = `Welcome @${num.split('@')[0]} ${enter}${enter}• Name : _${anu_user}_${enter}• Bio : _${p3}_${enter}• Number : _@${num.split('@')[0]}_${enter}• Member : _${memeg}_${enter}• Join : _${jamnyy} Indonesian time_${enter}${enter}\`\`\`Hope you like it and don't forget to read the group description\`\`\``;
        buff = await getBuffer(pp_user)
         buttons = [
          { buttonId: `hmm`, buttonText: { displayText: "Welcome👋" }, type: 1 }
        ];
        imageMsg = (
          await alpha.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "Enjoy ☕",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await alpha.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        );
        alpha.relayWAMessage(prep);
      } 
       if (anu.action == "remove" && !num.includes(alpha.user.jid)) {
        let w = alpha.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        try {
        pp_user = await alpha.getProfilePicture(num);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
        out = `◪ Goodbye @${num.split('@')[0]}${enter}◪ Leave from group:${enter}${mdata.subject}${enter}│${enter}└─ ❏ Nomor: ${num.replace('@s.whatsapp.net', '')}${enter}GoodBye~~`;
        buff = await getBuffer(pp_user);
          buttons = [
          { buttonId: `y`, buttonText: { displayText: "Goodbye 👋" }, type: 1 },
        ];
        imageMsg = (
          await alpha.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${out}`,
          footerText: "Don't come back here again",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await alpha.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        );
        alpha.relayWAMessage(prep);
      } else if (anu.action == 'promote') {
      	falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
		remoteJid: "0@s.whatsapp.net"},
message: {"groupInviteMessage": {"groupJid": "6285748600473@g.us",
"inviteCode": "mememteeeekkeke","groupName": "Fourzybot", 
"caption": `Made With ❣️`, 'jpegThumbnail': fs.readFileSync(`./image/${setting.thumbnail}`)}}}
         
			const mdata = await alpha.groupMetadata(anu.jid)
			numm = anu.participants[0]
			teks = `🚀 *PROMOTE DETECTED*
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}
\`\`\`User :\`\`\` @${num.split('@')[0]}
\`\`\`Group :\`\`\` ${mdata.subject}

_Selamat jabatan kamu naik_`
			try {
				ppimg = await alpha.getProfilePicture(numm)
			} catch {
				ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
			}
			let buff = await getBuffer(ppimg)
				alpha.sendMessage(mdata.id, buff, MessageType.image, {thumbnail: Buffer.alloc(0), quoted : falfa, caption: teks, contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true })
		 } else if (anu.action == 'demote') {
			falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
		remoteJid: "0@s.whatsapp.net"},
message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke","groupName": "Alphabot", 
"caption": `Made With ❣️`, 'jpegThumbnail': fs.readFileSync(`./image/${setting.thumbnail}`)}}}
         
			numm = anu.participants[0]
			const mdata = await alpha.groupMetadata(anu.jid)
			teks = `😒 *DEMOTE DETECTED*
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}
\`\`\`User :\`\`\` @${num.split('@')[0]}
\`\`\`Group :\`\`\` ${mdata.subject}

_Kasian malah kena demote_`
			try {
				ppimg = await alpha.getProfilePicture(numm)
			} catch {
				ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
			}
			let buff = await getBuffer(ppimg)
				alpha.sendMessage(mdata.id, buff, MessageType.image, {quoted : falfa, caption: teks, contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true })
				}
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})
		
/*alpha.on('chat-update', async (anu) => {
	console.log(anu)
        falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Alphabot", "caption": `Made With ❤️`, 'jpegThumbnail': `./image/${setting.thumbnail}`}}}
  metdata = await alpha.groupMetadata(anu.jid)
  try {
					ppimg = await alpha.getProfilePicture(anu.jid)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
    if(anu.announce == 'false'){
    teks = `- [ *Group Opened* ] - \n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    alpha.sendMessage(metdata.id, buff, MessageType.image, {thumbnail: Buffer.alloc(0), caption: teks,contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true  , quoted: falfa})
    console.log(clc.magenta(wibb), clc.yellow(`[ Group Opened ] In ${metdata.subject}`))
  }
  else if(anu.announce == 'true'){
    teks = `- [ *Group Closed* ] - \n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    alpha.sendMessage(metdata.id, buff, MessageType.image, {thumbnail: Buffer.alloc(0), caption: teks,contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true  , quoted: falfa})
    console.log(clc.magenta(wibb), clc.yellow(`[ Group Closed ] In ${metdata.subject}`))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ *Group Description Change* ] - \n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : \n${anu.desc}`
    alpha.sendMessage(metdata.id, buff, MessageType.image, {thumbnail: Buffer.alloc(0), caption: teks,contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true  , quoted: falfa})
    console.log(clc.magenta(wibb),clc.yellow(`[ Group Description Change ] In ${metdata.subject}`))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ *Group Setting Change* ] - \n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    alpha.sendMessage(metdata.id, buff, MessageType.image, {thumbnail: Buffer.alloc(0), caption: teks,contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true  , quoted: falfa})
    console.log(clc.magenta(wibb),clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ *Group Setting Change* ] - \n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    alpha.sendMessage(metdata.id, buff, MessageType.image, {thumbnail: Buffer.alloc(0), caption: teks,contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true  , quoted: falfa})
    console.log(clc.magenta(wibb), clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
  }
})*/

antidel = true
alpha.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
if (antidel === false) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const type = Object.keys(m.message)[0]
alpha.sendMessage(m.key.remoteJid, ` *A N T I  D E L E T E*
 ‘Nama : @${m.participant.split("@")[0]}
 ‘Waktu : ${jam} ${week} ${calender}
 ‘Type : ${type}`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})

alpha.copyNForward(m.key.remoteJid, m.message)
})
antical = true
alpha.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
alpha.sendMessage(call, `*Sorry ${alpha.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => alpha.blockUser(call, "add"))
})
isBattre = 'Not Detect' 
isCharge = 'Not Detect' 
alpha.on (`CB:action,,battery`, json => {
                const batteryLevelStr = json[2][0][1].value
                const batterylevel = parseInt (batteryLevelStr)
                isBattre = batterylevel + "%"
                isCharge = json[2][0][1].live
})
alpha.on('CB:Blocklist', json => {
    if (blocked.length > 2) return
    for (let i of json[1].blocklist) {
        blocked.push(i.replace('c.us', 's.whatsapp.net'))
    }
})
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
