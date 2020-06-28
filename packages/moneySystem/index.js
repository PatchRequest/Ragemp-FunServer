var mysql = require('mysql');


var connection = mysql.createConnection({
    host     : '[IP-Adress]',
    user     : '[USERNAME]',
    password : '[PASSWORD]',
    database : '[DB]',
    port: 3306
});
connection.connect();



function getDBMoney(player){
    setTimeout(function () {
        connection.query('SELECT * FROM player_money WHERE socialclub="'+ player.socialClub+'"', function(err, rows, fields) {
            if(err) console.log(err);
            if (rows.length < 1){

                connection.query('INSERT INTO player_money (socialclub,money) VALUES ("' + player.socialClub+ '",1000)', function(err, rows, fields) {
                    console.log("New Entry of " + player.socialClub);
                    getDBMoney(player);
                });
                

            } else {
                if(player){
                    player.setVariable('geld',rows[0].money);
                }
            }
            
            
        });
    },0)
}



mp.events.add('playerReady',(player) => {

    console.log("Connected: "+player.socialClub);
    try {
        getDBMoney(player);
    }catch (e) {
        getDBMoney(player);
    }

    

    setInterval(function(){ freeMoney()},60000)
   
    

});

mp.events.add('moneyChange',(player,amount)=>{
    moneyChange(player,amount);
})


function moneyChange(player,amount){
    
    setTimeout(function (player,amount) {
        var playerMoney = player.getVariable('geld');
        var newMoney = playerMoney +amount;

        player.setVariable('geld',newMoney)


        connection.query('UPDATE player_money SET money = ' + newMoney + ' WHERE socialclub="'+ player.socialClub+'"', function(err, rows, fields) {
            if(err) console.log(err);
        });

    },0,player,amount)
}




function freeMoney(){
    
    mp.players.forEach((player)=>{
        mp.events.call("moneyChange",player,100);
    })
    
}


