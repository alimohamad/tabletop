import { ResourceTrait } from "../../../../Base/Interfaces";
import { PlayerCharacter } from "../../../../Base/PlayerCharacter";
import { LevelingParams } from "../../../../Classes/PlayerClass";
import * as AberrantMindArchetypeDict from "./AberrantMind.json"


export class AberrantMind {

  static getFeature(level: string, featureName: string) {
    return AberrantMindArchetypeDict["features"][level][featureName];
  }

  static getSpell(level: string, pc: PlayerCharacter,) {
    pc.pcHelper.addSpells(AberrantMind.spells[level],"charisma");
  }

  static upSpeech(pc: PlayerCharacter, params: LevelingParams) {
    const telepath: ResourceTrait = pc.pcHelper.findResourceTraitByName("TELEPATHIC SPEECH");
    telepath.resourceMax.value++;
  }

  static aberrantMind1(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(AberrantMind.getFeature("1", "PSIONIC SPELLS"), AberrantMind.getFeature("1", "TELEPATHIC SPEECH"))
    const telepath: ResourceTrait ={
      title: "Telepathic Speech",
      description: "The number of minutes your Telepathic Speech lasts",
      resourceMax: {value: pc.level.totalLevel}
    }
    pc.pcHelper.addResourceTraits(telepath);
    const speech: ResourceTrait = {
      title: "Telepathic Speech (Distance)",
      description: "How many miles your Telepathic Speech can extend",
      resourceMax: (pc.abilityScores.charisma.modifier.value>=1) ? pc.abilityScores.charisma.modifier: {value: 1}
    }
    pc.pcHelper.addResourceTraits(speech);
  }

  static aberrantMind6(pc: PlayerCharacter, params: LevelingParams) {      
    pc.pcHelper.addFeatures(AberrantMind.getFeature("6", "PSIONIC SORCERY"), AberrantMind.getFeature("6","PSYCHIC DEFENSES"));
    AberrantMind.upSpeech(pc,params);
  }

  static aberrantMind14(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(AberrantMind.getFeature("14", "REVELATION IN FLESH"))
  }

  static aberrantMind18(pc: PlayerCharacter, params: LevelingParams) {
    pc.pcHelper.addFeatures(AberrantMind.getFeature("18", "WARPING IMPLOSION"))
  }

  static spells = {
    "1": ["ARMS OF HADAR","DISSONANT WHISPERS","MIND SLIVER"],
    "3": ["CALM EMOTIONS", "DETECT THOUGHTS"],
    "5": ["HUNGER OF HADAR", "SENDING"],
    "7": ["EVARD'S BLACK TENTACLES", "SUMMON ABERRATION"],
    "9": ["RARY'S TELEPATHIC BOND", "TELEKINESIS"]
  }
}