import AppointmentOptions from "./AppointmentOptions";
import PatientDetails from "./PatientDetails";
import type { BookingProps } from "./bookingProps";

const BookingForm = ({ draft, updateDraft }: BookingProps) => {
  return (
    <div className="booking-form">
      <AppointmentOptions draft={draft} updateDraft={updateDraft} />
      <PatientDetails draft={draft} updateDraft={updateDraft} />
    </div>
  );
};

export default BookingForm;
