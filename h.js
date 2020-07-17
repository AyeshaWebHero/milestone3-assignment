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
   
   