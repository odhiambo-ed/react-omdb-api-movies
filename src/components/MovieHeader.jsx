import React from "react";

function MovieHeader(props) {
  return (
    <div className="col-12">
      <h1>{props.heading}</h1>
    </div>
  );
}

export default MovieHeader;