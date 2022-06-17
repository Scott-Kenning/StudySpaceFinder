import { useState } from "react";
import Modal from "./Modal";

function GroupCard(props) {
  const [joined, setJoined] = useState(false);
  const [count, setCount] = useState(props.count || 0);

  const onClick = () => {
    if (joined) {
      setCount(count - 1);
      setJoined(!joined);
    } else {
      setCount(count + 1);
      setJoined(!joined);
    }
  };

  return (
    <div className="flex bg-white rounded items-center p-2 my-4 shadow-md">
      <div className="w-full">
        <h2 className="text-lg w-full">
          {props.subject} group {props.time}
        </h2>
        <p className="text-xs w-full">{props.room}</p>
        <p className="pt-4">{count} / {count > 120 ? "300" : count > 30 ? "120" : "30"}</p>
      </div>
      <div className="mr-4">
        {!joined ? (
          <button onClick={onClick} className="w-24 p-2 rounded bg-gray-300">
            {" "}
            Join{" "}
          </button>
        ) : (
          <button
            onClick={onClick}
            className="w-24 p-2 rounded bg-red-600 text-white"
          >
            {" "}
            Leave{" "}
          </button>
        )}
      </div>
    </div>
  );
}

export default GroupCard;
