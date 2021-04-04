import { ResourceTrait } from "../../../../Base/Interfaces";
import { PlayerCharacter } from "../../../../Base/PlayerCharacter";
import { LevelingParams } from "../../../../Classes/PlayerClass";
import * as BladesingingSchoolDict from "./Bladesinging.json"

export class Bladesinging {

    static getFeature(level: string, featureName: string) {
        return BladesingingSchoolDict["features"][level][featureName];
    }

    static bladesinging2(pc: PlayerCharacter, params: LevelingParams): void {
        pc.pcHelper.addFeatures(Bladesinging.getFeature("2", "TRAINING IN WAR AND SONG"), 
        Bladesinging.getFeature("2", "BLADESONG"));
        pc.traits.armorProficiencies.add("LIGHT");
        pc.skills["performance"].proficient = true;
        pc.traits.weaponProficiencies.add(params.subclassParams.weapons[0]);
        const war: ResourceTrait = {
            title: "Bladesong Buffs",
            description: "The bonus to your AC and concentration checks when you activate Bladesong",
            resourceMax: (pc.abilityScores.intelligence.modifier.value>=1) ? pc.abilityScores.intelligence.modifier : {value: 1}
        }
        const song: ResourceTrait= {
            title: "Bladesong",
            description: "The number of times you may use Bladesong",
            resourceMax: pc.proficiency.baseBonus
        }
        pc.pcHelper.addResourceTraits(song);
        pc.pcHelper.addResourceTraits(war);
    }
    
    static bladesinging6(pc: PlayerCharacter, params: LevelingParams): void {
        pc.pcHelper.addFeatures(Bladesinging.getFeature("6", "EXTRA ATTACK"))
        if(!pc.pcHelper.findResourceTraitByName("Extra Attack")) {
            pc.pcHelper.addResourceTraits({
                title: "Extra Attack",
                description: "Number of Extra Attacks you can make.",
                resourceMax: { value: 1 },
            });
        }
    }

    static bladesinging10(pc: PlayerCharacter, params: LevelingParams): void {
        pc.pcHelper.addFeatures(Bladesinging.getFeature("10", "SONG OF DEFENSE"));
    }

    static bladesinging14(pc: PlayerCharacter, params: LevelingParams): void {
        pc.pcHelper.addFeatures(Bladesinging.getFeature("14", "SONG OF VICTORY"));
        const war: ResourceTrait = pc.pcHelper.findResourceTraitByName("BLADESONG BUFFS");
        war.description = "The bonus to your AC, damage rolls, and concentration checks when you activate Bladesong";
    }
}