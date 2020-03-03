
 //Set up an associative array
 //The keys represent the type of food
 //The values represent the cost of the food i.e A classic food cost's $35
 var food_prices = new Array();
 food_prices["classic"]=20;
 food_prices["premium"]=25;
 food_prices["royal"]=35;
 
	 
// getFoodTypePrice() finds the price based on the size of the cake.
// Here, we need to take user's the selection from radio button selection
function getFoodTypePrice()
{  
    var foodTypePrice=0;
    //Get a reference to the form id="foodform"
    var theForm = document.forms["foodform"];
    //Get a reference to the cake the user Chooses name=style":
    var style = theForm.elements["style"];
    //Here since there are 3 radio buttons style.length = 3
    //We loop through each radio buttons
    for(var i = 0; i < style.length; i++)
    {
        //if the radio button is checked
        if(style[i].checked)
        {
            //we set foodTypePrice to the value of the selected radio button
            //i.e. if the user choose the 8" cake we set it to 25
            //by using the food_prices array
            //We get the selected Items value
            //For example food_prices["classic".value]"
            foodTypePrice = food_prices[style[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the foodTypePrice
    return foodTypePrice;
}








        
function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var foodPrice = getFoodTypePrice();
    
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price For the Cake $"+foodPrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}