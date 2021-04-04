import { ResourceTrait } from "../../../../Base/Interfaces";
import { PlayerCharacter } from "../../../../Base/PlayerCharacter";
import { LevelingParams } from "../../../../Classes/PlayerClass";
import * as ScribesSchoolDict from "./Scribes.json"

export class Scribes {

    static getFeature(level: string, featureName: string) {
        return ScribesSchoolDict["features"][level][featureName];
    }

    static scribes2(pc: PlayerCharacter, params: LevelingParams): void {
        pc.pcHelper.addFeatures(Scribes.getFeature("2", "WIZARDLY QUILL"), Scribes.getFeature("2", "AWAKENED SPELLBOOK"))
    }
    
    static scribes6(pc: PlayerCharacter, params: LevelingParams): void {
        pc.pcHelper.addFeatures(Scribes.getFeature("6", "MANIFEST MIND"));
        const manifest: ResourceTrait = {
            title: "Manifest Mind",
            description: "The number of times you may use Manifest Mind",
            resourceMax: pc.proficiency.baseBonus
        }
        pc.pcHelper.addResourceTraits(manifest);
    }

    static scribes10(pc: PlayerCharacter, params: LevelingParams): void {
        pc.pcHelper.addFeatures(Scribes.getFeature("10", "MASTER SCRIVENER"));
    }

    static scribes14(pc: PlayerCharacter, params: LevelingParams): void {
        pc.pcHelper.addFeatures(Scribes.getFeature("14", "ONE WITH THE WORD"));
    }
}