// IIFE - Imediate Invoked Function Expression
/*
    Closure
    Calls an anonymous self-executing function
    Anyhting in braces is in a closure. Won't go global namespace.
*/
(function () {
    function Init() {
        console.log('Initialization Started!!');
        var x = 10;
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map