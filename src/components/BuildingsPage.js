import BuildingListContainer from "./Containers/BuildingListContainer";
import { Link } from "react-router-dom";
import Container from "./Containers/Container";

function BuildingsPage() {
    return (
        <Container>
            <div className="flex flex-wrap justify-center">
                <h1 className="text-center mt-4 text-3xl text-bold w-full">Select a building to search in</h1>
                <p className="text-center text-sm w-full mb-8"> Or look through <Link to="/" className="text-blue-500">All classrooms</Link></p>
                <BuildingListContainer/>
            </div>
        </Container>
    )
}

export default BuildingsPage;