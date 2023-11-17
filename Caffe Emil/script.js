console.time("SiteLoadTime")
function json(url) {
  return fetch(url).then(res => res.json());
}
let apiKey = 'c29abbb3ff0b74a076723a5a635684b85da90f17d294d78fed6dc4b6';
json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {



// Proxy/VPN BlockWall
$.get(`https://api.ipdata.co?api-key=${apiKey}`, function (response) {
  if (response.threat.is_anonymous) {
    alert("You are not allowed to create an account.");
    }
}, "jsonp");
$.get(`https://api.ipdata.co?api-key=${apiKey}`, function (response) {
  if (response.threat.is_proxy) {
    alert("You are not allowed to create an account.");
    }
}, "jsonp");

console.log("> (Din pengetype)",data.currency,"> (Din Tidszone)",data.time_zone);
console.log("> (ASN)", data.asn, "> (Threat)", data.threat); 
console.log("")
console.log("> (Din By)", data.city, data.region, data.postal, "(Dit Kontinent)",data.continent_name, data.continent_code);
console.log("> (Dit Land)",data.country_name, data.country_code, data.flag, data.languages);
console.log("")
console.log("> (IP)",data.ip," (EU)",data.is_eu,"(longitude)",data.longitude,"(latitude",data.latitude);
console.log("")
console.log("> (Emoji-UniCode)", data.emoji_unicode);
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("> Java Loaded!");
console.log("> Html Loaded!");
console.log("> Css Loaded!");
console.timeEnd("SiteLoadTime")
  
    // so many more properties

var url = window.location.href;
var navbar = document.getElementById("navbar");
var header = document.getElementById("header");
var footer = document.getElementById("footer");

console.log(" ╱|、");
console.log("(˚. 。7");
console.log("|、˜ 〵");
console.log("じし ˍ,)ノ");
console.log("Cafe Emil Er Loadet Og Klar Til Brug!");
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
});