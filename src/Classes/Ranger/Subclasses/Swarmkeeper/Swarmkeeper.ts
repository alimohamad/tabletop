import { PlayerCharacter } from "../../../../Base/PlayerCharacter";
import { LevelingParams } from "../../../../Classes/PlayerClass";
import { ScalingTrait, ResourceTrait } from "../../../../Base/Interfaces";
import { RangerSubclassParams } from "../RangerSubclass";
import * as SwarmkeeperArchetypeDict from "./Swarmkeeper.json"

export class Swarmkeeper {
  static getFeature(level: string, featureName: string) {
    return SwarmkeeperArchetypeDict["features"][level][featureName];
  }
  
  static getSpell(pc: PlayerCharacter,level:string) {
    pc.pcHelper.addSpells(Swarmkeeper.spells[level],"wisdom");
  }

  static swarmkeeper3(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(Swarmkeeper.getFeature("3","GATHERED SWARM"));
    const swarm: ScalingTrait = {
      title: "Gathered Swarm",
      description: "The damage you deal with your swarm",
      dice: "1d6"
    }
    pc.pcHelper.addScalingTraits(swarm);
    pc.pcHelper.addFeatures(Swarmkeeper.getFeature("3","SWARMKEEPER MAGIC"));
    pc.pcHelper.addSpells(["MAGE HAND"],"wisdom");
    Swarmkeeper.getSpell(pc,"3");
  }
  
  static swarmkeeper5(pc: PlayerCharacter, params: LevelingParams) {
    Swarmkeeper.getSpell(pc,"5");
  }

  static swarmkeeper7(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(Swarmkeeper.getFeature("7","WRITHING TIDE"));
    const tide: ResourceTrait = {
      title: "Writhing Tide",
      description: "The number of times you may use Writhing Tide",
      resourceMax: pc.proficiency.baseBonus
    }
    pc.pcHelper.addResourceTraits(tide);
  }
  
  static swarmkeeper9(pc: PlayerCharacter, params: LevelingParams) {
    Swarmkeeper.getSpell(pc,"9");
  }

  static swarmkeeper11(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(Swarmkeeper.getFeature("11","MIGHTY SWARM"));
    const swarm: ScalingTrait = pc.pcHelper.findScalingTraitByName("GATHERED SWARM");
    swarm.dice = "1d8";
  }

  static swarmkeeper13(pc: PlayerCharacter, params: LevelingParams) {
    Swarmkeeper.getSpell(pc,"13");
  }

  static swarmkeeper15(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(Swarmkeeper.getFeature("15","SWARMING DISPERSAL"));
    const dispersal: ResourceTrait = {
      title: "Swarming Dispersal",
      description: "The number of times you may use Swarming Dispersal",
      resourceMax: pc.proficiency.baseBonus
    }
    pc.pcHelper.addResourceTraits(dispersal);
  }

  static swarmkeeper17(pc: PlayerCharacter, params: LevelingParams) {
    Swarmkeeper.getSpell(pc,"17");
  }
  
  static spells = {
    "3": ["FAERIE FIRE"],
    "5": ["WEB"],
    "9": ["GASEOUS FORM"],
    "13": ["ARCANE EYE"],
    "17": ["INSECT PLAGUE"]
  }
}