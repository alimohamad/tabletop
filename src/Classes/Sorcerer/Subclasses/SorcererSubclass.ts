
import { Subclass, SubclassParams } from "../../Subclass";
import { DraconicAncestry } from "./DraconicAncestry/DraconicAncestry";
import { WildMagic } from "./WildMagic/WildMagic";
import { StormSorcery } from "./StormSorcery/StormSorcery";
import { Shadow } from "./Shadow/Shadow";
import { DivineSoul } from "./DivineSoul/DivineSoul";
import { LevelingParams } from "Classes/PlayerClass";
import { PlayerCharacter } from "../../../Base/PlayerCharacter";
import { AberrantMind } from "./AberrantMind/AberrantMind";

export class SorcererSubclass extends Subclass {
  constructor(subclassSelection: SubclassParams){
    super(subclassSelection);

    subclassSelection.name === "DRACONIC ANCESTRY" ? this.persistentSelection = subclassSelection : null
  }

  subclassDictionary = {
    "DRACONIC ANCESTRY": {
      "1": DraconicAncestry.draconicAncestry1,
      "2": DraconicAncestry.draconicResilienceHpBonus,
      "3": DraconicAncestry.draconicResilienceHpBonus,
      "4": DraconicAncestry.draconicResilienceHpBonus,
      "5": DraconicAncestry.draconicResilienceHpBonus,
      "6": DraconicAncestry.draconicAncestry6,
      "7": DraconicAncestry.draconicResilienceHpBonus,
      "8": DraconicAncestry.draconicResilienceHpBonus,
      "9": DraconicAncestry.draconicResilienceHpBonus,
      "10": DraconicAncestry.draconicResilienceHpBonus,
      "11": DraconicAncestry.draconicResilienceHpBonus,
      "12": DraconicAncestry.draconicResilienceHpBonus,
      "13": DraconicAncestry.draconicResilienceHpBonus,
      "14": DraconicAncestry.draconicAncestry14,
      "15": DraconicAncestry.draconicResilienceHpBonus,
      "16": DraconicAncestry.draconicResilienceHpBonus,
      "17": DraconicAncestry.draconicResilienceHpBonus,
      "18": DraconicAncestry.draconicAncestry18,
      "19": DraconicAncestry.draconicResilienceHpBonus,
      "20": DraconicAncestry.draconicResilienceHpBonus,
    },
    "STORM SORCERY": {
      "1": StormSorcery.stormSorcery1,
      "6": StormSorcery.stormSorcery6,
      "8": StormSorcery.upHeart,
      "10": StormSorcery.upHeart,
      "12": StormSorcery.upHeart,
      "14": StormSorcery.stormSorcery14,
      "15": StormSorcery.upFury,
      "16": StormSorcery.upBoth,
      "17": StormSorcery.upFury,
      "18": StormSorcery.stormSorcery18,
      "19": StormSorcery.upFury,
      "20": StormSorcery.upBoth,
    },
    "WILD MAGIC": {
      "1": WildMagic.wildMagic1,
      "6": WildMagic.wildMagic6,
      "14": WildMagic.wildMagic14,
      "18": WildMagic.wildMagic18,
    },
    SHADOW: {
      "1": Shadow.shadow1,
      "3": Shadow.shadow3,
      "6": Shadow.shadow6,
      "14": Shadow.shadow14,
      "18": Shadow.shadow18
    },
    "DIVINE SOUL": {
      "1": DivineSoul.divineSoul1,
      "6": DivineSoul.divineSoul6,
      "14": DivineSoul.divineSoul14,
      "18": DivineSoul.divineSoul18,
    },
    "ABERRANT MIND": {
      "1": AberrantMind.aberrantMind1,
      "2": AberrantMind.upSpeech,
      "3": AberrantMind.upSpeech,
      "4": AberrantMind.upSpeech,
      "5": AberrantMind.upSpeech,
      "6": AberrantMind.aberrantMind6,
      "7": AberrantMind.upSpeech,
      "8": AberrantMind.upSpeech,
      "9": AberrantMind.upSpeech,
      "10": AberrantMind.upSpeech,
      "11": AberrantMind.upSpeech,
      "12": AberrantMind.upSpeech,
      "13": AberrantMind.upSpeech,
      "14": AberrantMind.aberrantMind14,
      "15": AberrantMind.upSpeech,
      "16": AberrantMind.upSpeech,
      "17": AberrantMind.upSpeech,
      "18": AberrantMind.aberrantMind18,
      "19": AberrantMind.upSpeech,
      "20": AberrantMind.upSpeech,
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

export interface SorcererSubclassParams extends SubclassParams {
  affinity?: string;
  draconicAncestry?: string;
}