
import { Subclass, SubclassParams } from "../../Subclass";
import { ForgeDomain } from "./Forge/ForgeDomain";
import { KnowledgeDomain } from "./Knowledge/KnowledgeDomain";
import { LifeDomain } from "./Life/LifeDomain";
import { LightDomain } from "./Light/LightDomain";
import { NatureDomain } from "./Nature/NatureDomain";
import { TempestDomain } from "./Tempest/TempestDomain";
import { TrickeryDomain } from "./Trickery/TrickeryDomain";
import { WarDomain } from "./War/WarDomain";
import { GraveDomain } from "./Grave/GraveDomain";
import { PeaceDomain } from "./Peace/PeaceDomain";

export class ClericSubclass extends Subclass {

  constructor(subclassSelection: SubclassParams){
    super(subclassSelection);
  }

  subclassDictionary = {
    KNOWLEDGE: {
        "1": KnowledgeDomain.knowledge1,
        "2": KnowledgeDomain.knowledge2,
        "3": KnowledgeDomain.knowledge3,
        "5": KnowledgeDomain.knowledge5,
        "6": KnowledgeDomain.knowledge6,
        "7": KnowledgeDomain.knowledge7,
        "8": KnowledgeDomain.knowledge8,
        "9": KnowledgeDomain.knowledge9,
        "17": KnowledgeDomain.knowledge17
      },
      LIFE: {
        "1": LifeDomain.life1,
        "2": LifeDomain.life2,
        "3": LifeDomain.life3,
        "5": LifeDomain.life5,
        "6": LifeDomain.life6,
        "7": LifeDomain.life7,
        "8": LifeDomain.life8,
        "9": LifeDomain.life9,
        "14": LifeDomain.life14,
        "17": LifeDomain.life17
      },
      LIGHT: {
        "1": LightDomain.light1,
        "2": LightDomain.light2,
        "3": LightDomain.light3,
        "5": LightDomain.light5,
        "6": LightDomain.light6,
        "7": LightDomain.light7,
        "8": LightDomain.light8,
        "9": LightDomain.light9,
        "17": LightDomain.light17
      },
      NATURE: {
        "1": NatureDomain.nature1,
        "2": NatureDomain.nature2,
        "3": NatureDomain.nature3,
        "5": NatureDomain.nature5,
        "6": NatureDomain.nature6,
        "7": NatureDomain.nature7,
        "8": NatureDomain.nature8,
        "9": NatureDomain.nature9,
        "14": NatureDomain.nature14,
        "17":NatureDomain.nature17
      },
      TEMPEST: {
        "1": TempestDomain.tempest1,
        "2": TempestDomain.tempest2,
        "3": TempestDomain.tempest3,
        "5": TempestDomain.tempest5,
        "6": TempestDomain.tempest6,
        "7": TempestDomain.tempest7,
        "8": TempestDomain.tempest8,
        "9": TempestDomain.tempest9,
        "14": TempestDomain.tempest14,
        "17": TempestDomain.tempest17
      },
      TRICKERY: {
        "1": TrickeryDomain.trickery1,
        "2": TrickeryDomain.trickery2,
        "3": TrickeryDomain.trickery3,
        "5": TrickeryDomain.trickery5,
        "6": TrickeryDomain.trickery6,
        "7": TrickeryDomain.trickery7,
        "8": TrickeryDomain.trickery8,
        "9": TrickeryDomain.trickery9,
        "14": TrickeryDomain.trickery14,
        "17": TrickeryDomain.trickery17
      },
      WAR: {
        "1": WarDomain.war1,
        "2": WarDomain.war2,
        "3": WarDomain.war3,
        "5": WarDomain.war5,
        "6": WarDomain.war6,
        "7": WarDomain.war7,
        "8": WarDomain.war8,
        "9": WarDomain.war9,
        "14": WarDomain.war14,
        "17": WarDomain.war17
      },
      FORGE: {
        "1": ForgeDomain.forge1,
        "2": ForgeDomain.forge2,
        "3": ForgeDomain.forge3,
        "5": ForgeDomain.forge5,
        "6": ForgeDomain.forge6,
        "7": ForgeDomain.forge7,
        "8": ForgeDomain.forge8,
        "9": ForgeDomain.forge9,
        "14": ForgeDomain.forge14,
        "17": ForgeDomain.forge17

      },
      GRAVE: {
        "1": GraveDomain.grave1,
        "2": GraveDomain.grave2,
        "3": GraveDomain.grave3,
        "5": GraveDomain.grave5,
        "6": GraveDomain.grave6,
        "7": GraveDomain.grave7,
        "8": GraveDomain.grave8,
        "9": GraveDomain.grave9,
        "17": GraveDomain.grave17
      },
      PEACE: {
        "1": PeaceDomain.peace1,
        "2": PeaceDomain.peace2,
        "3": PeaceDomain.peace3,
        "5": PeaceDomain.peace5,
        "6": PeaceDomain.peace6,
        "7": PeaceDomain.peace7,
        "8": PeaceDomain.peace8,
        "9": PeaceDomain.peace9,
        "17": PeaceDomain.peace17
      }
  };
}