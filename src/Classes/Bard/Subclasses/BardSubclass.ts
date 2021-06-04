import { Subclass, SubclassParams } from "../../Subclass";
import { CollegeOfGlamour } from "./Glamour/CollegeOfGlamour";
import { CollegeOfLore } from "./Lore/CollegeOfLore";
import { CollegeOfSwords } from "./Swords/CollegeOfSwords";
import { CollegeOfValor } from "./Valor/CollegeOfValor";
import { CollegeOfWhispers } from "./Whispers/CollegeOfWhispers";
import { CollegeOfCreation } from "./Creation/CollegeOfCreation";

export class BardSubclass extends Subclass {

  constructor(subclassSelection: SubclassParams){
    super(subclassSelection);
  }

  subclassDictionary = {
    LORE: {
      "3": CollegeOfLore.lore3,
      "6": CollegeOfLore.lore6,
      "14": CollegeOfLore.lore14,
    },
    VALOR: {
      "3": CollegeOfValor.valor3,
      "6": CollegeOfValor.valor6,
      "14": CollegeOfValor.valor14,
    },
    WHISPERS: {
      "3": CollegeOfWhispers.whispers3,
      "5": CollegeOfWhispers.whispers5,
      "6": CollegeOfWhispers.whispers6,
      "10": CollegeOfWhispers.whispers10,
      "14": CollegeOfWhispers.whispers14,
      "15": CollegeOfWhispers.whispers15,
    },
    SWORDS: {
      "3": CollegeOfSwords.swords3,
      "6": CollegeOfSwords.swords6,
      "14": CollegeOfSwords.swords14,
    },
    CREATION: {
      "3": CollegeOfCreation.creation3,
      "6": CollegeOfCreation.creation6,
      "14": CollegeOfCreation.creation14,
    },
    GLAMOUR: {
      "3": CollegeOfGlamour.glamour3,
      "5": CollegeOfGlamour.upMantle,
      "6": CollegeOfGlamour.glamour6,
      "10": CollegeOfGlamour.upMantle,
      "14": CollegeOfGlamour.glamour14,
      "15": CollegeOfGlamour.upMantle,
    }
  };
}