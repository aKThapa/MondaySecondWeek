/*This is my javascript for JSON training*/


/*var firstJ = '{"favCar" : "BMW" , "favTVS" : "Lost" }';

var myJ = JSON.parse(firstJ);
console.log(myJ);

var myS = JSON.stringify(firstJ);
console.log(myS);

var car = {
    
    "model" : "Audi",
    "price" : 2500,
    "engine" : "Petrol"
    
}

console.log(car.model);

var myCar = JSON.stringify(car);
console.log(myCar);

var F1Drivers = ["Lewis" , "kimi" , "Alonso"];

console.log(F1Drivers[2]);*/


var F1 = {
    
    /*array of ojects*/
    "data" :
    [
        
       /* first object in the array*/
        {
            "car"    : "Mercedes",
            "driver" : "Lewis",
            "wins"   : 2
        },
        
        
     /*   second object in the array*/
        {
            "circuit" : "Monaco",
            
            /*another sub array */
            "pointsSystem"  :
            [
                {
                    "firstPlace" : 25,
                    "secondPlace" : 18,
                    "thirdPlace" : 15
                }
            ],
            
            
            "teams" : 11
        }
        
        
    ] 
}

console.log(F1.data[1].pointsSystem[0].thirdPlace);