import React from "react";
import DepertmentActivites from "../DepertmentActivites/DepertmentActivites";
import Chart from "../Chart/Chart";

const Depertment = () => {
  return (
    <div className="mt-8 grid lg:grid-cols-2 gap-4">
      <div>
        <DepertmentActivites></DepertmentActivites>
      </div>
      <div>
        <Chart></Chart>
      </div>
    </div>
  );
};

export default Depertment;
