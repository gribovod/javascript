var GameIsLoad = false;
var DerevoFarmCost = 40;
var KamenFarmCost = 90;
var PesokFarmCost = 70;
var SpedUpGold = 100;
var SpedUpFarm = 100;
var PribavkaResursov = 10;
var VsegoPotrachenoZolota = 0;
var VsegoPotrachenoVremeni = 0;
var gold = 0;
var dGold = 1;
var maxGold = 970;

var MesagaShow = true;

function startGame()
{
    document.getElementById("start_button").style.visibility = "hidden"; //style.display=='none'
    setInterval("goldPlus()", SpedUpGold);
    var timer = setInterval("Timer()", 1000);
    GameIsLoad = true;
}
function Timer(){
    VsegoPotrachenoVremeni++;
    document.getElementById("vremya").innerHTML = VsegoPotrachenoVremeni;
}
function goldPlus()
{
    if (gold < maxGold)
    {
        MesagaShow = true;
        dGold = 1;
    }
    if (gold == 970)
    {
        if (MesagaShow == true)
        {
            alert("Добыча золота приостановлена - хранилище переполнено! \n\n Нужно чего-то купить...");
            MesagaShow = false;
        }
        dGold = 0;
    }
    gold += dGold;
    document.getElementById("gold_box").style.width = gold + "px";
    document.getElementById("gold_text").innerHTML = "Сейчас в закромах " + gold + " золота";
}
/////////////////////////////////////// ДЕРЕВО
var derevo = 0;
var derevoArr = [];
var SummaFermDereva = 0;

function derevoAdd()
{
    if(GameIsLoad==false){startGame();}
    if(gold > DerevoFarmCost)
    {
        gold -= DerevoFarmCost;
        VsegoPotrachenoZolota+=DerevoFarmCost;
        document.getElementById("bablo").innerHTML = VsegoPotrachenoZolota;
        var curID = "d" + SummaFermDereva;
        var curCSS = "left: " + ((SummaFermDereva * 50) + 5) + "px; height: 10px";
        var parElement =  document.getElementById("derevo");
        var newDiv = create( "div", { id: curID, style: curCSS});
        parElement.appendChild(newDiv);
        derevoArr[SummaFermDereva] = curID;
        SummaFermDereva++;
    }
    else
    {
        alert("Мало золота!")
    }
}

///////////////////////////////////////  КАМЕНЬ

var kamen = 0;
var kamenArr = [];
var SummaFermKamen = 0;

function kamenAdd()
{
    if(GameIsLoad==false){startGame();}
    if(gold > KamenFarmCost)
    {
        gold -= KamenFarmCost;
        VsegoPotrachenoZolota+=KamenFarmCost;
        document.getElementById("bablo").innerHTML = VsegoPotrachenoZolota;
        var curID = "k" + SummaFermKamen;
        var curCSS = "left: " + ((SummaFermKamen * 50) + 5) + "px; height: 10px";
        var parElement =  document.getElementById("kamen");
        var newDiv = create( "div", { id: curID, style: curCSS});
        parElement.appendChild(newDiv);
        kamenArr[SummaFermKamen] = curID;
        SummaFermKamen++;
    }
    else
    {
        alert("Мало золота!")
    }

}

///////////////////////////////////////  ПЕСОК
var pesok = 0;
var pesokArr = [];
var SummaFermPesok = 0;

