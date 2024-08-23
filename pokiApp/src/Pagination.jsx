import React from "react";

function Pagination({ text, changeUrl, url }) {
  return (
    <div className="pagination-container">
      <button className="pagination-button" onClick={() => changeUrl(url)}>
        {text}
      </button>
    </div>
  );
}

export default Pagination;
