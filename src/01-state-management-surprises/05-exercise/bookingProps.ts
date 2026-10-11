import type { SubmitEventHandler } from "react";
import type { AppointmentDraft } from "./bookingTypes";

export type BookingProps = {
  draft: AppointmentDraft;
  updateDraft: (field: keyof AppointmentDraft, value: string) => void;
};

export type BookingWorkspaceProps = BookingProps & {
  onConfirm: SubmitEventHandler<HTMLFormElement>;
  confirmed: boolean;
};
