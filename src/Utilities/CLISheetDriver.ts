import {
  ClassCreationParams,
  LevelingParams,
  PlayerClass,
} from "../Classes/PlayerClass";
import { SubclassParams } from "../Classes/Subclass";
import { bgDict, classDict, raceDict } from "./ConstructorDefinitions";
import { Choices, ChoiceSpec } from "./Choices";
import { CharacterSheet } from "../Base/CharacterSheet";
import { PlayerCharacter } from "../Base/PlayerCharacter";
import { Jsonify } from "./Jsonify";
import { Race, RaceParams } from "../Races/Race";
import { Background, BackgroundParams } from "../Backgrounds/Background";
import { FeatParams } from "Feats/Feat";
var prompt = require("prompt-sync")({ sigint: true });

export class CLISheetDriver {
  static defaultRaceParams(): RaceParams {
    return {
      draconicAncestry: "",
      toolProficiency: "",
      abilityScores: [],
      skillProficiencies: [],
      language: "",
      cantrip: "",
      feat: "",
    };
  }

  static defaultBackgroundParams(): BackgroundParams {
    return {
      languages: [],
      holySymbol: "",
      gamingSet: "",
      toolProficiencies: [],
      instrument: "",
      toolKit: "",
    };
  }

  static defaultLevelingParams(pClassName: string): LevelingParams {
    const additionalParams: { [key: string]: object } = {
      Bard: {
        magicalSecretsSpellSelection: [],
      },
      Ranger: {
        favoredEnemy: "",
        favoredTerrain: "",
      },
      Sorcerer: {
        metamagic: [],
      },
      Warlock: {
        pactBoon: {
          boon: "",
          options: [],
        },
        mysticArcanum: "",
        invocations: {
          add: [],
          remove: "",
        },
      },
      Wizard: {
        spellBookSpells: [],
        signatureSpells: [],
      },
    };

    const defaultParams = {
      isNoInput: true,
      abilityScoreImprovement: {
        abilities: [],
        value: "",
      },
      spellSelections: {
        add: [],
        remove: "",
      },
      proficiencySelection: [],
      toolProficiency: "",
      fightingStyles: [],
      subclassParams: CLISheetDriver.defaultSubclassParams(pClassName),
      featParams: CLISheetDriver.defaultFeatParams(),
    };

    return { ...defaultParams, ...additionalParams[pClassName] };
  }

  static defaultSubclassParams(pClassName: string): SubclassParams {
    const additionalParams: { [key: string]: object } = {
      Barbarian: {
        stormAura: "",
        totem: "",
      },
      Druid: {
        land: "",
      },
      Fighter: {
        arcaneShots: [],
        maneuverSelections: {
          add: [],
          remove: "",
        },
      },
      Monk: {
        disciplineSelections: {
          add: [],
          remove: "",
        },
      },
      Ranger: {
        feature: "",
        beastCompanion: "",
      },
      Rogue: {
        gamingSet: "",
      },
      Sorcerer: {
        affinity: "",
        draconicAncestry: "",
      },
    };

    const defaultParams = {
      name: "",
      spellSelections: {
        add: [],
        remove: "",
      },
      skillProficiencies: [],
      weapons: [],
      toolProficiencies: [],
      fightingStyles: [],
      languages: [],
      savingThrows: [],
    };

    return { ...defaultParams, ...additionalParams[pClassName] };
  }

  static defaultFeatParams(): FeatParams {
    return {
      name: "",
      abilityScore: "",
      spellClass: "",
      spells: [],
      languages: [],
      skills: [],
      tools: [],
      weaponProficiencies: [],
      element: "",
      maneuvers: [],
    };
  }

  static defaultCreationParams(): ClassCreationParams {
    return {
      multiclass: false,
      skillProficiencies: [],
      instrumentProficiencies: [],
      weapons: [],
      armor: [],
      toolProficiencies: [],
      equipmentPack: "",
      instrument: "",
      holySymbol: "",
      arcaneFocus: "",
      druidicFocus: "",
    };
  }

