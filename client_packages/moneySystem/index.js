var aktuellesGeld;

// Geld immer aktuell halten und in Variable speichern
mp.events.addDataHandler('geld',(ding,neu,alt)=>{
    if(mp.players.local.remoteId == ding.remoteId && neu !== alt){
        aktuellesGeld = neu;
    }
});

// Geld anzeige darstellen
mp.events.add('render',()=>{
    mp.game.graphics.drawText('$' + aktuellesGeld, [0.90,0.05],{
        font:6,
        color:[125,255,125,125],
        scale:[0.75,0.75],
        outline:true
    })

});
