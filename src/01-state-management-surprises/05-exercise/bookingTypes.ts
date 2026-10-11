export type AppointmentDraft = {
  service: string;
  provider: string;
  date: string;
  time: string;
  patientName: string;
  email: string;
};

export const SERVICES = [
  { id: "general", name: "General consultation", duration: 30, price: 85 },
  { id: "physio", name: "Physiotherapy assessment", duration: 45, price: 120 },
  { id: "nutrition", name: "Nutrition consultation", duration: 60, price: 95 },
];

export const PROVIDERS = ["Dr. Maya Patel", "Dr. Noah Williams", "Dr. Sofia Chen"];

export const APPOINTMENT_TIMES = ["09:00", "10:30", "13:00", "14:30", "16:00"];

export const EMPTY_APPOINTMENT: AppointmentDraft = {
  service: "",
  provider: "",
  date: "",
  time: "",
  patientName: "",
  email: "",
};
