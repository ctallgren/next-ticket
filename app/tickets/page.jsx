import TicketCard from "../../app/(components)/TicketCard";

export const dynamic = "force-dynamic";

const URL = process.env.NEXT_PUBLIC_URL;

const getTickets = async () => {
  try {
    const res = await fetch(`${URL}/api/tickets`, {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log("Failed to get tickets", error);
  }
};

export default async function Dashboard() {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, index) => (
            <div key={index} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="md:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
