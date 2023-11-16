import { faHome, faPlus, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
          <span className="ml-2 text-default-text">Home</span>
        </Link>
        <Link href="/tickets">
          <FontAwesomeIcon icon={faTicket} className="icon" />
          <span className="ml-2 text-default-text">View Tickets</span>
        </Link>
        <Link href="/tickets/new">
          <FontAwesomeIcon icon={faPlus} className="icon" />
          <span className="ml-2 text-default-text">Add New Ticket</span>
        </Link>
      </div>
      <div>
        <p className="text-default-text">fixer@example.com</p>
      </div>
    </nav>
  );
};

export default Nav;