  static createCharacter() {
    console.log(
      "Welcome to Tbltp's DND Character Sheet Creator!\nEnter a character name:"
    );
    const name = prompt(">");
    const scores = CLISheetDriver.promptAbilityScores();
    const pc: PlayerCharacter = new PlayerCharacter(...scores);
    const race: Race = CLISheetDriver.raceHandler();
    const bg: Background = CLISheetDriver.backgroundHandler(pc);
    const pClass: PlayerClass = CLISheetDriver.pclassHandler(pc);

    let sheet: CharacterSheet = new CharacterSheet(name, pc, race, pClass, bg);
    CLISheetDriver.levelHandler(sheet);
    Jsonify.dumpToJSON(sheet, `test-${name}`);
  }

  static promptAbilityScores(): [
    number,
    number,
    number,
    number,
    number,
    number
  ] {
    const scores: string[] = [
      "Strength",
      "Dexterity",
      "Constitution",
      "Intelligence",
      "Wisdom",
      "Charisma",
    ];
    const values: [number, number, number, number, number, number] = [
      0,
      0,
      0,
      0,
      0,
      0,
    ];
    const scoreRange = [...Array(20).keys()].map((l) => l + 1 + "");

    Object.entries(scores).forEach(([ind, scoreName]) => {
      let scorePrompt = `Enter score for ${scoreName} (1-20):`;
      values[ind] = +CLISheetDriver.getInput(scoreRange, scorePrompt);
    });
    return values;
  }

  static getInput(choiceList: string[], userQ?: string): string {
    let invalid: boolean = true;
    let userChoice: string = "";
    const upperList = choiceList.map((ch) => ch.toUpperCase());
    const invMsg = `Invalid choice entered.  To skip this choice, enter nothing.  To quit the build, enter ^C (Ctrl+c).`;
    while (invalid) {
      if (userQ) console.log(userQ);
      console.log(
        upperList.sort((a, b) => a.localeCompare(b, "en", { numeric: true }))
      );
      console.log("Choice?");
      userChoice = prompt(">");

      let match: string = choiceList.find(
        (c) => c.toUpperCase() == userChoice.trim().toUpperCase()
      );
      if (match || !userChoice) {
        return match ? match : "";
      } else if (choiceList[0] == "Custom Entry") {
        return userChoice;
      } else {
        console.log(invMsg);
      }
    }
  }

  static promptChoice(
    key: string,
    selection: ChoiceSpec,
    resultObject: object,
    pc?: PlayerCharacter
  ): void {
    //pass by reference
    let injected: boolean = false;
    for (let i = 0; i < selection["choose"]; i++) {
      const description = `${selection["alias"]} (${i + 1} of ${
        selection["choose"]
      }):`;
      let choices: string[] = [];
      if (selection["from"]) {
        choices = selection["from"];
      } else if (selection["custom"]) {
        choices = ["Custom Entry"];
      } else {
        if(selection["needs"] && !injected) {
          selection.args = [resultObject[selection["needs"]], ...selection.args];
          injected = true;
        }
        const choiceParams = Choices.convertToParams(selection, pc);
        choices = Choices.functionRailRoad[selection["method"]](choiceParams);
      }
      let userChoice = CLISheetDriver.getInput(choices, description);
      if (!userChoice) continue;
      const paramType: string = typeof resultObject[key];
      if (paramType == "string") {
        resultObject[key] = userChoice;
      } else {
        let dups = 1;
        if (userChoice.match(/\w+\sX[0-9]/g)) {
          //multiple adds of same choice
          const splits = userChoice.split(" X");
          userChoice = splits[0];
          dups = +splits[1];
        }
        for (let i = 1; i <= dups; i++) {
          resultObject[key].push(userChoice);
        }
      }
    }
  }