function pesokAdd()
{
    if(GameIsLoad==false){startGame();}
    if(gold > PesokFarmCost)
    {
        gold -= PesokFarmCost;
        VsegoPotrachenoZolota+=PesokFarmCost;
        document.getElementById("bablo").innerHTML = VsegoPotrachenoZolota;
        var curID = "p" + SummaFermPesok;
        var curCSS = "left: " + ((SummaFermPesok * 50) + 5) + "px; height: 10px";
        var parElement =  document.getElementById("pesok");
        var newDiv = create( "div", { id: curID, style: curCSS});
        parElement.appendChild(newDiv);
        pesokArr[SummaFermPesok] = curID;
        SummaFermPesok++;
    }
    else
    {
        alert("Мало золота!")
    }
}
//////////////////////////////////////// ТАЙМЕР РОСТА ФЕРМ
var farmTimer = setInterval("StartFerm()", SpedUpFarm);
function StartFerm()
{
    var curHeight;
    for (var i in derevoArr)
    {
        curHeight = parseInt(document.getElementById(derevoArr[i]).style.height);
        curHeight++;
        if(curHeight==70)
        {
            derevo +=PribavkaResursov;
            document.getElementById("vsegoDereva").innerHTML=derevo;
            curHeight=0;
        }
        document.getElementById(derevoArr[i]).style.height = curHeight+"px";
    }
    for (var j in kamenArr)
    {
        curHeight = parseInt(document.getElementById(kamenArr[j]).style.height);
        curHeight++;
        if(curHeight==70)
        {
            kamen +=PribavkaResursov;
            document.getElementById("vsegoKamnya").innerHTML=kamen;
            curHeight=0;
        }
        document.getElementById(kamenArr[j]).style.height = curHeight+"px";
    }
    for (var k in pesokArr)
    {
        curHeight = parseInt(document.getElementById(pesokArr[k]).style.height);
        curHeight++;
        if(curHeight==70)
        {
            pesok +=PribavkaResursov;
            document.getElementById("vsegoPeska").innerHTML=pesok;
            curHeight=0;
        }
        document.getElementById(pesokArr[k]).style.height = curHeight+"px";
    }
}

var curLevelCastle = 0;
function castleUp(){
    if (curLevelCastle == 0 && derevo >= 600  && kamen >= 200 && pesok >= 400) {
        curLevelCastle++;
        derevo -= 600;
        kamen -= 200;
        pesok -= 400;
        fotka.setAttribute("src","castle1.jpg");
        alert("Замок построен!");
    } else if (curLevelCastle == 1 && derevo >= 500  && kamen >= 800 && pesok >= 300) {
        curLevelCastle++;
        derevo -= 500;
        kamen -= 800;
        pesok -= 300;
        fotka.setAttribute("src","castle2.jpg");
        alert("Замок улучшен - уровень 1!");
    } else if (curLevelCastle == 2 && derevo >= 400  && kamen >= 900 && pesok >= 700) {
        curLevelCastle++;
        derevo -= 400;
        kamen -= 900;
        pesok -= 700;
        fotka.setAttribute("src","castle3.jpg");
        alert("Замок улучшен - уровень 2 - ИГРА ОКОНЧЕНА!\n\n Поздраляю!!!");
        alert("Вы потратили: "+VsegoPotrachenoZolota+" золота, игра длилась: "+VsegoPotrachenoVremeni+" секунд.");
        if (derevo == 0 && kamen == 0 && pesok == 0) {
            alert("Поздраляю - ВЫ ВЫИГРАЛИ!!! Лучше сиргать невозможно!!!");
            setTimeout("window.location.reload()", 5000);
        }else{
            alert("К сожалению, это не лучший результат");
            setTimeout("window.location.reload()", 5000);
        }

    } else {
        alert( 'Не хватает ресурсов!' );
    }
}



// http://ahinea.com/2006/04/14/javascript-dom-create
function create( name, attributes ) {
    var el = document.createElement( name );
    if ( typeof attributes == 'object' ) {
        for ( var i in attributes ) {
            el.setAttribute( i, attributes[i] );

            if ( i.toLowerCase() == 'class' ) {
                el.className = attributes[i];  // for IE compatibility

            } else if ( i.toLowerCase() == 'style' ) {
                el.style.cssText = attributes[i]; // for IE compatibility
            }
        }
    }
    for ( var i = 2; i<arguments.length; i++ ) {
        var val = arguments[i];
        if ( typeof val == 'string' ) { val = document.createTextNode( val ) };
        el.appendChild( val );
    }
    return el;
}