import { PlayerClass, LevelingParams, ClassCreationParams } from "../PlayerClass";
import { PlayerCharacter } from "../../Base/PlayerCharacter";
import { ISpell, Spell, ResourceTrait, ScalingTrait } from "../../Base/Interfaces";
import * as ClericClassTraits from "./Cleric.json";
import * as Spells from "../../../Assets/Spells.json";
import { ClericSubclass } from "./Subclasses/ClericSubclass";
import * as SpellList from "../../../Assets/SpellList.json";
import * as SpellcastingAbility from "../../../Assets/SpellcastingAbility.json";
import { SpellSlotFactory } from "../SpellSlotFactory";

export class Cleric extends PlayerClass {
  constructor(params: ClassCreationParams) {
    super(
      "Cleric",
      [],
      [],
      [],
      ["Light", "Medium", "Shield"],
      [],
      [],
      [],
      [],
      [],
      "d8",
      8,
      []
    );
    
    this.characterStart(params.multiclass, params.skillProficiencies, params.weapons, params.armor, params.equipmentPack, params.holySymbol);

    for (let level in this.abilitiesAtLevels) {
      const func: Function = this.abilitiesAtLevels[level];
      this.abilitiesAtLevels[level] = func.bind(this);
    }
  }

  characterStart(multiclass: boolean, skillProficiencies: string[], weapons: string[], armor: string[], equipmentPack: string, holySymbol: string){
    if(!multiclass){
      this.skillProficiencies = skillProficiencies;
      this.weaponProficiencies.push("Simple");
      this.weapons = weapons;
      this.armor = armor;
      this.equipmentPack = equipmentPack;
      this.equipment = [holySymbol]; 
      this.savingThrowProficiencies = ["wisdom", "charisma"];
    }
  }

  abilitiesAtLevels = {
    "1": this.level1,
    "2": this.level2,
    "3": this.level3,
    "4": this.level4,
    "5": this.level5,
    "6": this.level6,
    "7": this.level7,
    "8": this.level8,
    "9": this.level9,
    "10": this.level10,
    "11": this.level11,
    "12": this.level12,
    "13": this.level13,
    "14": this.level14,
    "15": this.level15,
    "16": this.level16,
    "17": this.level17,
    "18": this.level18,
    "19": this.level19,
    "20": this.level20,
  };

  private pushClericFeatures(pc: PlayerCharacter, level: number) {
    this.pushClassFeatures(pc, level, ClericClassTraits);
  }

  private handleClericSpellSelections(
    pc: PlayerCharacter,
    params: LevelingParams
  ) {
    this.handleSpellSelections(pc, params, SpellcastingAbility["CLERIC"]);
  }

  level1(pc: PlayerCharacter, params: LevelingParams): void {
    pc.pcHelper.addSpells(
      [...SpellList["Cleric"][1]],
      SpellcastingAbility["CLERIC"]
    );
    this.handleClericSpellSelections(pc, params);
    this.addSpellcasting(pc, "CLERIC");

    // divine domain
    this.subclass = new ClericSubclass(params.subclassParams);
    this.subclassDriver(pc, "1", params);
  }

  level2(pc: PlayerCharacter, params: LevelingParams): void {
    // channel divinity multiclass check against paladin
     if(PlayerClass.multiClassCheck(pc, "Channel Divinity")){
       const channelDivinity: ResourceTrait = {
         title: "Channel Divinity",
         description: "Number of times you can use a Channel Divinity ability.",
         resourceMax: { value: 1 },
       };
       pc.pcHelper.addResourceTraits(channelDivinity);
    }
    
    // divine domain
    this.subclassDriver(pc, "2", params);
    this.pushClericFeatures(pc, 2);
  }

  level3(pc: PlayerCharacter, params: LevelingParams): void {
    // divine domain spells
    this.subclassDriver(pc, "3", params);
    pc.pcHelper.addSpells([...SpellList["Cleric"][2]], SpellcastingAbility["CLERIC"]);
  }

  level4(pc: PlayerCharacter, params: LevelingParams): void {
    // cantrip
    this.handleClericSpellSelections(pc, params);
    this.subclassDriver(pc,"4",params);
  }

