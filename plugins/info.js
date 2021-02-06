let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
made by pennywise

Rec: Drawl Nag
Script: @Nurotomo
Github: 
https://github.com/Arya274/Arya-BOT3

*Sosmed :*
only instagram
Instagram: @the._don_

`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

