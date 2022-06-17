import { useState } from "react";
import Modal from "./Modal";

function Card(props) {
  const [booked, setBooked] = useState(false);

  const getSeating = () => {
    return 120;
  };

  const getNextAvailable = () => {
    return "10:30 - 11:30";
  };

  const nextAvailable = getNextAvailable();
  const seats = getSeating();

  return (
    <div className="w-full flex items-center bg-white rounded shadow-md my-2">
      <div className="flex w-full flex-wrap p-2">
        <h2 className="text-lg text-extrabold w-full">
          {`${props.building} ${props.room} ${booked ? "(Booked)" : ""}`}
        </h2>
        <p className="text-xs">{seats} Seats Available</p>
        <p className="w-full pt-4">Available from {nextAvailable}</p>
      </div>
      {booked ? (
        <button
          onClick={() => setBooked(false)}
          className="bg-red-700 rounded text-white w-32 md:mr-10 mr-2 p-2"
        >
          Cancel
        </button>
      ) : (
        <button
          onClick={() => setBooked(true)}
          className="bg-gray-300 rounded w-32 shadow-sm md:mr-10 mr-2 p-2"
        >
          Book
        </button>
      )}
      {/* <Modal show={show} onClose={() => setShow(false)} onSubmit={onSubmit} /> */}
    </div>
  );
}

export default Card;
