import Container from "./Containers/Container";
import { Link } from "react-router-dom";
import GroupCard from "./ReviewCard";
import { useState } from "react";
import Modal from "./Modal";

function Group() {
  const [show, setShow] = useState(false);
  const [booked, setBooked] = useState(false);

  const onSubmit = () => {
    setBooked(true);
    setShow(false);
  };

  const reviewSessions = [
    ["MATH 101", "COR A101", 226, "11:30 - 12:30"],
    ["SENG 310", "ECS A125", 89, "12:00 - 1:30"],
    ["CSC 225", "HSD A120", 46, "1:00 - 3:00"],
    ["SENG 275", "COR A143", 12, "3:00 - 4:00"],
  ];

  return (
    <Container>
      <Link to="/" className="underline">
        Back
      </Link>
      <h1 className="text-center my-4 text-3xl text-bold w-full">
        Group Sessions
      </h1>
      <div className="flex justify-center">
        <button
          className="whitespace-nowrap bg-purple-600 text-center text-white rounded-full mb-8 px-2 py-1"
          onClick={() => setShow(true)}
        >
          + Create a Group Session
        </button>
      </div>
      <Modal onSubmit={onSubmit} onClose={() => setShow(false)} show={show} />
      {reviewSessions.map((session) => {
        return (
          <GroupCard
            subject={session[0]}
            room={session[1]}
            count={session[2]}
            time={session[3]}
          />
        );
      })}
      {booked ? (
        <div className="flex bg-white rounded items-center p-2 my-4 shadow-md">
          <div className="w-full">
            <h2 className="text-lg w-full">CHEM 101 group 12:30 - 2:30</h2>
            <p className="text-xs w-full">BWC A150</p>
            <p className="pt-4">1 / 300</p>
          </div>
          <div className="mr-4">
            <button
              onClick={() => setBooked(false)}
              className="w-24 p-2 rounded bg-red-600 text-white"
            >
              {" "}
              Remove Session{" "}
            </button>
          </div>
        </div>
      ) : null}
    </Container>
  );
}

export default Group;
