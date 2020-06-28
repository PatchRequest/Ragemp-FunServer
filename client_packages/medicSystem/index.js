var bindVirtualKeys = {
    F4: 0x73
};


mp.keys.bind(bindVirtualKeys.F4,true,function(){

    mp.events.callRemote("revive");

});


