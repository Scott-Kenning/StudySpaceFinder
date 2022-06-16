function Container({ children }) {
  return (
    <div className="max-w-3xl w-full h-full min-h-screen p-4 pb-16 bg-gray-200 border border-gray-200">
      {children}
    </div>
  );
}

export default Container;
