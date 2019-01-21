module objects { //module = namespace
    export class Label extends createjs.Text{ // export = public
        // Variables
        // Constructor
        constructor(
            labelString:string, 
            fontSize:string, 
            fontFamily:string, 
            fontColor:string,
            x:number = 0,
            y:number = 0,
            isCentered: boolean = false) {

            super(labelString, fontSize + " " + fontFamily, fontColor); // This creates a default 

            if(isCentered){
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }

            this.x = x;
            this.y = y;

        }
        // Methods / Functions
    }
}