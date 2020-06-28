const NativeUI = require("nativeui");
const Menu = NativeUI.Menu;
const UIMenuItem = NativeUI.UIMenuItem;
const UIMenuListItem = NativeUI.UIMenuListItem;
const UIMenuCheckboxItem = NativeUI.UIMenuCheckboxItem;
const UIMenuSliderItem = NativeUI.UIMenuSliderItem;
const BadgeStyle = NativeUI.BadgeStyle;
const Point = NativeUI.Point;
const ItemsCollection = NativeUI.ItemsCollection;
const Color = NativeUI.Color;
const ListItem = NativeUI.ListItem;

var bindVirtualKeys = {
    F8: 0x77,
    F9: 0x78
};



function generateRange(max){
    let arr = [];
    for(let i = -1; i <= max - 2; i += 1){
       arr.push(""+i);
    }
    
    return arr;
}


var active = false;


var menu = null;

mp.keys.bind(bindVirtualKeys.F8, false, () => {
    
    

    if (active) 
    {
        menu.Close();
    }
	else{
        if(mp.players.local.vehicle){
            
        let veh = mp.players.local.vehicle;
        const ui = new Menu("Tuning Menü", "Gestalte dein Fahrzeug!", new Point(50, 50));

        if(veh.getNumMods(0) != 0 && veh.getNumMods(0) != 1){
            ui.AddItem(new UIMenuListItem(
                "Spoiler",
                "Slot 0",
                new ItemsCollection(generateRange(veh.getNumMods(0))),
                veh.getMod(0) + 1 
            ));
        }

        if(veh.getNumMods(1) != 0 && veh.getNumMods(1) != 1){
            ui.AddItem(new UIMenuListItem(
                "Front Bumper",
                "Slot 1",
                new ItemsCollection(generateRange(veh.getNumMods(1)))
                ,veh.getMod(1) + 1 
            ));
        }

        if(veh.getNumMods(2) != 0 && veh.getNumMods(2) != 1){
            ui.AddItem(new UIMenuListItem(
                "Rear Bumper",
                "Slot 2",
                new ItemsCollection(generateRange(veh.getNumMods(2)))
                ,veh.getMod(2) + 1
            ));
        }

        if(veh.getNumMods(3) != 0 && veh.getNumMods(3) != 1){
            ui.AddItem(new UIMenuListItem(
                "Side Skirt",
                "Slot 3",
                new ItemsCollection(generateRange(veh.getNumMods(3)))
                ,veh.getMod(3) + 1
            ));
        }

        if(veh.getNumMods(4) != 0 && veh.getNumMods(4) != 1){
            ui.AddItem(new UIMenuListItem(
                "Exhaust",
                "Slot 4",
                new ItemsCollection(generateRange(veh.getNumMods(4)))
                ,veh.getMod(4) + 1
            ));
        }

        if(veh.getNumMods(5) != 0 && veh.getNumMods(5) != 1){
            ui.AddItem(new UIMenuListItem(
                "Frame",
                "Slot 5",
                new ItemsCollection(generateRange(veh.getNumMods(5)))
                ,veh.getMod(5) + 1
            ));
        }
       
        if(veh.getNumMods(6) != 0 && veh.getNumMods(6) != 1){
            ui.AddItem(new UIMenuListItem(
                "Grille",
                "Slot 6",
                new ItemsCollection(generateRange(veh.getNumMods(6)))
                ,veh.getMod(6) + 1
            ));
        }    

        if(veh.getNumMods(7) != 0 && veh.getNumMods(7) != 1){
            ui.AddItem(new UIMenuListItem(
                "Hood",
                "Slot 7",
                new ItemsCollection(generateRange(veh.getNumMods(7)))
                ,veh.getMod(7) + 1
            ));
        }   

        if(veh.getNumMods(8) != 0 && veh.getNumMods(8) != 1){
            ui.AddItem(new UIMenuListItem(
                "Fender",
                "Slot 8",
                new ItemsCollection(generateRange(veh.getNumMods(8)))
                ,veh.getMod(8) + 1
            ));
        }   

        if(veh.getNumMods(9) != 0 && veh.getNumMods(9) != 1){
            ui.AddItem(new UIMenuListItem(
                "Right Fender",
                "Slot 9",
                new ItemsCollection(generateRange(veh.getNumMods(9)))
                ,veh.getMod(9) + 1
            ));
        }  

        if(veh.getNumMods(10) != 0 && veh.getNumMods(10) != 1){
            ui.AddItem(new UIMenuListItem(
                "Roof",
                "Slot 10",
                new ItemsCollection(generateRange(veh.getNumMods(10)))
                ,veh.getMod(10) + 1
            ));
        }  

        if(veh.getNumMods(11) != 0 && veh.getNumMods(11) != 1){
            ui.AddItem(new UIMenuListItem(
                "Engine",
                "Slot 11",
                new ItemsCollection(generateRange(veh.getNumMods(11)))
                ,veh.getMod(11) + 1
            ));
        }  

        if(veh.getNumMods(12) != 0 && veh.getNumMods(12) != 1){
            ui.AddItem(new UIMenuListItem(
                "Brakes",
                "Slot 12",
                new ItemsCollection(generateRange(veh.getNumMods(12)))
                ,veh.getMod(12) + 1
            ));
        }

        if(veh.getNumMods(13) != 0 && veh.getNumMods(13) != 1){
            ui.AddItem(new UIMenuListItem(
                "Transmission",
                "Slot 13",
                new ItemsCollection(generateRange(veh.getNumMods(13)))
                ,veh.getMod(13) + 1
            ));
        }

        if(veh.getNumMods(14 ) != 0 && veh.getNumMods(14 ) != 1){
            ui.AddItem(new UIMenuListItem(
                "Horns",
                "Slot 14 ",
                new ItemsCollection(generateRange(veh.getNumMods(14 )))
                ,veh.getMod(14) + 1
            ));
        }

        if(veh.getNumMods(15 ) != 0 && veh.getNumMods(15 ) != 1){
            ui.AddItem(new UIMenuListItem(
                "Suspension",
                "Slot 15 ",
                new ItemsCollection(generateRange(veh.getNumMods(15 )))
                ,veh.getMod(15) + 1
            ));
        }

        if(veh.getNumMods(16 ) != 0 && veh.getNumMods(16 ) != 1){
            ui.AddItem(new UIMenuListItem(
                "Armor",
                "Slot 16 ",
                new ItemsCollection(generateRange(veh.getNumMods(16 )))
                ,veh.getMod(16) + 1
            ));
        }

        if(veh.getNumMods(18 ) != 0 && veh.getNumMods(18 ) != 1){
            ui.AddItem(new UIMenuListItem(
                "Turbo",
                "Slot 18 ",
                new ItemsCollection(generateRange(veh.getNumMods(18 )))
                ,veh.getMod(18) + 1
            ));
        }

        if(veh.getNumMods(20 ) != 0 && veh.getNumMods(20 ) != 1){
            ui.AddItem(new UIMenuListItem(
                "Util Shadow Silver",
                "Slot 20 ",
                new ItemsCollection(generateRange(veh.getNumMods(20 )))
                ,veh.getMod(20) + 1
            ));
        }

        if(veh.getNumMods(22 ) != 0 && veh.getNumMods(22 ) != 1){
            ui.AddItem(new UIMenuListItem(
                "Xenon",
                "Slot 22 ",
                new ItemsCollection(generateRange(veh.getNumMods(22 )))
                ,veh.getMod(22) + 1
            ));
        }

        if(veh.getNumMods(23 ) != 0 && veh.getNumMods(23 ) != 1){
            ui.AddItem(new UIMenuListItem(
                "Front Wheels",
                "Slot 23 ",
                new ItemsCollection(generateRange(veh.getNumMods(23 )))
                ,veh.getMod(23) + 1
            ));
        }

        if(veh.getNumMods(24  ) != 0 && veh.getNumMods(24  ) != 1){
            ui.AddItem(new UIMenuListItem(
                "Back Wheels",
                "Slot 24  ",
                new ItemsCollection(generateRange(veh.getNumMods(24  )))
                ,veh.getMod(24) + 1
            ));
        }

        if(veh.getNumMods(25) != 0 && veh.getNumMods(25) != 1){
            ui.AddItem(new UIMenuListItem(
                "Plate holders",
                "Slot 25",
                new ItemsCollection(generateRange(veh.getNumMods(25)))
                ,veh.getMod(25) + 1
            ));
        }

        if(veh.getNumMods(27) != 0 && veh.getNumMods(27) != 1){
            ui.AddItem(new UIMenuListItem(
                "Trim Design",
                "Slot 27",
                new ItemsCollection(generateRange(veh.getNumMods(27)))
                ,veh.getMod(27) + 1
            ));
        }

        if(veh.getNumMods(28) != 0 && veh.getNumMods(28) != 1){
            ui.AddItem(new UIMenuListItem(
                "Ornaments",
                "Slot 28",
                new ItemsCollection(generateRange(veh.getNumMods(28)))
                ,veh.getMod(28) + 1
            ));
        }

        if(veh.getNumMods(30) != 0 && veh.getNumMods(30) != 1){
            ui.AddItem(new UIMenuListItem(
                "Dial Design",
                "Slot 30",
                new ItemsCollection(generateRange(veh.getNumMods(30)))
                ,veh.getMod(30) + 1
            ));
        }

        if(veh.getNumMods(33) != 0 && veh.getNumMods(33) != 1){
            ui.AddItem(new UIMenuListItem(
                "Steering Wheel",
                "Slot 33",
                new ItemsCollection(generateRange(veh.getNumMods(33)))
                ,veh.getMod(33) + 1
            ));
        }

        if(veh.getNumMods(34) != 0 && veh.getNumMods(34) != 1){
            ui.AddItem(new UIMenuListItem(
                "Shift Lever",
                "Slot 34",
                new ItemsCollection(generateRange(veh.getNumMods(34)))
                ,veh.getMod(34) + 1
            ));
        }

        if(veh.getNumMods(35) != 0 && veh.getNumMods(35) != 1){
            ui.AddItem(new UIMenuListItem(
                "Plaques",
                "Slot 35",
                new ItemsCollection(generateRange(veh.getNumMods(35)))
                ,veh.getMod(35) + 1
            ));
        }

        if(veh.getNumMods(38) != 0 && veh.getNumMods(38) != 1){
            ui.AddItem(new UIMenuListItem(
                "Hydraulics",
                "Slot 38",
                new ItemsCollection(generateRange(veh.getNumMods(38)))
                ,veh.getMod(38) + 1
            ));
        }

        if(veh.getNumMods(40) != 0 && veh.getNumMods(40) != 1){
            ui.AddItem(new UIMenuListItem(
                "Boost",
                "Slot 40",
                new ItemsCollection(generateRange(veh.getNumMods(40)))
                ,veh.getMod(40) + 1
            ));
        }

        if(veh.getNumMods(48) != 0 && veh.getNumMods(48) != 1){
            ui.AddItem(new UIMenuListItem(
                "Livery",
                "Slot 48",
                new ItemsCollection(generateRange(veh.getNumMods(48)))
                ,veh.getMod(48) + 1
            ));
        }

        if(veh.getNumMods(55) != 0 && veh.getNumMods(55) != 1){
            ui.AddItem(new UIMenuListItem(
                "Window Tint",
                "Slot 55",
                new ItemsCollection(generateRange(veh.getNumMods(55)))
                ,veh.getMod(55) + 1
            ));
        }

        if(veh.getNumMods(62) != 0 && veh.getNumMods(62) != 1){
            ui.AddItem(new UIMenuListItem(
                "Plate",
                "Slot 62",
                new ItemsCollection(generateRange(veh.getNumMods(62)))
                ,veh.getMod(62) + 1
            ));
        }

        if(veh.getNumMods(66 ) != 0 && veh.getNumMods(66 ) != 1){
            ui.AddItem(new UIMenuListItem(
                "Color 1",
                "Slot 66 ",
                new ItemsCollection(generateRange(veh.getNumMods(66 )))
                ,veh.getMod(66) + 1
            ));
        }

        if(veh.getNumMods(67  ) != 0 && veh.getNumMods(67  ) != 1){
            ui.AddItem(new UIMenuListItem(
                "Color 2",
                "Slot 67",
                new ItemsCollection(generateRange(veh.getNumMods(67  )))
                ,veh.getMod(67) + 1
            ));
        }

        
    
        ui.ListChange.on((item,index)=>{
            mp.events.callRemote("carChange",item.Description.toString(),item.SelectedItem.DisplayText);
        });


    ui.Open();
    menu = ui;
    }
} 

active = !active;






});



mp.events.add("playerLeaveVehicle", (vehicle, seat) => {
    menu.Close();
})


mp.keys.bind(bindVirtualKeys.F9, false, () => {

    if(mp.players.local.vehicle){
        mp.events.callRemote("repair");
    }
});