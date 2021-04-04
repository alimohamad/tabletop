import { Subclass, SubclassParams } from "../../Subclass";
import { OpenHand } from "./OpenHand/OpenHand";
import { Shadow } from "./Shadow/Shadow";
import { FourElements } from "./FourElements/FourElements";
import { DrunkenMaster} from "./DrunkenMaster/DrunkenMaster";
import { Kensei} from "./Kensei/Kensei";
import { SunSoul } from "./SunSoul/SunSoul";
import { AstralSelf } from "./AstralSelf/AstralSelf";

export class MonkSubclass extends Subclass {
  constructor(subclassSelection: SubclassParams){
    super(subclassSelection);
  }
  
  subclassDictionary = {
    "OPEN HAND": {
      "3": OpenHand.openHand3,
      "6": OpenHand.openHand6,
      "11": OpenHand.openHand11,
      "17": OpenHand.openHand17
    },
    SHADOW: {
      "3": Shadow.shadow3,
      "6": Shadow.shadow6,
      "11": Shadow.shadow11,
      "17": Shadow.shadow17
    },
    KENSEI : {
      "3": Kensei.kensei3,
      "6": Kensei.kensei6,
      "11": Kensei.kensei11,
      "17": Kensei.kensei17
    },
    "FOUR ELEMENTS": {
      "3": FourElements.fourElements3,
      "5": FourElements.fourElements5,
      "6": FourElements.fourElements6,
      "9": FourElements.fourElements9,
      "11": FourElements.fourElements11,
      "13": FourElements.fourElements13,
      "17": FourElements.fourElements17
    },
    "DRUNKEN MASTER": {
      "3": DrunkenMaster.drunkenMaster3,
      "6": DrunkenMaster.drunkenMaster6,
      "11": DrunkenMaster.drunkenMaster11,
      "17": DrunkenMaster.drunkenMaster17
    },
    "SUN SOUL": {
      "3": SunSoul.sunSoul3,
      "6": SunSoul.sunSoul6,
      "11": SunSoul.sunSoul11,
      "17": SunSoul.sunSoul17
    },
    "ASTRAL SELF": {
      "3": AstralSelf.astralSelf3,
      "6": AstralSelf.astralSelf6,
      "11": AstralSelf.astralSelf11,
      "17": AstralSelf.astralSelf17
    }
  }
}

export interface MonkSubclassParams {
  disciplineSelections?: {
    add: string[];
    remove?: string;
  };
}