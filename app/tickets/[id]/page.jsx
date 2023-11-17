import TicketForm from "@/app/(components)/TicketForm";

const URL = process.env.NEXT_PUBLIC_URL;

const getTicketById = async (id) => {
  const res = await fetch(`${URL}/api/tickets/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to get ticket.");
  }

  return res.json();
};

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updateTicket = {};

  if (EDITMODE) {
    updateTicket = await getTicketById(params.id);
    updateTicket = updateTicket.foundTicket;
  } else {
    updateTicket = {
      _id: "new",
    };
  }

  return <TicketForm ticket={updateTicket} />;
};

export default TicketPage;
