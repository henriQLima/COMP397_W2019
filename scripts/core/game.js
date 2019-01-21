// IIFE - Imediate Invoked Function Expression
/*
    Closure
    Calls an anonymous self-executing function
    Anyhting in braces is in a closure. Won't go global namespace.
*/
(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    //let helloLabel:createjs.Text; //gets from createjs
    var helloLabel; // gets from custom label.ts
    function Init() {
        console.log('Initialization Started!!');
        Start();
    }
    function Start() {
        console.log("Starting Application...");
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        helloLabel.rotation += 1;
        stage.update();
    }
    function Main() {
        console.log("Game Started...");
        helloLabel = new objects.Label("Hello World!", "40px", "Consolas", "#000000", 320, 240, true);
        // helloLabel = new createjs.Text("Hello World", "40px Consolate", "#000000");
        // helloLabel.x = 100;
        // helloLabel.y = 100;
        // helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        // helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        stage.addChild(helloLabel);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map