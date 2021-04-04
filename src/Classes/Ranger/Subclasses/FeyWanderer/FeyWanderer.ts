import { ResourceTrait, ScalingTrait } from "../../../../Base/Interfaces";
import { PlayerCharacter } from "../../../../Base/PlayerCharacter";
import { LevelingParams } from "../../../../Classes/PlayerClass";
import * as FeyWandererArchetypeDict from "./FeyWanderer.json"

export class FeyWanderer {

  static getFeature(level: string, featureName: string) {
    return FeyWandererArchetypeDict["features"][level][featureName];
  }

  static getSpell(pc: PlayerCharacter,level:string) {
    pc.pcHelper.addSpells(FeyWanderer.spells[level],"wisdom");
  }

  static feyWanderer3(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(FeyWanderer.getFeature("3", "DREADFUL STRIKES"));
    const strikes: ScalingTrait = {
      title: "Dreadful Strikes",
      description: "The extra damage you deal with Dreadful Strikes",
      dice: "1d4",
    }
    pc.pcHelper.addScalingTraits(strikes);
    pc.pcHelper.addFeatures(FeyWanderer.getFeature("3", "FEY WANDERER MAGIC"));
    pc.pcHelper.addFeatures(FeyWanderer.getFeature("3", "OTHERWORLDLY GLAMOUR"));
    const glamour: ResourceTrait = {
      title:"Otherworldly Glamour",
      description: "The bonus to Charisma checks from Otherworldly Glamour",
      resourceMax: (pc.abilityScores.wisdom.modifier.value>=1) ? pc.abilityScores.wisdom.modifier : {value: 1}
    }
    pc.pcHelper.addResourceTraits(glamour);
    FeyWanderer.getSpell(pc,"3");
  }

  static feyWanderer5(pc: PlayerCharacter, params: LevelingParams) {
    FeyWanderer.getSpell(pc,"5");
  }

  static feyWanderer7(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(FeyWanderer.getFeature("7", "BEGUILING TWIST"));
  }

  static feyWanderer9(pc: PlayerCharacter, params: LevelingParams) {
    FeyWanderer.getSpell(pc,"9");
  }

  static feyWanderer11(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(FeyWanderer.getFeature("11", "FEY REINFORCEMENTS"));
    // Until Summon Fey is added to spell list
    // pc.pcHelper.addSpells(["SUMMON FEY"],"wisdom");
  }

  static feyWanderer13(pc: PlayerCharacter, params: LevelingParams) {
    FeyWanderer.getSpell(pc,"13");
  }

  static feyWanderer15(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(FeyWanderer.getFeature("15", "MISTY WANDERER"));
    const wanderer: ResourceTrait = {
      title: "Misty Wanderer",
      description: "The number of times you may use Misty Wanderer",
      resourceMax: (pc.abilityScores.wisdom.modifier.value>=1) ? pc.abilityScores.wisdom.modifier : {value: 1}
    }
    pc.pcHelper.addResourceTraits(wanderer);
  }

  static feyWanderer17(pc: PlayerCharacter, params: LevelingParams) {
    FeyWanderer.getSpell(pc,"17");
  }

  static spells = {
    "3": ["CHARM PERSON"],
    "5": ["MISTY STEP"],
    "9": ["DISPEL MAGIC"],
    "13": ["DIMENSION DOOR"],
    "17": ["MISLEAD"]
  }
}