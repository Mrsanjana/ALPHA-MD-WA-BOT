const fs = require('fs')
const chalk = require('chalk')

//Api Wesite\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['94716989773']
global.premium = ['94716989773']
global.ownernomer = '94716989773'
global.ownername = 'MR.Manuth ®'
global.botname = '😌🔥 MS BOT 😌🔥 v1.0.0'
global.footer = ' 😌🔥 MS BOT 😌🔥 v1'
global.ig = 'https://github.com/ALPHA-OFFICIAL-TEAM'
global.region = 'Sri Lanka, Southern Province , Matara'
global.sc = 'https://github.com/ALPHA-OFFICIAL-TEAM'
global.myweb = 'https://www.youtube.com/c/AchiBrolk'
global.packname = 'MS BOT MD'
global.author = 'L.K.H.M. Lakdiv '
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '🚢'
global.mess = {
    success: 'Hari wuththo😒💔✓',
    admin: 'Thota Admin Na wuththo.higanna😒!',
    botAdmin: 'Admin Depan Pago Issellama😒...Eca Nathuwa Karai Pamcac',
    owner: 'Meka hadapu ecata witharai pago puluwan.MR.MANUTH😌🔥!',
    group: 'Meca group wala gahapan Besiye!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'idapn pago poddak😒...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/djt.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
