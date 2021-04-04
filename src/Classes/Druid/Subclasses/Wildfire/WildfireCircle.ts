import { ResourceTrait, ScalingTrait } from "../../../../Base/Interfaces";
import { PlayerCharacter } from "../../../../Base/PlayerCharacter";
import { LevelingParams } from "../../../../Classes/PlayerClass";
import * as WildfireCircleDict from "./Wildfire.json";


export class WildfireCircle {
    
  static getFeature(level: string, featureName: string) {
    return WildfireCircleDict["features"][level][featureName];
  }

  static getSpells(pc: PlayerCharacter, level: string){
    pc.pcHelper.addSpells(WildfireCircle.spells[level],"wisdom");
  }

  static wildfire2(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(WildfireCircle.getFeature("2", "SUMMON WILDFIRE SPIRIT"));
    const spirit: ResourceTrait = {
      title: "Summon Wildfire Spirit",
      description: "The amount of fire damage dealt when you summon your spirit",
      dice: "2d6"
    }
    pc.pcHelper.addResourceTraits(spirit);
    pc.pcHelper.addFeatures(WildfireCircle.getFeature("2", "CIRCLE SPELLS"));
    WildfireCircle.getSpells(pc,"2");
    const wildShapeScale: ScalingTrait = pc.pcHelper.findScalingTraitByName("Wild Shape");
    wildShapeScale.challengeRating = 0.25;
  }

  static wildfire3(pc: PlayerCharacter, params: LevelingParams) {
    WildfireCircle.getSpells(pc,"3");
  }

  static wildfire4(pc: PlayerCharacter, params: LevelingParams) {
    const wildShapeScale: ScalingTrait = pc.pcHelper.findScalingTraitByName("Wild Shape");
    wildShapeScale.challengeRating = 0.5;
  }

  static wildfire5(pc: PlayerCharacter, params: LevelingParams) {
    WildfireCircle.getSpells(pc,"5");
  }

  static wildfire6(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(WildfireCircle.getFeature("6", "ENHANCED BOND"));
    const bond: ResourceTrait = {
      title: "Enhanced Bond",
      description: "The bonus dice you gain when casting spells with Enhanced Bond",
      dice: "1d8"
    }
    pc.pcHelper.addResourceTraits(bond);
  }
    
  static wildfire7(pc: PlayerCharacter, params: LevelingParams) {
    WildfireCircle.getSpells(pc,"7");
  }

  static wildfire8(pc: PlayerCharacter, params: LevelingParams) {
    const wildShapeScale: ScalingTrait = pc.pcHelper.findScalingTraitByName("Wild Shape");
    wildShapeScale.challengeRating = 1;
  }

  static wildfire9(pc: PlayerCharacter, params: LevelingParams) {
    WildfireCircle.getSpells(pc,"9");
  }

  static wildfire10(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(WildfireCircle.getFeature("10", "CAUTERIZING FLAMES"));
    const flames: ScalingTrait = {
      title: "Cauterizing Flames",
      description: "The amount of healing/damage you cause with Cauterizing Flames",
      dice: "2d10", 
      bonus: pc.abilityScores.wisdom.modifier.value
    }
    const cauterizing: ResourceTrait = {
      title: "Cauterizing Flames",
      description: "The number of times you may use Cauterizing Flames",
      resourceMax: pc.proficiency.baseBonus
    }
    pc.pcHelper.addScalingTraits(flames);
    pc.pcHelper.addResourceTraits(cauterizing);
  }
    
  static wildfire14(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(WildfireCircle.getFeature("14", "BLAZING REVIVAL"));
  }

  static spells = {
    2: ["BURNING HANDS","CURE WOUNDS"],
    3: ["FLAMING SPHERE", "SCORCHING RAY"],
    5: ["PLANT GROWTH", "REVIVIFY"],
    7: ["AURA OF LIFE","FIRE SHIELD"],
    9: ["FLAME STRIKE", "MASS CURE WOUNDS"]
  } 
}