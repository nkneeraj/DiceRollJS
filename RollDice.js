
    var map = new Map();

    var count = 10;
    while(count!=0){
    let random = Math.floor(Math.random()*10)%6+1;
    if(map.has(random))
        map.set(random, map.get(random)+1);
    else{
        map.set(random,1);
        console.log("key set.");
    }
    console.log("Random dice roll value: " +random);
    count--;
    }


