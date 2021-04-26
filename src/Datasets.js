import React from "react";

const Datasets = ({ datasets }) => {
  return (
    <div>
      <center>
        <h4>Dataset list</h4>
      </center>
      {datasets.map(dataset => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{dataset.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{dataset.uri}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Datasets;