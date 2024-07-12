const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_51_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDc0LFxuICAgICAgICA2NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc2LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDM5LFxuICAgICAgICA2MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDU4LFxuICAgICAgICAzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDM4LFxuICAgICAgICA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MixcbiAgICAgICAgMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDM5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NyxcbiAgICAgICAgNjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA5MixcbiAgICAgICAgMjU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2MixcbiAgICAgICAgMTkyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODksXG4gICAgICAgIDExOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDc1LFxuICAgICAgICA2MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNixcbiAgICAgICAgMjMsXG4gICAgICAgIDc3LFxuICAgICAgICAzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNixcbiAgICAgICAgMTcyLFxuICAgICAgICAzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzUsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MSxcbiAgICAgICAgODMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI5LFxuICAgICAgICA1NixcbiAgICAgICAgOTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MixcbiAgICAgICAgNTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiall6YUhSVGJoNkdVOUpITlRiNGFXeTdRTlo3Rm5SVWduRUM0ekF1ajB6WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibEFjelAyc3BUTnV1a2lzdUtZNV9oZ1wiLFxuICBcInBob25lSWRcIjogXCJlYzU0M2E0Zi01M2MwLTQ0M2QtOGIxZS05OTM0MmEyNjEyN2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQyLFxuICAgICAgMzUsXG4gICAgICAxMjMsXG4gICAgICAxNzgsXG4gICAgICAxNTYsXG4gICAgICAyNTUsXG4gICAgICAyMjYsXG4gICAgICAxMjQsXG4gICAgICAxOTUsXG4gICAgICA1OSxcbiAgICAgIDIzMixcbiAgICAgIDI1MyxcbiAgICAgIDE5MCxcbiAgICAgIDQ2LFxuICAgICAgMzEsXG4gICAgICAyMjUsXG4gICAgICAxNyxcbiAgICAgIDIzMCxcbiAgICAgIDE3MSxcbiAgICAgIDk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MixcbiAgICAgIDUyLFxuICAgICAgODcsXG4gICAgICAxNTYsXG4gICAgICAxMjcsXG4gICAgICAxMzMsXG4gICAgICA4MSxcbiAgICAgIDMyLFxuICAgICAgODUsXG4gICAgICAyMzEsXG4gICAgICA0NixcbiAgICAgIDUzLFxuICAgICAgNDgsXG4gICAgICAyMDksXG4gICAgICAxOTksXG4gICAgICAxNTAsXG4gICAgICAwLFxuICAgICAgMTA3LFxuICAgICAgOTAsXG4gICAgICAyMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVRDOExMRzFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5OTg5NzQ2Njo0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODcyNzQ1NzQ2NDQ5Mzo0OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMYnlyK2NHRVBQS3hyUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkxkNDY4Uk9iOUFxeTBUcnpCeHB3MWUvMmM0ZTd1UGlLejBIbjkyWUliaW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUDZwcm5zQldkdW1Kcnh3NlRSaERXUksyWEZsNSswVU5yMm5ZSEh1eG1FRHE0TnFRaFpiMW9RcjRGU0s5UUsrUnR6ZVE1ejk5b0JzY2ozbFZ3SWdyQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNWdRT2J0KysySDhhQWJ1Qm85R0NtQjhLeHhiRjFwYm14aXZXdTdFVGxtdTlrZlZxTG9xRzFKbnA4aUpuY3dRNjhYTzZ5OTg4cmhtYW5Fencvc0pSaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzk5ODk3NDY2OjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODIxMTEwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
