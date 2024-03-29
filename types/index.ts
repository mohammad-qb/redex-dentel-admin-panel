import { HandleSearchPageName, ReservationStatus } from "../enum";

export type ReservationStatusTypes =
  | ReservationStatus.PENDING
  | ReservationStatus.APPROVED
  | ReservationStatus.CANCELED
  | ReservationStatus.DECLINED;

export type HandleSearchPageNameTypes =
  | HandleSearchPageName.DOCTORS
  | HandleSearchPageName.PATIENTS
  | HandleSearchPageName.RESERVATIONS
  | HandleSearchPageName.REPORTS;

export type citiesOperationTypes =
  | "ADD"
  | "UPDATE"
  | "ACTIVATE"
  | "DEACTIVATE"
  | "NONE";

export type ReportOperationTypes = "ADD" | "UPDATE" | "DELETE" | "NONE";
