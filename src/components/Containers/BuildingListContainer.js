import BuildingCard from "../BuildingCard";

function BuildingListContainer() {
  return (
    <div className={`flex flex-wrap w-full justify-between content-between`}>
      {[
        "Bob Wright Centre",
        "David Turpin Building",
        "Petch Building",
        "MacLaurin Building",
        "Cornett Building",
        "Engineering and Computer Science Building",
        "Engineering Lab Wing",
        "David Strong Building",
        "Human and Social Development Building",
        "Elliott Building",
        "Business and Economics Building",
        "Clearihue Building",
      ].map((building) => {
        return <BuildingCard name={building} />;
      })}
    </div>
  );
}

export default BuildingListContainer;
