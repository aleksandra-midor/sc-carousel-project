import React, { useContext } from "react";
import IsLoadingContext from "../../Context/IsLoadingContext";

const Spinner = () => {
  const isVisible = useContext(IsLoadingContext);
  console.log(isVisible);

  if (isVisible.loading) {
    return (
      <div className="Spinner">
        <div>Loading...{isVisible.loading ? "true" : "false"}</div>
      </div>
    );
  } else {
    return null
  }
};

export default Spinner;
