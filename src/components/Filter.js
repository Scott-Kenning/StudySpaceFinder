function Filter() {
  const options = [
    {
      label: "Sort by Time Available",
      value: "time",
    },
    {
      label: "Sort by Size",
      value: "size",
    },
    {
      label: "Sort by Duration",
      value: "duration",
    },
  ];

  return (
    <div className="w-full">
      <select className="bg-gray-100 border-2 border-gray-400 w-min">
        {options.map((option) => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </select>
    </div>
  );
}

export default Filter;
