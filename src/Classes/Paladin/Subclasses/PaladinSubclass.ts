import { Subclass, SubclassParams } from "../../Subclass";
import { Ancients } from "./Ancients/Ancients";
import { Devotion } from "./Devotion/Devotion";
import { Vengeance } from "./Vengeance/Vengeance";
import { Conquest } from "./Conquest/Conquest";
import { Redemption } from "./Redemption/Redemption";
import { Glory } from "./Glory/Glory";
export class PaladinSubclass extends Subclass {

  constructor(subclassSelection: SubclassParams){
    super(subclassSelection);
  }

  subclassDictionary = {
    DEVOTION: {
      "3": Devotion.devotion3,
      "5": Devotion.devotion5,
      "7": Devotion.devotion7,
      "9": Devotion.devotion9,
      "13": Devotion.devotion13,
      "15": Devotion.devotion15,
      "17": Devotion.devotion17,
      "20": Devotion.devotion20,
    },
    REDEMPTION: {
      "3": Redemption.redemption3,
      "5": Redemption.redemption5,
      "7": Redemption.redemption7,
      "9": Redemption.redemption9,
      "13": Redemption.redemption13,
      "15": Redemption.redemption15,
      "16": Redemption.upSpirit,
      "17": Redemption.redemption17,
      "18": Redemption.upSpirit,
      "20": Redemption.redemption20
    },
    ANCIENTS: {
      "3": Ancients.ancients3,
      "5": Ancients.ancients5,
      "7": Ancients.ancients7,
      "9": Ancients.ancients9,
      "13": Ancients.ancients13,
      "15": Ancients.ancients15,
      "17": Ancients.ancients17,
      "20": Ancients.ancients20,
    },
    VENGEANCE: {
      "3": Vengeance.vengeance3,
      "5": Vengeance.vengeance5,
      "7": Vengeance.vengeance7,
      "9": Vengeance.vengeance9,
      "13": Vengeance.vengeance13,
      "15": Vengeance.vengeance15,
      "17": Vengeance.vengeance17,
      "20": Vengeance.vengeance20,
    },
    CONQUEST: {
      "3": Conquest.conquest3,
      "5": Conquest.conquest5,
      "7": Conquest.conquest7,
      "8": Conquest.improveAura,
      "9": Conquest.conquest9,
      "10": Conquest.improveAura,
      "12": Conquest.improveAura,
      "13": Conquest.conquest13,
      "14": Conquest.improveAura,
      "15": Conquest.conquest15,
      "16": Conquest.improveAura,
      "17": Conquest.conquest17,
      "18": Conquest.improveAura,
      "20": Conquest.conquest20,
    },
    GLORY: {
      "3": Glory.glory3,
      "4": Glory.upSmite,
      "5": Glory.glory5,
      "6": Glory.upSmite,
      "7": Glory.glory7,
      "8": Glory.upSmite,
      "9": Glory.glory9,
      "10": Glory.upSmite,
      "11": Glory.upSmite,
      "12": Glory.upSmite,
      "13": Glory.glory13,
      "14": Glory.upSmite,
      "15": Glory.glory15,
      "16": Glory.upSmite,
      "17": Glory.glory17,
      "18": Glory.upSmite,
      "19": Glory.upSmite,
      "20": Glory.glory20,
    }
  };
}