import { ResourceTrait, ScalingTrait } from "Base/Interfaces";
import { PlayerCharacter } from "../../../../Base/PlayerCharacter";
import { LevelingParams, PlayerClass } from "../../../../Classes/PlayerClass";
import * as PsiWarriorArchetype from "./PsiWarrior.json"

export class PsiWarrior {

  static getFeature(level: string, featureName: string) {
    return PsiWarriorArchetype["features"][level][featureName];
  }

  static upPsi(pc:PlayerCharacter,params:LevelingParams) {
    const power: ResourceTrait = pc.pcHelper.findResourceTraitByName("PSIONIC POWER");
    power.resourceMax = {value: pc.proficiency.baseBonus.value*2}
  }

  static psiWarrior3(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(PsiWarrior.getFeature("3", "PSIONIC POWER"));
    const psi: ScalingTrait = {
      title: "Psionic Power",
      description: "The damage reduced/dealt with Psionic Power",
      dice: "d6",
      bonus: pc.abilityScores.intelligence.modifier.value
    }
    const power: ResourceTrait = {
      title: "Psionic Power",
      description: "The number of Psionic Power die you have",
      resourceMax: {value: pc.proficiency.baseBonus.value*2}
    }
    pc.pcHelper.addScalingTraits(psi);
    pc.pcHelper.addResourceTraits(power);
  }

  static psiWarrior5(pc: PlayerCharacter, params: LevelingParams) {
    const psi: ScalingTrait = pc.pcHelper.findScalingTraitByName("PSIONIC POWER");
    psi.dice = "d8";
    PsiWarrior.upPsi(pc,params);
  }

  static psiWarrior7(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(PsiWarrior.getFeature("7", "TELEKINETIC ADEPT"));
  }

  static psiWarrior10(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(PsiWarrior.getFeature("10", "GUARDED MIND"));
  }

  static psiWarrior11(pc: PlayerCharacter, params: LevelingParams) {
    const psi: ScalingTrait = pc.pcHelper.findScalingTraitByName("PSIONIC POWER");
    psi.dice = "d10"
  }

  static psiWarrior15(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(PsiWarrior.getFeature("15", "BULWARK OF FORCE"));
    const force: ResourceTrait = {
      title: "Bulwark of Force",
      description: "The number of creatures you may target with Bulwark of Force",
      resourceMax: (pc.abilityScores.intelligence.modifier.value>=1) ? pc.abilityScores.intelligence.modifier : {value: 1}
    }
    pc.pcHelper.addResourceTraits(force);
  }

  static psiWarrior17(pc: PlayerCharacter, params: LevelingParams) {
    const psi: ScalingTrait = pc.pcHelper.findScalingTraitByName("PSIONIC POWER");
    psi.dice = "d12";
    PsiWarrior.upPsi(pc,params);
  }

  static psiWarrior18(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(PsiWarrior.getFeature("18", "TELEKINETIC MASTER"));
    pc.pcHelper.addSpells(["TELEKINESIS"],"intelligence");
  }
}