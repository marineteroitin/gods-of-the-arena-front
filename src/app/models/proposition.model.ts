import {GladiatorTypeModel} from "./gladiatorType.model";

export interface PropositionModel {
  id_proposition: number;
  animal: boolean;
  gladiatorType1: number;
  name_gladiatortype1: string;
  gladiatorType2: number;
  name_gladiatortype2: string;
}
