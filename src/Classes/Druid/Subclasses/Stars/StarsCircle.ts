import { PlayerCharacter } from "../../../../Base/PlayerCharacter";
import { ResourceTrait, ScalingTrait } from "../../../../Base/Interfaces";
import { LevelingParams } from "../../../../Classes/PlayerClass";
import * as StarsCircleDict from "./Stars.json";


export class StarsCircle 
{        
    static getFeature(level: string, featureName: string) {
        return StarsCircleDict["features"][level][featureName];
    }

    static stars2(pc: PlayerCharacter, params: LevelingParams) {
        pc.pcHelper.addFeatures(StarsCircle.getFeature("2", "STAR MAP"));
        pc.pcHelper.addSpells(["GUIDANCE","GUIDING BOLT"],"wisdom");
        const map: ResourceTrait = {
            title: "Star Map",
            description: "The number of times you may use Guiding Bolt without a spell slot",
            resourceMax: pc.proficiency.baseBonus
        }
        pc.pcHelper.addResourceTraits(map);
        pc.pcHelper.addFeatures(StarsCircle.getFeature("2", "STARRY FORM"));
        const form: ScalingTrait = {
            title: "Starry Form",
            description: "The dice you use for Starry Form (Archer/Chalice)",
            dice: "1d8",
            bonus: pc.abilityScores.wisdom.modifier.value
        }
        pc.pcHelper.addScalingTraits(form);
        const wildShapeScale: ScalingTrait = pc.pcHelper.findScalingTraitByName("Wild Shape");
        wildShapeScale.challengeRating = 0.25;
    }
      
    static stars4(pc: PlayerCharacter, params: LevelingParams){
        const wildShapeScale: ScalingTrait = pc.pcHelper.findScalingTraitByName("Wild Shape");
        wildShapeScale.challengeRating = 0.5;
    }

    static stars6(pc: PlayerCharacter, params: LevelingParams) {
        pc.pcHelper.addFeatures(StarsCircle.getFeature("6", "COSMIC OMEN"));
        const omen: ResourceTrait = {
            title: "Cosmic Omen",
            description: "The number of times you may use your Cosmic Omen reaction",
            resourceMax: pc.proficiency.baseBonus
        }
        pc.pcHelper.addResourceTraits(omen);
        const haloDamage: ScalingTrait = pc.pcHelper.findScalingTraitByName("Halo of Stars");
        haloDamage.dice = "1d6";
    }
    
    static stars8(pc: PlayerCharacter, params: LevelingParams){
        const wildShapeScale: ScalingTrait = pc.pcHelper.findScalingTraitByName("Wild Shape");
        wildShapeScale.challengeRating = 1;
    }

    static stars10(pc: PlayerCharacter, params: LevelingParams) {
        pc.pcHelper.addFeatures(StarsCircle.getFeature("10", "TWINKLING CONSTELLATIONS"));
        const form: ScalingTrait = pc.pcHelper.findScalingTraitByName("STARRY FORM");
        form.dice = "2d8";
    }

    static stars14(pc: PlayerCharacter, params: LevelingParams) {
        pc.pcHelper.addFeatures(StarsCircle.getFeature("14", "FULL OF STARS"));
    }
}