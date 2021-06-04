import { PlayerCharacter } from "../../../../Base/PlayerCharacter";
import { LevelingParams, PlayerClass } from "../../../PlayerClass";
import * as CollegeOfGlamourDict from "./CollegeOfGlamour.json";

export class CollegeOfGlamour {
    
  static getFeature(level: string, featureName: string) {
      return CollegeOfGlamourDict["features"][level][featureName];
  }

  static upMantle(pc: PlayerCharacter) {
    pc.pcHelper.findFeatureTraitByName("Mantle of Inspiration").scaling.bonus += 3;
  }
  
  static glamour3(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(CollegeOfGlamour.getFeature("3", "MANTLE OF INSPIRATION"), CollegeOfGlamour.getFeature("3", "ENTHRALLING PERFORMANCE"));
    pc.pcHelper.addEffectsToFeature("Mantle of Inspiration", {scaling: {bonus: 5}});
  }

  static glamour6(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(CollegeOfGlamour.getFeature("6", "MANTLE OF MAJESTY"));
    pc.pcHelper.addSpells(["COMMAND"], "charisma");
  }

  static glamour14(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(CollegeOfGlamour.getFeature("14", "UNBREAKABLE MAJESTY"));
  }  
}