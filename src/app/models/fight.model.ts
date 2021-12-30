import {ParticipantModel} from "./participant.model";

export interface FightModel {
  fight: {
    id_fight: number;
    date_fight: Date;
  };

  participants: ParticipantModel[];

}
