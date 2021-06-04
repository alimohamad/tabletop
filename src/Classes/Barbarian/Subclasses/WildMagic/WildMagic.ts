import { ResourceTrait, ScalingTrait } from "../../../../Base/Interfaces";
import { PlayerCharacter } from "../../../../Base/PlayerCharacter";
import { LevelingParams } from "../../../PlayerClass";
import * as WildMagicDict from "./WildMagic.json";

export class WildMagic {

  static getFeature(level: string, featureName: string) {
    return WildMagicDict["features"][level][featureName];
  }

  static wildMagic3(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(WildMagic.getFeature("3", "MAGIC AWARENESS"));
    pc.pcHelper.addFeatures(WildMagic.getFeature("3", "WILD SURGE"));
  }

  static wildMagic6(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(WildMagic.getFeature("6", "BOLSTERING MAGIC"));
    const bolster: ResourceTrait = {
      title: "Bolstering Magic",
      description: "The number of times you may use Bolstering Magic",
      resourceMax: pc.proficiency.baseBonus
    }
    pc.pcHelper.addResourceTraits(bolster);
  }

  static wildMagic10(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(WildMagic.getFeature("10", "UNSTABLE BACKLASH"));
  }
  
  static wildMagic14(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(WildMagic.getFeature("14", "CONTROLLED SURGE"));
  }
}