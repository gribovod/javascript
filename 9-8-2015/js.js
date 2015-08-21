var gold = 1950;
var dGold = 1;
var maxGold = 970;
var MesagaShow = true;

function startGame()
{
    document.getElementById("start_button").style.visibility = "hidden"; //style.display=='none'
    setInterval("goldPlus()", 500);
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
    var ans = prompt("Выберите какой источник ресурса хотите купить: \n\n1. Дерево - 200 золота\n2. Камень - 500 золота\n3. Песок - 350 золота\n\n и введите цифру:",1);
    switch (parseInt(ans))
    {
        case 1:
            if(gold > 200)
            {
                gold -= 200;
                derevoAdd();
            }
            else
            {
                alert("Мало золота!")
            }
            break;
        case 2:
            if(gold > 500)
            {
                gold -= 500;
            }
            else
            {
                alert("Мало золота!")
            }
            break;
        case 3:
            if(gold > 350)
            {
                gold -= 350;
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

setInterval("StartFerm()", 500);
function StartFerm()
{
    for (var i in derevoArr)
    {
        var curHeight = parseInt(document.getElementById(derevoArr[i]).style.height);
        curHeight++;
        if(curHeight==70)
        {
            derevo +=70;
            document.getElementById("vsegoDereva").innerHTML=derevo;
            curHeight=0;
        }
        document.getElementById(derevoArr[i]).style.height = curHeight+"px"
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