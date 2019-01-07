// IIFE - Imediate Invoked Function Expression
/*
    Closure
    Calls an anonymous self-executing function
    Anyhting in bracis is in a closure. Won't go global namespace.
*/
(function() {
    
    function Init() {
        console.log('Initialization Started!!')
    }

    window.onload = Init;
})();