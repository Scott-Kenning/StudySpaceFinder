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
        <div className="p-10">
          <BookingForm />
        </div>
        <div className="flex text-right border-t border-gray-500">
          <button
            className="m-1 border-radius-2 border-black w-full text-left"
            onClick={props.onClose}
          >
            Close
          </button>
          <button
            className="m-1 border-radius-2 border-black"
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
