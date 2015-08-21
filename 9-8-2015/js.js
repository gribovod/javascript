var gold = 9900;
var dGold = 1;
var maxGold = 970;
var MesagaShow = true;

function startGame()
{
    document.getElementById("start_button").style.visibility = "hidden"; //style.display=='none'
    setInterval("goldPlus()", 100);
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

   // console.log("Текущее значение gold - " + gold);
}
function pay()
{
    var ans = prompt("Выберите какой источник ресурса хотите купить: \n\n1. Дерево - 400 золота\n2. Камень - 900 золота\n3. Песок - 700 золота\n\n и введите цифру:",1);
    switch (parseInt(ans))
    {
        case 1:
            if(gold > 400)
            {
                gold -= 400;
                derevoAdd();
            }
            else
            {
                alert("Мало золота!")
            }
            break;
        case 2:
            if(gold > 900)
            {
                gold -= 900;
                kamenAdd();
            }
            else
            {
                alert("Мало золота!")
            }
            break;
        case 3:
            if(gold > 700)
            {
                gold -= 700;
                pesokAdd();
            }
            else
            {
                alert("Мало золота!")
            }
            break;
        default:
            alert("Я не понял что Вы ввели! Просто введите цифру и все!!!")
    }

}
/////////////////////////////////////// ДЕРЕВО
var derevo = 0;
var derevoArr = [];
var SummaFermDereva = 0;

function derevoAdd()
{
    var curID = "d" + SummaFermDereva;
    var curCSS = "left: " + ((SummaFermDereva * 50) + 5) + "px; height: 10px";
    var parElement =  document.getElementById("derevo");
    var newDiv = create( "div", { id: curID, style: curCSS});
    parElement.appendChild(newDiv);
    derevoArr[SummaFermDereva] = curID;
    SummaFermDereva++;
}

///////////////////////////////////////  КАМЕНЬ

var kamen = 0;
var kamenArr = [];
var SummaFermKamen = 0;

function kamenAdd()
{
    var curID = "k" + SummaFermKamen;
    var curCSS = "left: " + ((SummaFermKamen * 50) + 5) + "px; height: 10px";
    var parElement =  document.getElementById("kamen");
    var newDiv = create( "div", { id: curID, style: curCSS});
    parElement.appendChild(newDiv);
    kamenArr[SummaFermKamen] = curID;
    SummaFermKamen++;
}

///////////////////////////////////////  ПЕСОК

var pesok = 0;
var pesokArr = [];
var SummaFermPesok = 0;

function pesokAdd()
{
    var curID = "p" + SummaFermPesok;
    var curCSS = "left: " + ((SummaFermPesok * 50) + 5) + "px; height: 10px";
    var parElement =  document.getElementById("pesok");
    var newDiv = create( "div", { id: curID, style: curCSS});
    parElement.appendChild(newDiv);
    pesokArr[SummaFermPesok] = curID;
    SummaFermPesok++;
}
//////////////////////////////////////// ТАЙМЕР РОСТА ФЕРМ
setInterval("StartFerm()", 100);
function StartFerm()
{
    var curHeight;
    for (var i in derevoArr)
    {
        curHeight = parseInt(document.getElementById(derevoArr[i]).style.height);
        curHeight++;
        if(curHeight==70)
        {
            derevo +=70;
            document.getElementById("vsegoDereva").innerHTML=derevo;
            curHeight=0;
        }
        document.getElementById(derevoArr[i]).style.height = curHeight+"px"
    }
    for (var j in kamenArr)
    {
        curHeight = parseInt(document.getElementById(kamenArr[j]).style.height);
        curHeight++;
        if(curHeight==70)
        {
            kamen +=70;
            document.getElementById("vsegoKamnya").innerHTML=kamen;
            curHeight=0;
        }
        document.getElementById(kamenArr[j]).style.height = curHeight+"px"
    }
    for (var k in pesokArr)
    {
        curHeight = parseInt(document.getElementById(pesokArr[k]).style.height);
        curHeight++;
        if(curHeight==70)
        {
            pesok +=70;
            document.getElementById("vsegoPeska").innerHTML=pesok;
            curHeight=0;
        }
        document.getElementById(pesokArr[k]).style.height = curHeight+"px"
    }
}

var curLevelCastle = 0;
function castleUp(){
    if (curLevelCastle == 0 && derevo >= 600  && kamen >= 200 && pesok >= 400) {
        curLevelCastle++;
        derevo -= 600;
        kamen -= 200;
        pesok -= 400;
        alert("Замок построен!")
    } else if (curLevelCastle == 1 && derevo >= 500  && kamen >= 800 && pesok >= 300) {
        curLevelCastle++;
        derevo -= 500;
        kamen -= 800;
        pesok -= 300;
        alert("Замок улучшен - уровень 1!")
    } else if (curLevelCastle == 2 && derevo >= 400  && kamen >= 900 && pesok >= 700) {
        curLevelCastle++;
        derevo -= 400;
        kamen -= 900;
        pesok -= 700;
        alert("Замок улучшен - уровень 2")
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