import { PlayerCharacter } from "../../../../Base/PlayerCharacter";
import { LevelingParams } from "../../../PlayerClass";
import * as CollegeOfEloquenceDict from "./CollegeOfEloquence.json";
import { ResourceTrait, ScalingTrait, Trait } from "../../../../Base/Interfaces";

export class CollegeOfEloquence {
    
  static getFeature(level: string, featureName: string) {
      return CollegeOfEloquenceDict["features"][level][featureName];
  }

  static eloquence3(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(CollegeOfEloquence.getFeature("3", "SILVER TONGUE"));
    pc.pcHelper.addFeatures(CollegeOfEloquence.getFeature("3", "UNSETTLING WORDS"));
  }

  static eloquence6(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(CollegeOfEloquence.getFeature("6", "UNIVERSAL SPEECH"));
    pc.pcHelper.addFeatures(CollegeOfEloquence.getFeature("6", "UNFAILING INSPIRATION"));
    const speech: ResourceTrait = {
      title: "Universal Speech",
      description: "The max number of creatures that can magically understand you for 1 hour",
      resourceMax: (pc.abilityScores.charisma.modifier.value >=1) ? pc.abilityScores.charisma.modifier : {value: 1}
    }
    pc.pcHelper.addResourceTraits(speech);
  }

  static eloquence14(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(CollegeOfEloquence.getFeature("14", "INFECTIOUS INSPIRATION"));
    const infect: ResourceTrait = {
      title: "Infectious Inspiration",
      description: "The number of times you may use Infectious Inspiration",
      resourceMax: (pc.abilityScores.charisma.modifier.value >=1 ) ? pc.abilityScores.charisma.modifier : {value: 1}
    }
    pc.pcHelper.addResourceTraits(infect);
  }  
}