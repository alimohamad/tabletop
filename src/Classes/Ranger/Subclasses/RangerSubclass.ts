import { Subclass, SubclassParams } from "../../Subclass";
import { BeastMaster } from "./BeastMaster/BeastMaster";
import { Hunter } from "./Hunter/Hunter";
import { MonsterSlayer } from "./MonsterSlayer/MonsterSlayer";
import { HorizonWalker } from "./HorizonWalker/HorizonWalker"
import { GloomStalker } from "./GloomStalker/GloomStalker";
import { Swarmkeeper } from "./Swarmkeeper/Swarmkeeper";

export class RangerSubclass extends Subclass {

  constructor(subclassSelection: SubclassParams){
    super(subclassSelection);
  }

  subclassDictionary = {
    HUNTER: {
      "3": Hunter.hunter3,
      "7": Hunter.hunter7,
      "11": Hunter.hunter11,
      "15": Hunter.hunter15,
    },
    "BEAST MASTER": {
      "3": BeastMaster.beastMaster3,
      "7": BeastMaster.beastMaster7,
      "11": BeastMaster.beastMaster11,
      "15": BeastMaster.beastMaster15,
    },
    "HORIZON WALKER": {
      "3": HorizonWalker.horizonWalker3,
      "5": HorizonWalker.horizonWalker5,
      "7": HorizonWalker.horizonWalker7,
      "9": HorizonWalker.horizonWalker9,
      "11": HorizonWalker.horizonWalker11,
      "13": HorizonWalker.horizonWalker13,
      "15": HorizonWalker.horizonWalker15,
      "17": HorizonWalker.horizonWalker17
    },
    "GLOOM STALKER": {
      "3": GloomStalker.gloomStalker3,
      "5": GloomStalker.gloomStalker5,
      "7": GloomStalker.gloomStalker7,
      "9": GloomStalker.gloomStalker9,
      "11": GloomStalker.gloomStalker11,
      "15": GloomStalker.gloomStalker15,
      "17": GloomStalker.gloomStalker17
    },
    "MONSTER SLAYER": {
      "3": MonsterSlayer.monsterSlayer3,
      "5": MonsterSlayer.monsterSlayer5,
      "7": MonsterSlayer.monsterSlayer7,
      "9": MonsterSlayer.monsterSlayer9,
      "11": MonsterSlayer.monsterSlayer11,
      "13": MonsterSlayer.monsterSlayer13,
      "15": MonsterSlayer.monsterSlayer15,
      "17": MonsterSlayer.monsterSlayer17
    },
    SWARMKEEPER: {
      "3": Swarmkeeper.swarmkeeper3,
      "5": Swarmkeeper.swarmkeeper5,
      "7": Swarmkeeper.swarmkeeper7,
      "9": Swarmkeeper.swarmkeeper9,
      "11": Swarmkeeper.swarmkeeper11,
      "13": Swarmkeeper.swarmkeeper13,
      "15": Swarmkeeper.swarmkeeper15,
      "17": Swarmkeeper.swarmkeeper17,
    }
  }
}

export interface RangerSubclassParams {
  feature?: string;
  beastCompanion?: string;
}