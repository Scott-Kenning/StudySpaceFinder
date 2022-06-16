import ClassCard from "../ClassCard";
import Filter from "../Filter";

function ListContainer(props) {
  const getClassrooms = (building) => {
    return ["A101", "A110", "A120", "A125", "A128", "A150"];
  };

  const classRooms = getClassrooms(props.building);

  return (
    <div className="flex flex-wrap mt-24 w-full max-w-screen">
      <Filter />
      {classRooms.map((room) => {
        return <ClassCard building={props.building} room={room} />;
      })}
    </div>
  );
}

export default ListContainer;
