mp.events.addCommand("help",(player)=>{

    player.outputChatBox("Commands:");
    player.outputChatBox("<b style='color: red'>F3(Taste)</b>: <b style='color:darkorange'>Vehicle Spawn Menü</b>");
    player.outputChatBox("<b style='color: red'>F4(Taste)</b>: <b style='color:darkorange'>Anderen Spieler wiederbeleben</b>");
    player.outputChatBox("<b style='color: red'>F8(Taste)</b>: <b style='color:darkorange'>Fahrzeug Tunen</b>");
    player.outputChatBox("<b style='color: red'>F9(Taste)</b>: <b style='color:darkorange'>Fahrzeug reparieren</b>");
    player.outputChatBox("<b style='color: red'>/heal</b>: <b style='color:darkorange'>Spieler wird auf 100 HP geheilt</b>");
    player.outputChatBox("<b style='color: red'>/whereami</b>: <b style='color:darkorange'>Spieler bekommt seine Koordinaten</b>");
    player.outputChatBox("<b style='color: red'>/tp farm|verarbeitung|verkauf</b>: <b style='color:darkorange'>Spieler wird an Ort teleportiert</b>");

});


mp.events.addCommand("heal",(player) =>{
    player.health = 100;
    player.outputChatBox("Du wurdest geheilt!")
    
});


mp.events.addCommand("whereami",(player)=>{
    player.outputChatBox("x:" + player.position.x + "y:" + player.position.y + "z:" + player.position.z);
});


mp.events.addCommand('tp',(player,target)=>{

    if(target == "farm"){
        player.position = new mp.Vector3(-293.3190,2220.531,131.33789);
    } else if(target == "verarbeitung"){
        player.position = new mp.Vector3(-1590.8591,5192.8525,4.31008);
    } else  if(target == "verkauf"){
        player.position = new mp.Vector3(-457.9876,2858.5671,34.9499);
    } else {
        player.position = new mp.Vector3(0,0,0);
    }

});


mp.events.addCommand('waffen', (player) => {
    
      player.giveWeapon([3220176749,0x13532244,0xB62D1F67,0xA284510B,0x3813FC08], 1000); 
    
});
