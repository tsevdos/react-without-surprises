import { APPOINTMENT_TIMES } from "./bookingTypes";
import type { BookingProps } from "./bookingProps";

const SchedulePicker = ({ draft, updateDraft }: BookingProps) => {
  return (
    <section className="booking-section">
      <h2>2. Pick a time</h2>
      <div className="booking-fields">
        <div className="form-group">
          <label htmlFor="appointment-date">Date</label>
          <input
            className="form-input"
            id="appointment-date"
            type="date"
            value={draft.date}
            onChange={(event) => updateDraft("date", event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="appointment-time">Available time</label>
          <select
            className="form-input"
            id="appointment-time"
            value={draft.time}
            onChange={(event) => updateDraft("time", event.target.value)}
            required
          >
            <option value="">Select a time</option>
            {APPOINTMENT_TIMES.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default SchedulePicker;
