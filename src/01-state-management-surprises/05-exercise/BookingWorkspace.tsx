import BookingForm from "./BookingForm";
import BookingSummary from "./BookingSummary";
import type { BookingWorkspaceProps } from "./bookingProps";

const BookingWorkspace = ({ draft, updateDraft, onConfirm, confirmed }: BookingWorkspaceProps) => {
  return (
    <form className="appointment-workspace" onSubmit={onConfirm}>
      <BookingForm draft={draft} updateDraft={updateDraft} />
      <BookingSummary draft={draft} confirmed={confirmed} />
    </form>
  );
};

export default BookingWorkspace;
