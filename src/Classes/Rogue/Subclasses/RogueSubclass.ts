import { Subclass } from "../../Subclass";
import { ArcaneTrickster } from "./ArcaneTrickster/ArcaneTrickster";
import { Assassin } from "./Assassin/Assassin";
import { Thief } from "./Thief/Thief";

export class RogueSubclass extends Subclass {
  
  constructor(subclass: string){
    super(subclass);
  }

  subclassDictionary = {
    THIEF: {
      "3": Thief.thief3,
      "9": Thief.thief9,
      "13": Thief.thief13,
      "17": Thief.thief17,
    },
    ASSASSIN: {
      "3": Assassin.assassin3,
      "9": Assassin.assassin9,
      "13": Assassin.assassin13,
      "17": Assassin.assassin17,
    },
    "ARCANE TRICKSTER": {
      "3": ArcaneTrickster.arcaneTrickster3,
      "9": ArcaneTrickster.arcaneTrickster9,
      "13": ArcaneTrickster.arcaneTrickster13,
      "17": ArcaneTrickster.arcaneTrickster17,
    }
  };
}