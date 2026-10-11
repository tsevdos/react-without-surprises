import type { BookingProps } from "./bookingProps";

const PatientDetails = ({ draft, updateDraft }: BookingProps) => {
  return (
    <section className="booking-section">
      <h2>3. Your details</h2>
      <div className="booking-fields">
        <div className="form-group">
          <label htmlFor="patient-name">Full name</label>
          <input
            className="form-input"
            id="patient-name"
            autoComplete="name"
            value={draft.patientName}
            onChange={(event) => updateDraft("patientName", event.target.value)}
            placeholder="Alex Morgan"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="patient-email">Email address</label>
          <input
            className="form-input"
            id="patient-email"
            type="email"
            autoComplete="email"
            value={draft.email}
            onChange={(event) => updateDraft("email", event.target.value)}
            placeholder="alex@example.com"
            required
          />
        </div>
      </div>
    </section>
  );
};

export default PatientDetails;
