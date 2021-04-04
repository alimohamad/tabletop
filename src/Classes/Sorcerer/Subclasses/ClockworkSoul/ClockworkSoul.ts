import { ResourceTrait } from "../../../../Base/Interfaces";
import { PlayerCharacter } from "../../../../Base/PlayerCharacter";
import { LevelingParams } from "../../../../Classes/PlayerClass";
import * as ClockworkSoulArchetypeDict from "./ClockworkSoul.json"


export class ClockworkSoul {

  static getFeature(level: string, featureName: string) {
    return ClockworkSoulArchetypeDict["features"][level][featureName];
  }

  static clockworkSoul1(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(ClockworkSoul.getFeature("1", "CLOCKWORK MAGIC"), ClockworkSoul.getFeature("1", "RESTORE BALANCE"))
    const balance: ResourceTrait = {
      title: "Restore Balance",
      description: "The number of times you may use Restore Balance",
      resourceMax: pc.proficiency.baseBonus
    }
    pc.pcHelper.addResourceTraits(balance);
  }

  static clockworkSoul6(pc: PlayerCharacter, params: LevelingParams) {      
    pc.pcHelper.addFeatures(ClockworkSoul.getFeature("6", "BASTION OF LAW"));
    const law: ResourceTrait = {
      title: "Bastion of Law",
      description: "The max number of sorcery points you may use for Bastion of Law",
      dice: "d8",
      resourceMax: {value: 5}
    }
    pc.pcHelper.addResourceTraits(law);
  }

  static clockworkSoul14(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(ClockworkSoul.getFeature("14", "TRANCE OF ORDER"));
  }

  static clockworkSoul18(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(ClockworkSoul.getFeature("17", "CLOCKWORK CAVALCADE"));
  }

  static spells = {
    1: ["ALARM","PROTECTION FROM EVIL AND GOOD"],
    3: ["AID", "LESSER RESTORATION"],
    5: ["DISPEL MAGIC", "PROTECTION FROM ENERGY"],
    7: ["FREEDOM OF MOVEMENT","SUMMON CONSTRUCT"],
    9: ["GREATER RESTORATION", "WALL OF FORCE"]
  }
}