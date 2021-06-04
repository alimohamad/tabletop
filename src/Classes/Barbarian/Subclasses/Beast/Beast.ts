import { ResourceTrait, ScalingTrait } from "../../../../Base/Interfaces";
import { PlayerCharacter } from "../../../../Base/PlayerCharacter";
import { LevelingParams } from "../../../PlayerClass";
import * as BeastDict from "./Beast.json";

export class Beast {

  static getFeature(level: string, featureName: string) {
      return BeastDict["features"][level][featureName];
  }

  static beast3(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(Beast.getFeature("3", "FORM OF THE BEAST"));
  }

  static beast6(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(Beast.getFeature("6", "BESTIAL SOUL"));
  }

  static beast10(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(Beast.getFeature("10", "INFECTIOUS FURY"));
  }
  
  static beast14(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(Beast.getFeature("14", "CALL THE HUNT"));
    const hunt: ResourceTrait = {
      title: "Call the Hunt",
      description: "The number of willing creatures you can target, bonus damage dice, and uses for Call the Hunt",
      dice: "d6",
      bonus: pc.abilityScores.constitution.modifier.value,
      resourceMax: pc.proficiency.baseBonus
    }
    pc.pcHelper.addResourceTraits(hunt);
  }
}