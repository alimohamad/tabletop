import { PlayerCharacter } from "../../../../Base/PlayerCharacter";
import { LevelingParams } from "../../../../Classes/PlayerClass";
import * as MercyDict from "./Mercy.json"
import { ResourceTrait } from "../../../../Base/Interfaces";


export class Mercy {
    
  static getFeature(level: string, featureName: string) {
      return MercyDict["features"][level][featureName];
  }
  
  static mercy3(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(Mercy.getFeature("3", "IMPLEMENTS OF MERCY"));
    pc.skills["insight"].proficient = true;
    pc.skills["medicine"].proficient = true;
    pc.traits.toolProficiencies.add("HERBALISM KIT");
    pc.pcHelper.addFeatures(Mercy.getFeature("3", "HAND OF HEALING"));
    pc.pcHelper.addFeatures(Mercy.getFeature("3", "HAND OF HARM"));
    const hand: ResourceTrait = {
      title: "Hand of Healing/Harm",
      description: "The bonus to your Martial Art dice when using Hand of Healing/Harm",
      resourceMax: pc.abilityScores.wisdom.modifier
    }
    pc.pcHelper.addResourceTraits(hand);
  }

  static mercy6(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(Mercy.getFeature("6", "PHYSICIAN'S TOUCH"));
  }

  static mercy11(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(Mercy.getFeature("11", "FLURRY OF HEALING AND HARM"));
  }

  static mercy17(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(Mercy.getFeature("17", "HAND OF ULTIMATE MERCY"));
    const mercy: ResourceTrait = {
      title: "Hand of Ultimate Mercy",
      description: "The hit points recovered when using Hand of Ultimate Mercy",
      dice: "4d10",
      resourceMax: pc.abilityScores.wisdom.modifier
    }
    pc.pcHelper.addResourceTraits(mercy);
  }
}