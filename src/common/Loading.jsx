import React from "react";
import LoadingImage from "../images/loading.gif";
const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      {/* <div
        className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div> */}
      <img src={LoadingImage} className="object-contain w-full h-[100vh]" />
    </div>
  );
};

export default Loading;
