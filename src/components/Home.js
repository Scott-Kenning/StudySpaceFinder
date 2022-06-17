import Container from "./Containers/Container";
import BuildingListContainer from "./Containers/BuildingListContainer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container>
      <div className="flex flex-wrap justify-center">
        <h1 className="text-center mt-10 text-2xl sm:text-3xl text-bold w-full">
          Select a building to search in
        </h1>
        <p className="text-center text-sm w-full mb-8">
          Or look at{" "}
          <Link to="/group" className="text-blue-500">
            Group Sessions
          </Link>
        </p>
        <BuildingListContainer />
      </div>
    </Container>
  );
}

export default Home;
