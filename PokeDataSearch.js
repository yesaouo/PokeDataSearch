var request = require("request");
var cheerio = require("cheerio");

var pkm='Dragapult';
var url = "https://wiki.52poke.com/wiki/"+pkm;

request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body);
    var type = $(".type-box-8-inner").html();
    var hp = $(".bgl-HP [style='float:right']").html();
    var atk = $(".bgl-攻击 [style='float:right']").html();
    var def = $(".bgl-防御 [style='float:right']").html();
    var satk = $(".bgl-特攻 [style='float:right']").html();
    var sdef = $(".bgl-特防 [style='float:right']").html();
    var spd = $(".bgl-速度 [style='float:right']").html();
    var pm={'屬性':type,'血量':hp,'攻擊':atk,'防禦':def,'特攻':satk,'特防':sdef,'速度':spd};
    console.log(pm);
  } else {
    console.log("擷取錯誤：" + error);
  }
});