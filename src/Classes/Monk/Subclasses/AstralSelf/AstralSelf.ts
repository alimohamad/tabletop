import { ScalingTrait } from "../../../../Base/Interfaces";
import { PlayerCharacter } from "../../../../Base/PlayerCharacter";
import { LevelingParams } from "../../../../Classes/PlayerClass";
import * as AstralSelfDict from "./AstralSelf.json"


export class AstralSelf {
    
  static getFeature(level: string, featureName: string) {
    return AstralSelfDict["features"][level][featureName];
  }
  
  static astralSelf3(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(AstralSelf.getFeature("3", "ARMS OF THE ASTRAL SELF"));
  }

  static astralSelf6(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(AstralSelf.getFeature("6", "VISAGE OF THE ASTRAL SELF"));
  }

  static astralSelf11(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(AstralSelf.getFeature("11", "BODY OF THE ASTRAL SELF"));
    const body: ScalingTrait = {
      title: "Body of the Astral Self",
      description: "The damage you can reduce as a reaction with Body of the Astral Self",
      dice: "1d10",
      bonus: pc.abilityScores.wisdom.modifier.value
    }
    pc.pcHelper.addScalingTraits(body);
  }

  static astralSelf17(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(AstralSelf.getFeature("17", "AWAKENED ASTRAL SELF"));
  }
}