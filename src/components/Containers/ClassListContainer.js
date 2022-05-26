import ClassCard from "../ClassCard";
import Filter from "../Filter";

function ListContainer() {
    return (
        <div className="flex flex-wrap mt-36 w-full max-w-screen">
            <Filter/>
            <ClassCard/>
            <ClassCard/>
            <ClassCard/>
            <ClassCard/>
            <ClassCard/>
            <ClassCard/>
            <ClassCard/>
        </div>
    )
}

export default ListContainer;