import { ScalingTrait, ResourceTrait } from "../../../../Base/Interfaces";
import { PlayerCharacter } from "../../../../Base/PlayerCharacter";
import { LevelingParams } from "../../../../Classes/PlayerClass";
import * as GloryOathDict from "./OathofGlory.json"


export class Glory {
  static getFeature(level: string, featureName: string) {
    return GloryOathDict["features"][level][featureName];
  }

  static addArchetypeSpells(pc: PlayerCharacter, level: string){
    pc.pcHelper.addSpells(this.oathSpells[level], "charisma");
  }
  
  static upSmite(pc: PlayerCharacter, params: LevelingParams) {
    const inspire: ScalingTrait = pc.pcHelper.findScalingTraitByName("INSPIRING SMITE");
    inspire.bonus++;
  }

  static glory3(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(
      Glory.getFeature("3", "PEERLESS ATHLETE"),
      Glory.getFeature("3", "INSPIRING SMITE")
    );
    const inspire: ScalingTrait = {
      title: "Inspiring Smite",
      description: "The amount of temp hit points you gain from Inspiring Smite",
      dice: "2d8",
      bonus: 3
    }
    pc.pcHelper.addScalingTraits(inspire);
    Glory.addArchetypeSpells(pc, "3");
  }

  static glory5(pc: PlayerCharacter, params: LevelingParams) {
    Glory.addArchetypeSpells(pc, "5");
    Glory.upSmite(pc,params);
  }
  
  static glory7(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(Glory.getFeature("7", "AURA OF ALACRITY"));
    Glory.upSmite(pc,params);
  }

  static glory9(pc: PlayerCharacter, params: LevelingParams) {
    Glory.addArchetypeSpells(pc, "9");
    Glory.upSmite(pc,params);
  }

  static glory13(pc: PlayerCharacter, params: LevelingParams) {
    Glory.addArchetypeSpells(pc, "13");
    Glory.upSmite(pc,params);
  }

  static glory15(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(Glory.getFeature("15", "GLORIOUS DEFENSE"));
    const glorious: ScalingTrait ={
      title: "Glorious Defense",
      description: "The bonus AC you grant with Glorious Defense",
      bonus: pc.abilityScores.charisma.modifier.value
    }
    const defense: ResourceTrait = {
      title: "Glorious Defense",
      description:"The number of times you may use Glorious Defense",
      resourceMax: (pc.abilityScores.charisma.modifier.value >=1) ? pc.abilityScores.charisma.modifier : {value: 1}
    }
    pc.pcHelper.addScalingTraits(glorious);
    pc.pcHelper.addResourceTraits(defense);
    Glory.upSmite(pc,params);
  }

  static glory17(pc: PlayerCharacter, params: LevelingParams) {
    Glory.addArchetypeSpells(pc, "17");
    Glory.upSmite(pc,params);
  }
  
  static glory20(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(Glory.getFeature("20", "LIVING LEGEND"));
    Glory.upSmite(pc,params);
  }

  static oathSpells = {
    "3": ["GUIDING BOLT", "HEROISM"],
    "5": ["ENHANCE ABILITY", "MAGIC WEAPON"],
    "9": ["HASTE", "PROTECTION FROM ENERGY"],
    "13": ["COMPULSION", "FREEDOM OF MOVEMENT"],
    "17": ["COMMUNE", "FLAME STRIKE"]
  };
}