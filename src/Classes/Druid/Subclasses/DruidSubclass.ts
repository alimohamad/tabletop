import { PlayerCharacter } from "../../../Base/PlayerCharacter";
import { LevelingParams } from "../../../Classes/PlayerClass";
import { Subclass, SubclassParams } from "../../Subclass";
import { LandCircle } from "./Land/LandCircle";
import { MoonCircle } from "./Moon/MoonCircle";
import { SporesCircle } from "./Spores/SporesCircle";
import { DreamsCircle } from "./Dreams/DreamsCircle";
import { ShepherdCircle } from "./Shepherd/ShepherdCircle";
import { StarsCircle } from "./Stars/StarsCircle";

export class DruidSubclass extends Subclass {
  constructor(subclassSelection: SubclassParams){
    super(subclassSelection);
    subclassSelection.name === "LAND" ? this.persistentSelection = subclassSelection : null;
  }

  subclassDictionary = {
    LAND: {
      "2": LandCircle.land2,
      "3": LandCircle.land3,
      "4": LandCircle.land4,
      "5": LandCircle.land5,
      "6": LandCircle.land6,
      "7": LandCircle.land7,
      "8": LandCircle.land8,
      "9": LandCircle.land9,
      "10": LandCircle.land10,
      "14": LandCircle.land14
    },
    SPORES: {
      "2": SporesCircle.spores2,
      "3": SporesCircle.spores3,
      "4": SporesCircle.spores4,
      "5": SporesCircle.spores5,
      "6": SporesCircle.spores6,
      "7": SporesCircle.spores7,
      "8": SporesCircle.spores8,
      "9": SporesCircle.spores9,
      "10": SporesCircle.spores10,
      "11": SporesCircle.upSymbioticEntity,
      "12": SporesCircle.upSymbioticEntity,
      "13": SporesCircle.upSymbioticEntity,
      "14": SporesCircle.spores14,
      "15": SporesCircle.upSymbioticEntity,
      "16": SporesCircle.upSymbioticEntity,
      "17": SporesCircle.upSymbioticEntity,
      "18": SporesCircle.upSymbioticEntity,
      "19": SporesCircle.upSymbioticEntity,
      "20": SporesCircle.upSymbioticEntity,
    },
    MOON: {
      "2": MoonCircle.moon2,
      "6": MoonCircle.moon6,
      "9": MoonCircle.upWildShape,
      "10": MoonCircle.moon10,
      "12": MoonCircle.upWildShape,
      "14": MoonCircle.moon14,
      "15": MoonCircle.upWildShape,
      "18": MoonCircle.upWildShape,
    },
    DREAMS: {
      "2": DreamsCircle.dreams2,
      "3": DreamsCircle.upBalm,
      "4": DreamsCircle.dreams4,
      "5": DreamsCircle.upBalm,
      "6": DreamsCircle.dreams6,
      "7": DreamsCircle.upBalm,
      "8": DreamsCircle.dreams8,
      "9": DreamsCircle.upBalm,
      "10": DreamsCircle.dreams10,
      "11": DreamsCircle.upBalm,
      "12": DreamsCircle.upBalm,
      "13": DreamsCircle.upBalm,
      "14": DreamsCircle.dreams14,
      "15": DreamsCircle.upBalm,
      "16": DreamsCircle.upBalm,
      "17": DreamsCircle.upBalm,
      "18": DreamsCircle.upBalm,
      "19": DreamsCircle.upBalm,
      "20": DreamsCircle.upBalm,
    },
    SHEPHERD: {
      "2": ShepherdCircle.shepherd2,
      "3": ShepherdCircle.upSpirit,
      "4": ShepherdCircle.shepherd4,
      "5": ShepherdCircle.upSpirit,
      "6": ShepherdCircle.shepherd6,
      "7": ShepherdCircle.upSpirit,
      "8": ShepherdCircle.shepherd8,
      "9": ShepherdCircle.upSpirit,
      "10": ShepherdCircle.shepherd10,
      "11": ShepherdCircle.upSpirit,
      "12": ShepherdCircle.upGuardian,
      "13": ShepherdCircle.upSpirit,
      "14": ShepherdCircle.shepherd14,
      "15": ShepherdCircle.upSpirit,
      "16": ShepherdCircle.upGuardian,
      "17": ShepherdCircle.upSpirit,
      "18": ShepherdCircle.upGuardian,
      "19": ShepherdCircle.upSpirit,
      "20": ShepherdCircle.upGuardian,
    },
    STARS: {
      "2": StarsCircle.stars2,
      "4": StarsCircle.stars4,
      "6": StarsCircle.stars6,
      "8": StarsCircle.stars8,
      "10": StarsCircle.stars10,
      "14": StarsCircle.stars14,
    }
  };

  subclassDriver(pc: PlayerCharacter, level: string, subclass: string, params: LevelingParams){
    if(!this.subclassDictionary[subclass][level]){ return; }
    if(this.persistentSelection){
      params.subclassParams = this.persistentSelection;
    }
    this.subclassDictionary[subclass][level](pc, params);
  }
}


export interface DruidSubclassParams extends SubclassParams {
  land?: string
}