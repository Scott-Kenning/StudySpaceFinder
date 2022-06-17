import ClassroomListContainer from "./Containers/ClassroomListContainer";
import Container from "./Containers/Container";
import { Link, useLocation } from "react-router-dom";
import React from "react";
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function ClassroomsPage() {
  const building = useQuery().get("building");

  return (
    <Container>
      <Link to="/" className="underline">
        Back
      </Link>
      <h1 className="text-3xl w-full text-center my-4">
        {building || "All Classrooms"}
      </h1>
      <ClassroomListContainer building={building} />
    </Container>
  );
}

export default ClassroomsPage;
