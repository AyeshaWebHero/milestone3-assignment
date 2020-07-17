// //1 mile = 5280 feet. According to the nautical system of measurement, 
// one mile is equivalent to 6076.12 feet
// and is shown as; 1 mile = 6076.12 feet . 
// 1 mile = 6076.12 feet. Mile is abbreviated as “mi” and 
// is a historical unit of length that is mostly used 
// to measure the distance between two geographical locations.
 
function feetToMile (feet) {
    var mile = feet/5280; 
    var nauticalMile = feet/6076.12; 
    return nauticalMile;
    return mile;
  }
   
   var realMile = feetToMile (12678);
   realMile = realMile.toFixed(5); //to see the result till 5th decimal precision
   console.log ("Feet to mile conversion is:", realMile); 
   var nauMile = feetToMile (90000); 
   nauMile = nauMile.toFixed(7); //to see the result till 7th decimal precision
   console.log ("Your feet to nautical mile conversion is:", nauMile);





   

       //woodCalculator
//length(feet) × width(feet) × height(feet) = cubic feet(cf³). 
//CFT is also known as Cubic feet or ft3, a unit measurement of volume.

function woodCalculator (chair, bed, table) {
    var chairCount = chair * 1; //takes 1 cubic feet(cf³) of wood to make a chair
    var bedCount = bed * 5;
    var tableCount = table * 3; //takes 3 cubic feet(cf³) of wood to make a chair
    
        if (chairCount<= 0){
            console.log("Negative values cannot be taken. Error!");
            return 0;
        }
        else if (bedCount<=0) {
            console.log("Negative values cannot be taken. Error!");
            return 0;
        }
        else if (tableCount<=0) {
            console.log("Negative values cannot be taken. Error!");
            return 0;
        }

else {
    totalWood = chairCount + bedCount + tableCount;  //chair * 1 + bed * 5 + table * 3;
    // var x = totalWood;
    return totalWood;
}

}
    var woodResult = woodCalculator(5, 7, 2); //respectively chair,bed and table that you need. 
    //put negative values for correction- var woodResult = woodCalculator(5, 0, 2);
    console.log("Total amount of woods needed to make your required items:", woodResult, "cf³");








           //brickCalculator

function brickCalculator(floor) {
     
    if (floor <= 10) {
        var bricks = floor * 15000; // till 10th floor, you will need 15000bricks for each floor
        // console.log(abc);
    }
    else if (floor > 11 && floor <= 20) {
        var bricks = floor * 12000;  // from 11th & till 20th floor, you will need 12000bricks for each floor
    }
   
    else if (floor > 20 && floor <= 45) { // from 21th & till 45th floor, you will need 10000bricks for each floor
        var bricks = floor * 10000;
    }
    return bricks;
}

    var brickResult = brickCalculator (17); //in place of 17, enter your floor no. to count the bricks that you need
    console.log("According to the floor number, you will need:", brickResult, "bricks.")




      //tinyFriend
function tinyFriend(arr) {
    
var  shortest = arr[0];
for(var i = 0; i < arr.length; i++){
    var element = arr[i];
    if( element.length < shortest.length ){
        shortest =  element;
    }
}
    return shortest;
}
var shortestName = tinyFriend(["Amashjk","Abasir",1,"Jungook","Faa","Fariha",98, 002, "Shafique", "Aishwariya"]);
console.log("Smallest name is:",shortestName);
console.log("Letters present in your name:", shortestName.length);
const type = typeof (shortestName);
console.log("Type of your friend's name is:",type);
