import { useState } from "react";
import ClassCard from "../ClassCard";
import Filter from "../Filter";

function ListContainer(props) {
  const [filter, setFilter] = useState("time")

  const getClassrooms = (building) => {
    if(building == "all") {
      return ["A101", "A110", "A120", "A125", "A128", "A150"];
    }
    
    if (filter == "size") {
      return ["A101", "A110", "A120", "A125", "A128", "A150"];
    } else if (filter == "duration") {
      return ["A101", "A110", "A120", "A125", "A128", "A150"];
    } else {
      return ["A101", "A110", "A120", "A125", "A128", "A150"];
    }
  };

  const classRooms = getClassrooms(props.building);

  return (
    <div className="flex flex-wrap mt-24 w-full max-w-screen">
      <Filter onChange={setFilter} />
      {classRooms.map((room) => {
        return <ClassCard building={props.building} room={room} />;
      })}
    </div>
  );
}

export default ListContainer;
