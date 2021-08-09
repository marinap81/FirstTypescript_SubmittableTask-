
export class Cookie {
 
    name: string;
    colour: Colours;
    chocolateChipNum: number = 0;
    maxChocChips: number = 5;
  
    constructor(_name: string, _colour: Colours) {
      this.name = _name;
      this.colour = _colour;
    }
  }
 