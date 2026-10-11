import { PROVIDERS, SERVICES } from "./bookingTypes";
import type { BookingProps } from "./bookingProps";

const ServicePicker = ({ draft, updateDraft }: BookingProps) => {
  return (
    <section className="booking-section">
      <h2>1. Choose a service</h2>
      <div className="booking-fields">
        <div className="form-group">
          <label htmlFor="appointment-service">Appointment type</label>
          <select
            className="form-input"
            id="appointment-service"
            value={draft.service}
            onChange={(event) => updateDraft("service", event.target.value)}
            required
          >
            <option value="">Select a service</option>
            {SERVICES.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name} · {service.duration} min
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="appointment-provider">Preferred provider</label>
          <select
            className="form-input"
            id="appointment-provider"
            value={draft.provider}
            onChange={(event) => updateDraft("provider", event.target.value)}
            required
          >
            <option value="">Choose a provider</option>
            {PROVIDERS.map((provider) => (
              <option key={provider} value={provider}>
                {provider}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default ServicePicker;
