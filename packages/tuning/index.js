mp.events.add("carChange",(player,slot,mod)=>{
    var slot = slot.replace(/\D/g, "");
    player.vehicle.setMod(parseInt(slot), parseInt(mod));
})