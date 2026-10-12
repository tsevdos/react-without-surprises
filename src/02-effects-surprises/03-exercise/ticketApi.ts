export type TicketStatus = "open" | "closed";

export type Ticket = {
  id: number;
  title: string;
  description: string;
  status: TicketStatus;
  requester: string;
};

export type TicketSummary = Pick<Ticket, "id" | "title" | "status">;

const API_URL = "http://localhost:3001/tickets";

export async function getTickets(statusFilter: TicketStatus | "all"): Promise<TicketSummary[]> {
  const query = statusFilter === "all" ? "" : `?status=${statusFilter}`;
  const response = await fetch(`${API_URL}${query}`);
  if (!response.ok) {
    throw new Error(`Failed to load tickets (${response.status})`);
  }

  const tickets: Ticket[] = await response.json();
  return tickets.map(({ id, title, status }) => ({ id, title, status }));
}

export async function getTicket(id: number): Promise<Ticket> {
  const response = await fetch(`${API_URL}/${id}`);
  if (response.status === 404) {
    throw new Error(`Ticket ${id} not found`);
  }
  if (!response.ok) {
    throw new Error(`Failed to load ticket ${id} (${response.status})`);
  }
  return response.json();
}

export async function updateTicketStatus(id: number, status: TicketStatus): Promise<void> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  if (!response.ok) {
    throw new Error(`Failed to update ticket ${id} (${response.status})`);
  }
}
