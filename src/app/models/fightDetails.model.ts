import {ParticipantDetailsModel} from "./participantDetails.model";

export interface FightDetailsModel {
  id_fight: number;
  participants: ParticipantDetailsModel[];
}
