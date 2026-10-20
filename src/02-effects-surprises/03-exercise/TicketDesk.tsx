import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import {
  getTickets,
  getTicket,
  updateTicketStatus,
  type Ticket,
  type TicketSummary,
  type TicketStatus,
} from "./ticketApi";
import "./TicketDesk.css";

type StatusFilter = TicketStatus | "all";

export default function TicketDesk() {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [tickets, setTickets] = useState<TicketSummary[]>([]);
  const [ticketsLoading, setTicketsLoading] = useState(true);
  const [ticketsError, setTicketsError] = useState<string | null>(null);
  const [ticketCount, setTicketCount] = useState(0);

  const [selectedTicketId, setSelectedTicketId] = useState<number | null>(null);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [ticketLoading, setTicketLoading] = useState(false);
  const [ticketError, setTicketError] = useState<string | null>(null);

  const [newStatus, setNewStatus] = useState<TicketStatus | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  // 1. fetch the tickets
  useEffect(() => {
    setTicketsLoading(true);
    setTicketsError(null);
    getTickets(statusFilter)
      .then((data) => setTickets(data))
      .catch((error) => setTicketsError(error.message))
      .finally(() => setTicketsLoading(false));
  }, [statusFilter, refreshKey]);

  // 2. Set the tickets count
  useEffect(() => {
    setTicketCount(tickets.length);
  }, [tickets]);

  // 3. Display the selected ticket
  useEffect(() => {
    setSelectedTicketId(null);
  }, [statusFilter]);

  // 4. Fetch the selected ticket details
  useEffect(() => {
    if (selectedTicketId === null) {
      setSelectedTicket(null);
      return;
    }

    setTicketLoading(true);
    setTicketError(null);
    getTicket(selectedTicketId)
      .then((data) => setSelectedTicket(data))
      .catch((error) => setTicketError(error.message))
      .finally(() => setTicketLoading(false));
  }, [selectedTicketId, refreshKey]);

  // 5. fetch filtered tickets with the appropriate status (and log a side effect)
  useEffect(() => {
    if (newStatus === null || selectedTicketId === null) {
      return;
    }

    updateTicketStatus(selectedTicketId, newStatus)
      .then(() => setRefreshKey((key) => key + 1))
      .finally(() => setNewStatus(null));

    console.log("Status change requested:", newStatus);
  }, [newStatus, selectedTicketId]);

  return (
    <>
      <Header
        sectionName="Effects Surprises"
        title="Ticket desk — exercise 3"
        tooltip="Separate user-triggered actions from synchronization with external systems, and avoid duplicating request lifecycle management in the interface."
      />
      <div className="ticket-desk-container">
        <div className="ticket-desk-toolbar">
          <label>
            Status{" "}
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}>
              <option value="all">All</option>
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </select>
          </label>
          {!ticketsLoading && <span className="ticket-badge">{ticketCount} tickets</span>}
        </div>

        <div className="ticket-desk-layout">
          <section className="ticket-list-section">
            <h2>Tickets</h2>
            {ticketsLoading && <p className="ticket-muted">Loading tickets...</p>}
            {ticketsError && <p className="ticket-error">{ticketsError}</p>}
            {!ticketsLoading && !ticketsError && tickets.length === 0 && (
              <p className="ticket-muted">No tickets found.</p>
            )}
            {!ticketsLoading && !ticketsError && (
              <ul className="ticket-list">
                {tickets.map((ticket) => (
                  <li key={ticket.id}>
                    <button
                      type="button"
                      className={`ticket-row ${ticket.id === selectedTicketId ? "selected" : ""}`}
                      aria-pressed={ticket.id === selectedTicketId}
                      onClick={() => setSelectedTicketId(ticket.id)}
                    >
                      <span className="ticket-title">{ticket.title}</span>
                      <span className="ticket-meta">
                        <span className={`ticket-status ${ticket.status}`}>{ticket.status}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="ticket-detail-section">
            {selectedTicketId === null && <p className="ticket-muted">Select a ticket to see its details.</p>}
            {selectedTicketId !== null && ticketLoading && <p className="ticket-muted">Loading ticket...</p>}
            {selectedTicketId !== null && ticketError && <p className="ticket-error">{ticketError}</p>}
            {selectedTicketId !== null && !ticketLoading && !ticketError && selectedTicket && (
              <>
                <h2>{selectedTicket.title}</h2>
                <p className="ticket-meta">
                  Opened by {selectedTicket.requester} ·{" "}
                  <span className={`ticket-status ${selectedTicket.status}`}>{selectedTicket.status}</span>
                </p>
                <p>{selectedTicket.description}</p>

                <button
                  className="ticket-action"
                  onClick={() => setNewStatus(selectedTicket.status === "open" ? "closed" : "open")}
                  disabled={newStatus !== null}
                >
                  {newStatus === null
                    ? selectedTicket.status === "open"
                      ? "Close ticket"
                      : "Reopen ticket"
                    : "Saving..."}
                </button>
              </>
            )}
          </section>
        </div>
      </div>
    </>
  );
}
