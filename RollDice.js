
var map = new Map();
var value_map = new Map();
var dice_roll_number = 1;
var random = 0;
let count = 10;
while(map.get(random)!=count){
    random = Math.floor(Math.random()*10)%6+1;
    value_map.set(dice_roll_number++,random);

    if(map.has(random))
        map.set(random, map.get(random)+1);
    else{
        map.set(random,1);
        console.log("key set.");
}
    // console.log("Random dice roll value: " +random);
}
    console.log("Dice value having count 10 is: "+random);
    console.log("number of times dice rolled :" +dice_roll_number);


