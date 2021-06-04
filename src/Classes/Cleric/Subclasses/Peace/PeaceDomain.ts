import { ResourceTrait, ScalingTrait } from "../../../../Base/Interfaces";
import { PlayerCharacter } from "../../../../Base/PlayerCharacter";
import { LevelingParams } from "../../../PlayerClass";
import * as PeaceDomainDict from "./Peace.json";


export class PeaceDomain {

  static getFeature(level: string, featureName: string) {
      return PeaceDomainDict["features"][level][featureName];
  }
  
  static getSpells(pc: PlayerCharacter, level: string){
    pc.pcHelper.addSpells(PeaceDomain.spells[level],"wisdom");
  }

  static peace1(pc: PlayerCharacter, params: LevelingParams) {
    PeaceDomain.getSpells(pc,"1");
    pc.skills[params.subclassParams.skillProficiencies[0]].proficient = true;
    pc.pcHelper.addFeatures(
      PeaceDomain.getFeature("1", "IMPLEMENT OF PEACE"),
      PeaceDomain.getFeature("1", "EMBOLDENING BOND")
    );
    const bond: ResourceTrait = {
      title: "Emboldening Bond",
      description: "The number of creatures that may bonded with Emboldening Bond",
      resourceMax: pc.proficiency.baseBonus
    }
    pc.pcHelper.addResourceTraits(bond);
  }
  
  static peace2(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(
        PeaceDomain.getFeature("2", "BALM OF PEACE")
    );
    const peace:ScalingTrait = {
      title: "Balm of Peace",
      description: "Restored hit points with Balm of Peace",
      dice: "2d6",
      bonus: (pc.abilityScores.wisdom.modifier.value>=1) ? pc.abilityScores.wisdom.modifier.value : 1
    }
    pc.pcHelper.addScalingTraits(peace);
  }

  static peace3(pc: PlayerCharacter, params: LevelingParams) {
    PeaceDomain.getSpells(pc,"3");
  }

  static peace5(pc: PlayerCharacter, params: LevelingParams) {
    PeaceDomain.getSpells(pc,"5");
  }

  static peace6(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(PeaceDomain.getFeature("6", "PROTECTIVE BOND"));
  }

  static peace7(pc: PlayerCharacter, params: LevelingParams) {
    PeaceDomain.getSpells(pc,"7");
  }

  static peace8(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(
      PeaceDomain.getFeature("8", "POTENT SPELLCASTING")
  );
  }

  static peace9(pc: PlayerCharacter, params: LevelingParams) {
    PeaceDomain.getSpells(pc,"9");
  }

  static peace17(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(PeaceDomain.getFeature("17", "EXPANSIVE BOND"));
  }

  static spells = {
    1: ["HEROISM","SANCTUARY"],
    3: ["AID", "WARDING BOND"],
    5: ["BEACON OF HOPE", "SENDING"],
    7: ["AURA OF PURITY","OTILUKE'S RESILIENT SPHERE"],
    9: ["GREATER RESTORATION", "RARY'S TELEPATHIC BOND"]
  }
}