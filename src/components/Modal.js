import BookingForm from "./BookingForm";

function Modal(props) {
  return !props.show ? null : (
    <div
      onClick={props.onClose}
      className="fixed bg-black bg-opacity-50 flex items-center justify-center inset-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="rounded-lg w-96 bg-white shadow-2xl overflow-hidden"
      >
        <div className="bg-purple-600 p-2 px-4 border-b border-gray-500">
          <h4 className="text-white text-lg">A101</h4>
        </div>
        <div className="px-10 pt-2">
          <div className="flex flex-wrap pb-6">
            <div className="border border-black rounded-full w-4 mr-2 text-center text-xs"><p>i</p></div>
            <p className="text-xs">You must be signed in to create a group session</p>
          </div>
          <BookingForm />
        </div>
        <div className="flex p-4 px-10 justify-between w-full">
          <button
            className="w-24 shadow bg-gray-400 text-white rounded-md"
            onClick={props.onClose}
          >
            Cancel
          </button>
          <button
            className="w-24 shadow bg-green-600 text-white rounded-md"
            onClick={props.onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
