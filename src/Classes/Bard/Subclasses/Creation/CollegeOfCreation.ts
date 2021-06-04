import { PlayerCharacter } from "../../../../Base/PlayerCharacter";
import { LevelingParams } from "../../../PlayerClass";
import * as CollegeOfCreationDict from "./CollegeOfCreation.json";
import { ResourceTrait, ScalingTrait, Trait } from "../../../../Base/Interfaces";

export class CollegeOfCreation {
    
  static getFeature(level: string, featureName: string) {
      return CollegeOfCreationDict["features"][level][featureName];
  }

  static creation3(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(CollegeOfCreation.getFeature("3", "MOTE OF POTENTIAL"));
    pc.pcHelper.addFeatures(CollegeOfCreation.getFeature("3", "PERFORMANCE OF CREATION"));
    const create: ResourceTrait = {
      title: "Performance of Creation",
      description: "Number of hours Performance of Creation lasts",
      resourceMax: pc.proficiency.baseBonus
    }
    pc.pcHelper.addResourceTraits(create);
  }

  static creation6(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(CollegeOfCreation.getFeature("6", "ANIMATING PERFORMANCE"));
  }

  static creation14(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(CollegeOfCreation.getFeature("14", "CREATIVE CRESCENDO"));
    const crescendo: ResourceTrait = {
      title: "Creative Crescendo",
      description: "The number of items you may create at once with Creative Crescendo",
      resourceMax: (pc.abilityScores.charisma.modifier.value >=2) ? pc.abilityScores.charisma.modifier : {value: 2}
    }
    pc.pcHelper.addResourceTraits(crescendo);
  }  
}