import SchedulePicker from "./SchedulePicker";
import ServicePicker from "./ServicePicker";
import type { BookingProps } from "./bookingProps";

const AppointmentOptions = ({ draft, updateDraft }: BookingProps) => {
  return (
    <>
      <ServicePicker draft={draft} updateDraft={updateDraft} />
      <SchedulePicker draft={draft} updateDraft={updateDraft} />
    </>
  );
};

export default AppointmentOptions;
