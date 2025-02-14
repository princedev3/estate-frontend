import React from "react";

const Formalert = ({ status }) => {
  return (
    <div className="bg-green-500/70 text-white border-green-600 border  w-full h-full p-5 rounded-md">
      <p className="">{status} </p>
    </div>
  );
};

export default Formalert;
