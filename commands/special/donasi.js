exports.run = {
   usage: ['dnsiii', 'donasi'],
   async: async (m, {
      client
   }) => {
      client.sendMessageModify(m.chat, info(), m, {
            title: 'D O N A S I',
            largeThumb: true,
            thumbnail: await Func.fetchBuffer('https://telegra.ph/file/51269b4727fbf6ff01f3c.jpg')
            })         
   },
   error: false,
   cache: true,
   location: __filename
}

let info = () => {
   return `*❏ D O N A S I*
┏━━⬣ 
┃Mari berdonasi bersama kami
┃untuk meringankan user beban
┃
┃Bagi Anda yang memiliki saldo lebih
┃bisa di donasikan melalui berikut ini.
┃
┃D A N A : [ MINTA OWNER ]
┃P U L S A : [ MINTA OWNER ]
┃G O P A Y : [ MINTA OWNER ]
┗⬣

note : *donasi seikhlasnya aja*`
}
