
mp.events.add("playerDeath", (player) => {
    player.outputChatBox("Wait for a medic du opfa ;D")
});


mp.events.add('revive',(player)=>{
    var nearDeadPlayers = [];
    
    if(player.health < 1){
        player.spawn(player.position);
    } 

    mp.players.forEachInRange(player.position,10,(playerAround)=> {if(playerAround.health < 1 && playerAround != player){nearDeadPlayers.push(playerAround)}});

    
    if(nearDeadPlayers.length > 0){
        player.playAnimation('amb@medic@standing@kneel@enter','enter',8,0);
        player.playAnimation('mb@medic@standing@kneel@base','base',8,0);
        player.playAnimation('amb@medic@standing@kneel@exit','exit_flee',8,0);
        nearDeadPlayers[0].spawn(nearDeadPlayers[0].position);
        nearDeadPlayers[0].health = 1;
    }
});