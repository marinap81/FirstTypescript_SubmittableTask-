

export class SprinkleCookie extends Cookie
 {
  sprinkleColour: string;
  constructor(_name: string, _colour: Colours, _sprinkleColour: string) {
    super(_name, _colour);
    this.sprinkleColour = _sprinkleColour;
  }
}