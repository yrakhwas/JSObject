let auto =
{
    producer: "Volkswagen",
    model:"Golf 7 R",
    productionYear: 2017,
    averageSpeed: 100
};

function showInfo(auto)
{
console.log("Producer: " + auto.producer + "\nModel: " + auto.model + "\nSpeed: " + auto.averageSpeed + "\nYear of Production :" + auto.productionYear);
      
}

function timeOfTraveling(auto, distance)
{
    let time = distance/auto.averageSpeed;
    let stop = parseInt(time/4);
    if(stop > 1)
    {
        time += stop;
    }
    console.log("Time of travel : " + time);
}

showInfo(auto);
timeOfTraveling(auto, 900)