
mp.events.add("spawnVehServer",(player,fulltext) => {

    var playerMoney = player.getVariable('geld');

    if(playerMoney >= 100){
        let playerx = player.position.x;
        let playery = player.position.y;
        let playerz = player.position.z + 1.5;
        console.log("Spawning:" + fulltext);
        
        let veh = mp.vehicles.new(mp.joaat(fulltext), new mp.Vector3(playerx,playery,playerz),
            {
                numberPlate: "ADMIN",
                color: [[255, 0, 0]]
            });
        player.putIntoVehicle(veh,-1);
        veh.rotation = new mp.Vector3(0, 0, player.heading);
        mp.events.call("moneyChange",player,-100);
        

    } else {
        player.outputChatBox("Nicht genug Geld!")
    }



});


mp.events.add("repair",(player) => {
    player.vehicle.repair();
   

});