  level5(pc: PlayerCharacter, params: LevelingParams): void {
    pc.pcHelper.addSpells(
      [...SpellList["Cleric"][3]],
      SpellcastingAbility["CLERIC"]
    );
    
    // destroy undead
    const destroyUndead: ScalingTrait = {
      title: "Destroy Undead",
      description:
        "Challenge rating threshold for destroying undead that fail the saving throw against Turn Undead",
      challengeRating: 0.5,
    };
    pc.pcHelper.addScalingTraits(destroyUndead);
    // divine domain spells
    this.subclassDriver(pc, "5", params);
    this.pushClericFeatures(pc, 5);
  }

  level6(pc: PlayerCharacter, params: LevelingParams): void {
    // channel divinity
    pc.pcHelper.findResourceTraitByName("Channel Divinity").resourceMax.value++;
    // divine domain
    this.subclassDriver(pc, "6", params);
  }

  level7(pc: PlayerCharacter, params: LevelingParams): void {
    // divine domain spells
    this.subclassDriver(pc, "7", params);
    pc.pcHelper.addSpells([...SpellList["Cleric"][4]], SpellcastingAbility["CLERIC"]);

  }

  level8(pc: PlayerCharacter, params: LevelingParams): void {
    // destroy undead
    pc.pcHelper.findScalingTraitByName("Destroy Undead").challengeRating = 1;
    // divine domain
    this.subclassDriver(pc, "8", params);
  }

  level9(pc: PlayerCharacter, params: LevelingParams): void {
    // divine domain spells
    this.subclassDriver(pc, "9", params);
    pc.pcHelper.addSpells([...SpellList["Cleric"][5]], SpellcastingAbility["CLERIC"]);
  }

  level10(pc: PlayerCharacter, params: LevelingParams): void {
    // cantrip
    this.handleClericSpellSelections(pc, params);
    // divine intervention
    const divineIntervention: ResourceTrait = {
      title: "Divine Intervention",
      description:
        "Number of times your deity can intervene through a successful Divine Intervention. (Once per 7 days and a long rest)",
      resourceMax: { value: 1 },
    };
    pc.pcHelper.addResourceTraits(divineIntervention);
    this.pushClericFeatures(pc, 10);
    this.subclassDriver(pc, "10", params);
  }

  level11(pc: PlayerCharacter, params: LevelingParams): void {
    // destroy undead
    pc.pcHelper.findScalingTraitByName("Destroy Undead").challengeRating++;
    pc.pcHelper.addSpells([...SpellList["Cleric"][6]], SpellcastingAbility["CLERIC"]);
    this.subclassDriver(pc, "11", params);
  }

  level12(pc: PlayerCharacter, params: LevelingParams): void {
    this.subclassDriver(pc, "12", params);
  }

  level13(pc: PlayerCharacter, params: LevelingParams): void {
    pc.pcHelper.addSpells([...SpellList["Cleric"][7]], SpellcastingAbility["CLERIC"]);
    this.subclassDriver(pc, "13", params);
  }

  level14(pc: PlayerCharacter, params: LevelingParams): void {
    this.subclassDriver(pc, "14", params);
    // destroy undead
    pc.pcHelper.findScalingTraitByName("Destroy Undead").challengeRating++;
  }

  level15(pc: PlayerCharacter, params: LevelingParams): void {
    pc.pcHelper.addSpells([...SpellList["Cleric"][8]], SpellcastingAbility["CLERIC"]);
    this.subclassDriver(pc, "15", params);
  }

  level16(pc: PlayerCharacter, params: LevelingParams): void {
    this.subclassDriver(pc, "16", params);
  }

  level17(pc: PlayerCharacter, params: LevelingParams): void {
    // destroy undead
    pc.pcHelper.findScalingTraitByName("Destroy Undead").challengeRating++;
    // divine domain
    this.subclassDriver(pc, "17", params);
    pc.pcHelper.addSpells([...SpellList["Cleric"][9]], SpellcastingAbility["CLERIC"]);
  }

  level18(pc: PlayerCharacter, params: LevelingParams): void {
    // channel divinity
    pc.pcHelper.findResourceTraitByName("Channel Divinity").resourceMax.value++;
    this.subclassDriver(pc, "18", params);
  }

  level19(pc: PlayerCharacter, params: LevelingParams): void {
    this.subclassDriver(pc, "19", params);
  }

  level20(pc: PlayerCharacter, params: LevelingParams): void {
    this.subclassDriver(pc, "20", params);
  }
}

export class DSCleric extends Cleric {
  constructor(){
    super({multiclass: true});
  }
}
