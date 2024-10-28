import React, { useRef } from "react";

function UseRef() {
  const inputRef = useRef(null);

  const handlefocus = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <h1>Uses of useref hook </h1>
      <div>
        <label htmlFor="yash">Name:</label>
        <input
          id="yash"
          ref={inputRef}
          type="text"
          placeholder="Click the button to focus"
        />
        <button
          onClick={handlefocus}
          className="border-2 bg-red-500 rounded-md"
        >
          Focus Input
        </button>
      </div>
    </>
  );
}

export default UseRef;


// import React, { useEffect, useRef, useState } from "react";

// function UseRef() {
//   const [count, setCount] = useState(0);
//   const prevCountRef = useRef(count);

//   useEffect(() => {
//     prevCountRef.current = count;
//   }, [count]);
//   return (
//     <div>
//       <h2>Count:{count}</h2>
//       <h3>Previous Count: {prevCountRef.current}</h3>
//       <button
//         className="bg-green-600 rounded-md p-1"
//         onClick={() => setCount(count + 1)}
//       >
//         Increase
//       </button>
//     </div>
//   );
// }

// export default UseRef;
