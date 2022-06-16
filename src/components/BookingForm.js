import { useState } from "react";

function BookingForm(props) {
  const [sharing, setSharing] = useState(false);
  return (
    <form>
      <div className="flex content-between rounded bg-gray-200 w-full p-1">
        <label for="start-time" className="w-full">
          Book from:
        </label>
        <select name="start-time">
          <option>11:30</option>
          <option>12:00</option>
          <option>12:30</option>
          <option>1:00</option>
          <option>1:30</option>
        </select>
      </div>
      <div className="flex content-between rounded bg-gray-200 w-full p-1 my-2">
        <label for="start-time" className="w-full">
          Until:
        </label>
        <select name="start-time">
          <option>12:00</option>
          <option>12:30</option>
          <option>1:00</option>
          <option>1:30</option>
          <option>2:00</option>
          <option>2:30</option>
        </select>
      </div>
      <div className="flex content-between rounded bg-gray-200 w-full p-1 my-2">
        <label for="start-time" className="w-full">
          Subject:
        </label>
        <select name="start-time">
          <option>CHEM 101</option>
          <option>ECE 260</option>
          <option>SENG 310</option>
          <option>CSC 225</option>
          <option>ENGR 141</option>
        </select>
      </div>
      <div className="flex content-between rounded bg-gray-200 w-full p-1 my-2">
        <label for="start-time" className="w-full">
          Minimum Seating:
        </label>
        <select name="start-time">
          <option>10</option>
          <option>30</option>
          <option>60</option>
          <option>120</option>
          <option>300</option>
        </select>
      </div>
      <div className="flex content-between rounded bg-gray-200 w-full p-1 my-2">
        <label for="start-time" className="w-full">
          Classroom:
        </label>
        <select name="start-time">
          <option>DTP A110</option>
          <option>BWC A150</option>
          <option>HSD A240</option>
          <option>ECS A123</option>
        </select>
      </div>
    </form>
  );
}

export default BookingForm;
