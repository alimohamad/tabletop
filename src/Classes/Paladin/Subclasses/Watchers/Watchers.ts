import { ResourceTrait, ScalingTrait } from "../../../../Base/Interfaces";
import { PlayerCharacter } from "../../../../Base/PlayerCharacter";
import { LevelingParams } from "../../../../Classes/PlayerClass";
import * as WatchersOathDict from "./OathOfWatchers.json"


export class Watchers {
  static getFeature(level: string, featureName: string) {
    return WatchersOathDict["features"][level][featureName];
  }

  static addArchetypeSpells(pc: PlayerCharacter, level: string){
    pc.pcHelper.addSpells(this.oathSpells[level], "charisma");
  }
  
  static watchers3(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(
      Watchers.getFeature("3", "WATCHER'S WILL"),
      Watchers.getFeature("3", "ABJURE THE EXTRAPLANAR")
    )
    const will: ResourceTrait = {
      title:"Watcher's Will",
      description:"The number of creatures you may choose with Watcher's Will",
      resourceMax: (pc.abilityScores.charisma.modifier.value>=1) ? pc.abilityScores.charisma.modifier : {value: 1} 
    }
    pc.pcHelper.addResourceTraits(will);
    Watchers.addArchetypeSpells(pc, "3");
  }

  static watchers5(pc: PlayerCharacter, params: LevelingParams) {
    Watchers.addArchetypeSpells(pc, "5");
  }

  static watchers7(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(Watchers.getFeature("7", "AURA OF THE SENTINEL"))
  }

  static watchers9(pc: PlayerCharacter, params: LevelingParams) {
    Watchers.addArchetypeSpells(pc, "9");
  }

  static watchers13(pc: PlayerCharacter, params: LevelingParams) {
    Watchers.addArchetypeSpells(pc, "13");
  }

  static watchers15(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(Watchers.getFeature("15", "VIGILANT REBUKE"))
    const rebuke: ScalingTrait = {
      title: "Vigilant Rebuke",
      description: "The amount of damage you do with Vigilant Rebuke",
      dice: "2d8",
      bonus: pc.abilityScores.charisma.modifier.value
    }
    pc.pcHelper.addScalingTraits(rebuke);
  }

  static watchers17(pc: PlayerCharacter, params: LevelingParams) {
    Watchers.addArchetypeSpells(pc, "17");
  }

  static watchers20(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(Watchers.getFeature("20", "MORTAL BULWARK"))
  }

  static oathSpells = {
    "3": ["ALARM", "DETECT MAGIC"],
    "5": ["MOONBEAM", "SEE INVISIBILITY"],
    "9": ["COUNTERSPELL", "NONDETECTION"],
    "13": ["AURA OF PURITY", "BANISHMENT"],
    "17": ["HOLD MONSTER", "SCRYING"]
  };
}