// IIFE - Imediate Invoked Function Expression
/*
    Closure
    Calls an anonymous self-executing function
    Anyhting in braces is in a closure. Won't go global namespace.
*/
(function() {
    
    function Init():void {
        console.log('Initialization Started!!')

        Start();
    }

    function Start(){

    }

    function Update(){

    }

    function Main(){

    }

    window.onload = Init;
})();