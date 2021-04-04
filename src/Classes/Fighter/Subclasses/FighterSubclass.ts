
import { Subclass, SubclassParams } from "../../Subclass";
import { Champion } from "./Champion/Champion";
import { BattleMaster } from "./BattleMaster/BattleMaster";
import { EldritchKnight } from "./EldritchKnight/EldritchKnight";
import { ArcaneArcher } from "./ArcaneArcher/ArcaneArcher";
import { Cavalier } from "./Cavalier/Cavalier";
import { Samurai } from "./Samurai/Samurai";
import { RuneKnight } from "./RuneKnight/RuneKnight";

export class FighterSubclass extends Subclass {
  constructor(subclassSelection: SubclassParams){
    super(subclassSelection);
  }
    
  subclassDictionary = {
        CHAMPION: {
          "3": Champion.champion3,
          "7": Champion.champion7,
          "10": Champion.champion10,
          "15": Champion.champion15,
          "18": Champion.champion18,
        },
        "BATTLE MASTER": {
          "3": BattleMaster.battleMaster3,
          "7": BattleMaster.battleMaster7,
          "10": BattleMaster.battleMaster10,
          "15": BattleMaster.battleMaster15,
          "18": BattleMaster.battleMaster18,
        },
        "ELDRITCH KNIGHT": {
          "3": EldritchKnight.eldritchKnight3,
          "4": EldritchKnight.eldritchKnight4,
          "7": EldritchKnight.eldritchKnight7,
          "8": EldritchKnight.eldritchKnight8,
          "10": EldritchKnight.eldritchKnight10,
          "11": EldritchKnight.eldritchKnight11,
          "13": EldritchKnight.eldritchKnight13,
          "14": EldritchKnight.eldritchKnight14,
          "15": EldritchKnight.eldritchKnight15,
          "16": EldritchKnight.eldritchKnight16,
          "18": EldritchKnight.eldritchKnight18,
          "19": EldritchKnight.eldritchKnight19,
          "20": EldritchKnight.eldritchKnight20,
        },
        "ARCANE ARCHER": {
          "3": ArcaneArcher.arcaneArcher3,
          "7": ArcaneArcher.arcaneArcher7,
          "10": ArcaneArcher.arcaneArcher10,
          "15": ArcaneArcher.arcaneArcher15,
          "18": ArcaneArcher.arcaneArcher18,
        },
        CAVALIER: {
          "3": Cavalier.cavalier3,
          "4": Cavalier.upMark,
          "6": Cavalier.upMark,
          "7": Cavalier.cavalier7,
          "8": Cavalier.upMark,
          "10": Cavalier.cavalier10,
          "12": Cavalier.upMark,
          "14": Cavalier.upMark,
          "15": Cavalier.cavalier15,
          "16": Cavalier.upMark,
          "18": Cavalier.cavalier18,
          "20": Cavalier.upMark,
        },
        SAMURAI: {
          "3": Samurai.samurai3,
          "5": Samurai.upSpirit,
          "7": Samurai.samurai7,
          "10": Samurai.samurai10,
          "15": Samurai.samurai15,
          "18": Samurai.samurai18,
        },
        "RUNE KNIGHT": {
          "3": RuneKnight.runeKnight3,
          "7": RuneKnight.runeKnight7,
          "10": RuneKnight.runeKnight10,
          "15": RuneKnight.runeKnight15,
          "18": RuneKnight.runeKnight18,
        }
      };
}

export interface FighterSubclassParams extends SubclassParams {
  arcaneShots?: string[];
  maneuverSelections?: {
    add: string[];
    remove?: string;
  };
}


