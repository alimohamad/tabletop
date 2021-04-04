import { PlayerCharacter } from "../../../../Base/PlayerCharacter";
import { LevelingParams, PlayerClass } from "../../../../Classes/PlayerClass";
import * as RuneKnightArchetype from "./RuneKnight.json"
import * as Languages from "../../../../../Assets/Languages.json";
import { ResourceTrait, ScalingTrait } from "../../../../Base/Interfaces";

export class RuneKnight {

  static getFeature(level: string, featureName: string) {
    return RuneKnightArchetype["features"][level][featureName];
  }

  static runeKnight3(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(RuneKnight.getFeature("3", "BONUS PROFICIENCIES"));
    pc.traits.toolProficiencies.add("SMITH'S TOOLS");
    pc.traits.languages.push(Languages["GIANT"]);
    pc.pcHelper.addFeatures(RuneKnight.getFeature("3", "RUNE CARVER"));
    pc.pcHelper.addFeatures(RuneKnight.getFeature("3", "GIANT'S MIGHT"));
    const might: ResourceTrait = {
      title: "Giant's Might",
      description: "The number of times you may use Giant's Might",
      resourceMax: pc.proficiency.baseBonus
    }
    const giant: ScalingTrait = {
      title: "Giant's Might",
      description: "The extra damage you get with Giant's Might",
      dice: "1d6"
    }
    pc.pcHelper.addScalingTraits(giant);
    pc.pcHelper.addResourceTraits(might);
  }
  
  static runeKnight7(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(RuneKnight.getFeature("7","RUNIC SHIELD"));
    const shield: ResourceTrait = {
      title: "Runic Shield",
      description: "The number of times you may use Runic Shield",
      resourceMax: pc.proficiency.baseBonus
    }
    pc.pcHelper.addResourceTraits(shield);
  }
  
  static runeKnight10(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(RuneKnight.getFeature("10", "GREAT STATURE"));
    const giant: ScalingTrait = pc.pcHelper.findScalingTraitByName("GIANT'S MIGHT");
    giant.dice = "1d8";
  }

  static runeKnight15(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(RuneKnight.getFeature("15", "MASTER OF RUNES"));
  }

  static runeKnight18(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(RuneKnight.getFeature("18", "RUNIC JUGGERNAUT"));
    const giant: ScalingTrait = pc.pcHelper.findScalingTraitByName("GIANT'S MIGHT");
    giant.dice = "1d10";
  }
}