var Config = {};
//            __     __        __        __  
//  /\  |  | |  \ | /  \ |    /  \  /\  |  \ 
// /~~\ \__/ |__/ | \__/ |___ \__/ /~~\ |__/ 
//   configuration file             v1.03

// Server name
// default: "audioload"
Config.serverName = "Leviathan Networks HaloRP";

// Text background
// Enable or disable text background
// default: true
Config.textBackground = true;

// Server logo image url
// put the image on the images folder then
// set this to its filename (eg "logo.png")
// (leave it false to not use it)
// default: false
Config.serverImage = false;

// Song playlist
// only use .ogg files!
// put songs on the songs folder, then add them here
Config.playlist = [
	{url: "halo1.ogg", name: "We're burning Sunshine"},
	{url: "halo2.ogg", name: "Spirit Of Fire"},
	{url: "halo3.ogg", name: "Halo CE"}
];

// Songs volume
// from 0 to 1
// 0 = 0%
// 1 = 100%
// (you can use values higher than 1 for 100%+ volume)
// default: 0.5
Config.songVolume = 0.08;

// Random song order
// default: true
Config.songShuffle = true;

// Background type
//
// Available types:
// "bars"
// "bars2"
// "dualbars"
// "quadbars"
// "squares"
// "circle"
//
// default: "bars"
Config.background = "bars2";

// Background opacity
// sets the opacity of the audio visualization
// from 0 to 1
// 0.0 = 0%, fully transparent
// 1.0 = 100%, fully opaque
// default: 1.0
Config.backgroundOpacity = 0.50;

// Background image url
// put the image on the images folder then
// set this to its filename (eg "background.jpg")
// (set it false to not use it)
// default: "blackbackground.jpg"
Config.backgroundImage = "halowall.jpg";

// Background rendering fps
// This can cause a large impact performance-wise
// recommended value: 30
// maximum value: 60
// default: 30
Config.backgroundFps = 30;

// Font family
// (do not use spaces in font's filename)
// default: "UpheavalPro.ttf"
Config.fontType = "Halo.ttf";

// Font color
// Use hexadecimal color values
// default: "#FFFFFF"
Config.fontColor = "#FFFFFF";

// Colors used for background/layout purposes
// Use hexadecimal color values
// Primary color
// default: "#00FF9B"
Config.primaryColor = "#38eeff";
// Secondary color
// default: "#21001E"
Config.secondaryColor = "#21001E";
// Background color
// default: "#101010"
Config.backgroundColor = "#101010";

// Loading screen messages
Config.messages = [
	"Welcome to Leviathan Networks!",
	"Obey all the rules and have fun!",
	"Enjoy your time here!"
];

// Messages delay (in milliseconds)
// delay per number of characters in message
// default: 200
Config.messagesDelay = 200;