var gold = 950;
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

    console.log("Текущее значение gold - " + gold);
}
function pay()
{
    var ans = prompt("Выберите какой источник ресурса хотите купить: \n\n1. Дерево - 200 золота\n2. Камень - 500 золота\n3. Песок - 350 золота\n\n и введите цифру:");
    switch (parseInt(ans))
    {
        case 1:
            if(gold > 200)
            {
                gold -= 200;
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