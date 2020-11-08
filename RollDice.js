
    var map = new Map();
    var random = 0;
    let count = 10;
    while(map.get(random)!=count){
    random = Math.floor(Math.random()*10)%6+1;
    if(map.has(random))
        map.set(random, map.get(random)+1);
    else{
        map.set(random,1);
        console.log("key set.");
    }
    // console.log("Random dice roll value: " +random);
    }
    console.log("Dice value having count 10 is: "+random);


