import { ResourceTrait, ScalingTrait } from "../../../../Base/Interfaces";
import { PlayerCharacter } from "../../../../Base/PlayerCharacter";
import { LevelingParams } from "../../../PlayerClass";
import * as OrderDomainDict from "./Order.json";


export class OrderDomain {

  static getFeature(level: string, featureName: string) {
    return OrderDomainDict["features"][level][featureName];
  }
  
  static getSpells(pc: PlayerCharacter, level: string){
    pc.pcHelper.addSpells(OrderDomain.spells[level],"wisdom");
  }

  static order1(pc: PlayerCharacter, params: LevelingParams) {
    OrderDomain.getSpells(pc,"1");
    pc.skills[params.subclassParams.skillProficiencies[0]].proficient = true;
    pc.pcHelper.addFeatures(OrderDomain.getFeature("1", "VOICE OF AUTHORITY"),OrderDomain.getFeature("1", "BONUS PROFICIENCIES"));
  }
  
  static order2(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(OrderDomain.getFeature("2", "ORDER'S DEMAND"));
  }

  static order3(pc: PlayerCharacter, params: LevelingParams) {
    OrderDomain.getSpells(pc,"3");
  }

  static order5(pc: PlayerCharacter, params: LevelingParams) {
    OrderDomain.getSpells(pc,"5");
  }

  static order6(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(OrderDomain.getFeature("6", "EMBODIMENT OF THE LAW"));
    const law: ResourceTrait = {
      title: "Embodiment of the Law",
      description: "The number of times you may use Embodiment of the Law",
      resourceMax: (pc.abilityScores.wisdom.modifier.value >=1) ? pc.abilityScores.wisdom.modifier : {value: 1}
    }
    pc.pcHelper.addResourceTraits(law);
  }

  static order7(pc: PlayerCharacter, params: LevelingParams) {
    OrderDomain.getSpells(pc,"7");
  }

  static order8(pc: PlayerCharacter, params: LevelingParams) {
    const divineStrike: ScalingTrait = {
      title: "Divine Strike",
      description: "Dice used for Divine Strike (psychic damage).",
      dice: "1d8",
    };
    pc.pcHelper.addScalingTraits(divineStrike);
    pc.pcHelper.addFeatures(OrderDomain.getFeature("8", "DIVINE STRIKE"));
  }

  static order9(pc: PlayerCharacter, params: LevelingParams) {
    OrderDomain.getSpells(pc,"9");
  }

  static order14(pc:PlayerCharacter,params:LevelingParams) {
    const divineStrike: ScalingTrait = pc.pcHelper.findScalingTraitByName("Divine Strike");
    divineStrike.dice = "2d8";
  }

  static order17(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(OrderDomain.getFeature("17", "ORDER'S WRATH"));
  }

  static spells = {
    1: ["COMMAND","HEROISM"],
    3: ["HOLD PERSON", "ZONE OF TRUTH"],
    5: ["MASS HEALING WORD", "SLOW"],
    7: ["COMPULSION","LOCATE CREATURE"],
    9: ["COMMUNE", "DOMINATE PERSON"]
  }
}