  static choiceHandler(
    choicesSet: [key: string, selection: ChoiceSpec][],
    resultObject: object,
    pc?: PlayerCharacter
  ): void {
    //pass by reference
    for (const [key, selection] of choicesSet) {
      if (key.includes(`Selection`)) {
        if (key == "subclassSelection") {
          //subclass selection
          CLISheetDriver.promptChoice(
            "name",
            selection,
            resultObject["subclassParams"],
            pc
          );
        } else {
          //spells, battle maneuvers, elemental disciplines, eldritch invocations
          const spellChoiceSet: [
            key: string,
            selection: ChoiceSpec
          ][] = Object.entries(selection);
          const spellChoiceResult = resultObject[key];
          CLISheetDriver.choiceHandler(spellChoiceSet, spellChoiceResult, pc);
        }
      } else if (selection instanceof Array) {
        if (key == "or") {
          //or - meaning you pick between categories, then you select within them
          selection.forEach((category) => {
            const description = `${category["alias"]} (choose category):`;

            const choiceDict = {};
            Object.entries(category["categories"]).map(
              ([c, o]: [string, ChoiceSpec]) => {
                o.alias ? choiceDict[o.alias] = c : choiceDict[o[0].alias] = c;
              }
            );
            const choices = Object.keys(choiceDict);
            let userChoice =
              choiceDict[CLISheetDriver.getInput(choices, description)];
            const categorySelection: ChoiceSpec =
              category["categories"][userChoice];
            //hacky thing to remove underscore
            userChoice = userChoice.replace("_", "");
            CLISheetDriver.choiceHandler(
              [[userChoice, categorySelection]],
              resultObject,
              pc
            );
          });
        } else if (key == "and") {
          //and - meaning you pick between categories as a choice, and then use that choice later
          selection.forEach((category) => {
            const choiceSequence: [key: string, value: ChoiceSpec][] = Object.entries(category["categories"]);
            CLISheetDriver.choiceHandler(
              choiceSequence, resultObject, pc
            );
          });
        } else {
          selection.forEach((choice) => {
            CLISheetDriver.promptChoice(key, choice, resultObject, pc);
          });
        }
      } else if (Object.keys(selection).length !== 0) {
        //recurse
        CLISheetDriver.promptChoice(key, selection, resultObject, pc);
      }
    }
  }

  static raceHandler() {
    const raceSelection = CLISheetDriver.getInput(
      Choices.renderRaceChoices(),
      "Select your Race:"
    );

    let raceParams = CLISheetDriver.defaultRaceParams();
    const choicesSet = Choices.renderRaceSelectionChoices(raceSelection);
    CLISheetDriver.choiceHandler(choicesSet, raceParams);

    //console.log(raceParams);
    const race = new raceDict[raceSelection](raceParams);
    //console.log(race);
    return race;
  }

  static backgroundHandler(pc: PlayerCharacter) {
    const bgSelection = CLISheetDriver.getInput(
      Choices.renderBackgroundChoices(),
      "Select your Background:"
    );

    let bgParams = CLISheetDriver.defaultBackgroundParams();
    const choicesSet = Choices.renderBackgroundSelectionChoices(bgSelection);
    CLISheetDriver.choiceHandler(choicesSet, bgParams, pc);

    //console.log(bgParams);
    const bg = new bgDict[bgSelection](bgParams);
    //console.log(bg)

    return bg;
  }

  static pclassHandler(pc: PlayerCharacter, multiclassing?: boolean) {
    const pclassSelection = CLISheetDriver.getInput(
      Choices.renderClassChoices(),
      "Select your starting Class:"
    );

    //assume no multiclassing for now
    let pclassParams: ClassCreationParams = {
      ...CLISheetDriver.defaultCreationParams(),
      multiclass: multiclassing || false,
    };

    const choicesSet = Choices.renderClassChoicesAtLevel(pclassSelection, 0);
    CLISheetDriver.choiceHandler(choicesSet, pclassParams, pc);

    //console.log(pclassParams);
    const pclassInstance = new classDict[pclassSelection](pclassParams);
    //console.log(pclassInstance);
    return pclassInstance;
  }

