import { Link } from "react-router-dom";

function BuildingCard(props) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 block">
      <div className="h-32 bg-white m-2 rounded shadow-md flex items-center justify-center">
        <Link
          to={`/classrooms?building=${props.name}`}
          className="text-bold text-lg text-center pb-4 h-min"
        >
          {props.name || "Fail"}
        </Link>
      </div>
    </div>
  );
}

export default BuildingCard;
