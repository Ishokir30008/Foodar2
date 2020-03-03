var food_prices = new Array();
food_prices["classic"] = 3;
food_prices["premium"] = 5;
food_prices["royal"] = 10;

function getFoodTypePrice(){
    var foodTypePrice=0;
    var theForm = document.forms["foodform"];
    var style = theForm.elements["style"];

    for (var i = 0; i < style.length; i++) {
        
        if (style[i].checked) {
            foodTypePrice = food_prices[style[i].value];
            break;
            
        }
        
    }
    return foodTypePrice;
}


var tips = new Array();
tips["ten"] = 0.1;
tips["five"] = 0.5;
tips["two"] = 0.2;

function getTips(){
    var foodtype = 20;
    var tipTypePrice=0;
    var theForm = document.forms["foodform"];
    var tip = theForm.elements["tip"];

    for (var i = 0; i < tip.length; i++) {

        var theForm = document.forms["foodform"];
        var style = theForm.elements["style"];
        
        if (tip[i].checked && style[i].checked ){
            tipTypePrice = tips[tip[i].value]*food_prices[style[i].value];
            break;
            
        }
        
    }
    return tipTypePrice;
}
function calculateTotal(){
    var foodPrice = getTips() + getFoodTypePrice();

    var abc = document.getElementById("totalPrice");
    abc.style.display="block";
    abc.innerHTML="Total price for the food type $"+foodPrice;
}

function hideTotal(){
    var abc = document.getElementById("totalPrice");
    abc.style.display="none";
}


