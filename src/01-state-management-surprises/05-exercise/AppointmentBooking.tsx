import { useState, type SubmitEvent } from "react";
import Header from "../../components/Header/Header";
import BookingWorkspace from "./BookingWorkspace";
import { EMPTY_APPOINTMENT, type AppointmentDraft } from "./bookingTypes";
import "./AppointmentBooking.css";

const AppointmentBooking = () => {
  const [draft, setDraft] = useState(EMPTY_APPOINTMENT);
  const [confirmed, setConfirmed] = useState(false);

  const updateDraft = (field: keyof AppointmentDraft, value: string) => {
    setDraft((currentDraft) => ({ ...currentDraft, [field]: value }));
    setConfirmed(false);
  };

  const confirmBooking = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="appointment-booking">
      <Header
        sectionName="State Management Surprises"
        title="Appointment booking — exercise 2"
        tooltip="When data and callbacks pass through components that do not use them, component APIs become harder to maintain. Simplify the flow while keeping ownership clear."
      />
      <BookingWorkspace draft={draft} updateDraft={updateDraft} onConfirm={confirmBooking} confirmed={confirmed} />
    </div>
  );
};

export default AppointmentBooking;