  static levelHandler(sheet: CharacterSheet) {

    let pClass: PlayerClass = null;
    let pClassName: string = "";
    const currentClasses = Object.keys(sheet.levels);

    if(currentClasses.length == 1 && sheet.levels[currentClasses[0]].value == 0) {
      //must level up
      pClassName = currentClasses[0];
      pClass = sheet.playerClasses[pClassName];
    } else {

      //otherwise, player's choice
      const classPrompt = `Select class to level up in, or enter "Multiclass" to get a new class`;
      const classNames: string[] = [...Object.keys(sheet.playerClasses), "Multiclass"];
      pClassName = CLISheetDriver.getInput(classNames, classPrompt);
      
      if(pClassName == "Multiclass") {

        const pc: PlayerCharacter = sheet.character;
        pClass = CLISheetDriver.pclassHandler(pc, true);
        pClassName = pClass.name;
        sheet.multiClass(pClass);

      } else {
        pClass = sheet.playerClasses[pClassName];    
      }
    }
    

    let levelRange = [];
    for(let i = sheet.levels[pClassName].value + 1; i<= 20; i++) {
      levelRange.push(i + "");
    }  
    const levelPrompt = `Select level to go up to in ${pClassName} (1-20):`;
    const level = CLISheetDriver.getInput(levelRange, levelPrompt);
    const asifLevels: number[] = [4, 8, 12, 16, 19];

    for (let i = sheet.levels[pClassName].value + 1; i <= +level; i++) {
      console.log(`---${pClassName} Level ${i}---`);
      let pc: PlayerCharacter = sheet.character;
      let hpAdd: number = 0;
      if (i != 1) {
        //bonus hp
        const hpPrompt = `Enter amount to increase max HP by:`;
        const hpRange = [...Array(+pc.hitDie.slice(1)).keys()].map(
          (h) => h + 1 + ""
        );
        hpAdd = +CLISheetDriver.getInput(hpRange, hpPrompt);
      }
      let levelParams: LevelingParams = CLISheetDriver.defaultLevelingParams(
        pClassName
      );
      const classChoiceSet = Choices.renderClassChoicesAtLevel(pClassName, i);
      CLISheetDriver.choiceHandler(classChoiceSet, levelParams, pc);

      //subclass handling
      let subclassName: string = "";
      if (pClass.subclass) {
        subclassName = pClass.subclass.name;
      } else if (levelParams["subclassParams"]["name"]) {
        subclassName = levelParams["subclassParams"]["name"];
      }

      //subclass leveling
      const subclassChoiceSet = Choices.renderSubclassChoices(subclassName, i);
      CLISheetDriver.choiceHandler(
        subclassChoiceSet,
        levelParams["subclassParams"],
        pc
      );

      //ability score or feat
      if (asifLevels.includes(i)) {
        CLISheetDriver.asiOrFeatHandler(sheet, levelParams);
      }

      //console.log(levelParams);
      sheet.levelUp(pClassName, hpAdd, levelParams);
    }
  
  }

  static asiOrFeatHandler(sheet: CharacterSheet, levelParams: LevelingParams) {
    const asifPrompt = `Choose between Ability Score Improvement or Feat Choice:`;
    const asifChoices = [`Ability Score`, `Feat`];
    const asif = CLISheetDriver.getInput(asifChoices, asifPrompt);

    if (asif == "Feat") {
      const featSelection = CLISheetDriver.getInput(
        Choices.renderFeatChoices(),
        "Select a Feat:"
      );
      levelParams.featParams["name"] = featSelection;
      const featChoiceSet = Choices.renderFeatSelectionChoices(featSelection);
      CLISheetDriver.choiceHandler(
        featChoiceSet,
        levelParams["featParams"],
        sheet.character
      );
    } else {
      const asiChoiceSet = Choices.renderAbilityScoreChoices();
      CLISheetDriver.choiceHandler(
        asiChoiceSet,
        levelParams["abilityScoreImprovement"]
      );
      levelParams["abilityScoreImprovement"]["abilities"].length == 1
        ? (levelParams["abilityScoreImprovement"]["value"] = "2")
        : (levelParams["abilityScoreImprovement"]["value"] = "1");
    }
  }
}

