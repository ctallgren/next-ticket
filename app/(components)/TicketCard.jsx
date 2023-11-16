import Link from "next/link";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ ticket }) => {
  const formatTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour24: true,
    };

    const date = new Date(timestamp);
    const createdDate = date.toLocaleString("fi-FI", options);

    return createdDate;
  };

  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3 justify-between">
        <PriorityDisplay priority={ticket.priority} />
        <DeleteBlock id={ticket._id} />
      </div>
      <Link href={`/tickets/${ticket._id}`} style={{ display: "contents" }}>
        <h4>{ticket.title}</h4>
        <hr className="h-px border-0 bg-card-light my-3" />
        <p className="whitespace-pre-wrap">{ticket.description}</p>
        <div className="flex-grow" />
        <hr className="h-px border-0 bg-card-light my-3" />
        <div className="flex">
          <div className="flex flex-col">
            <p className="text-xs my-1">
              Created: {formatTimestamp(ticket.createdAt)}
            </p>
            <p className="text-xs my-1">
              Last update: {formatTimestamp(ticket.updatedAt)}
            </p>
          </div>
          <div className="ml-auto item-end py-2">
            <StatusDisplay status={ticket.status} />
            <ProgressDisplay progress={ticket.progress} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
