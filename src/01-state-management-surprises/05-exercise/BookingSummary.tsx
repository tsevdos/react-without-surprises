import { SERVICES, type AppointmentDraft } from "./bookingTypes";

type BookingSummaryProps = {
  draft: AppointmentDraft;
  confirmed: boolean;
};

const BookingSummary = ({ draft, confirmed }: BookingSummaryProps) => {
  const service = SERVICES.find((option) => option.id === draft.service);

  return (
    <aside className="booking-summary" aria-live="polite">
      <h2>Booking summary</h2>
      <dl>
        <div>
          <dt>Service</dt>
          <dd>{service?.name ?? "Not selected"}</dd>
        </div>
        <div>
          <dt>Provider</dt>
          <dd>{draft.provider || "Not selected"}</dd>
        </div>
        <div>
          <dt>Date and time</dt>
          <dd>{draft.date && draft.time ? `${draft.date} at ${draft.time}` : "Not selected"}</dd>
        </div>
        <div className="booking-total">
          <dt>Estimated fee</dt>
          <dd>{service ? `$${service.price}` : "—"}</dd>
        </div>
      </dl>
      <button className="submit-button booking-submit" type="submit">
        Confirm appointment
      </button>
      {confirmed && <p className="booking-confirmation">Appointment confirmed for {draft.patientName}.</p>}
    </aside>
  );
};

export default BookingSummary;