CLISheetDriver.createCharacter()
/*
function testSubclasses() {
  const pc: PlayerCharacter = new PlayerCharacter(14, 14, 14, 14, 14, 14);
  const rc: Race = new raceDict["Tiefling"]();
  const bg: Background = new bgDict["Charlatan"]();
  const cls: PlayerClass = CLISheetDriver.pclassHandler(pc);
  const sheet: CharacterSheet = new CharacterSheet("Test", pc, rc, cls, bg);
  CLISheetDriver.levelHandler(sheet);

  Jsonify.dumpToJSON(sheet, `Test`);
}

function testASI() {
  const pc: PlayerCharacter = new PlayerCharacter(14, 14, 14, 14, 14, 14);
  const rc: Race = new raceDict["Tiefling"]();
  const bg: Background = new bgDict["Charlatan"]();
  const cls: PlayerClass = new classDict["Barbarian"]({
    multiclass: false,
    skillProficiencies: ["athletics", "intimidation"],
    weapons: ["GREATAXE", "CLUB"],
  });
  const sheet: CharacterSheet = new CharacterSheet("Test", pc, rc, cls, bg);
  CLISheetDriver.levelHandler(sheet);

  Jsonify.dumpToJSON(sheet, `Test`);
}

function testManeuvers() {
  const pc: PlayerCharacter = new PlayerCharacter(15, 15, 15, 15, 15, 15);
  const rc: Race = new raceDict["Wood Elf"]();
  const bg: Background = new bgDict["Soldier"]({
    gamingSet: "Dice set",
  });
  const cls: PlayerClass = new classDict["Fighter"]({
    multiclass: false,
    skillProficiencies: ["athletics", "acrobatics"],
    weapons: ["LONGSWORD", "MAUL", "CROSSBOW, LIGHT"],
    armor: ["LEATHER"],
    equipmentPack: "DUNGEONEER",
  });
  const sheet: CharacterSheet = new CharacterSheet("Test", pc, rc, cls, bg);
  CLISheetDriver.levelHandler(sheet);

  Jsonify.dumpToJSON(sheet, `Test`);
}

function testClass() {
  const pc: PlayerCharacter = new PlayerCharacter(15, 15, 15, 15, 15, 15);
  const rc: Race = new raceDict["Wood Elf"]();
  const bg: Background = new bgDict["Soldier"]({
    gamingSet: "Dice set",
  });
  const cls: PlayerClass = CLISheetDriver.pclassHandler(pc);
  const sheet: CharacterSheet = new CharacterSheet("Test", pc, rc, cls, bg);
  CLISheetDriver.levelHandler(sheet);

  Jsonify.dumpToJSON(sheet, `Test`);
}

function testMultiClassing() {
  const pc: PlayerCharacter = new PlayerCharacter(14, 14, 14, 14, 14, 14);
  const rc: Race = new raceDict["Tiefling"]();
  const bg: Background = new bgDict["Charlatan"]();
  const cls: PlayerClass = new classDict["Barbarian"]({
    multiclass: false,
    skillProficiencies: ["athletics", "intimidation"],
    weapons: ["GREATAXE", "CLUB"],
  });
  const sheet: CharacterSheet = new CharacterSheet("Test", pc, rc, cls, bg);
  CLISheetDriver.levelHandler(sheet);
  CLISheetDriver.levelHandler(sheet);
  CLISheetDriver.levelHandler(sheet);

  Jsonify.dumpToJSON(sheet, `Test`);
}
*/