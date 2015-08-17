var gold = 0;
function startGame()
{
    var goldTimer=setInterval("goldPlus()", 500);
}
function goldPlus()
{
    gold+=1;
    console.log("Текущее значение gold - " + gold);
    var div = document.getElementById("gold_box");
    div.style.width=gold+"px";
    var a = div.style.width;

    console.log("Значение a - " + a);
/*
    var a = document.getElementById('gold').style.width;
    a.toString();

    document.getElementById('goldbox').offsetWidth = gold;
*/
}