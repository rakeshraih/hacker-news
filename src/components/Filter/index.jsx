import { useState } from "react";
import "./Filter.scss";

function Filter({ position }) {
  const [isLatest, setLatest] = useState(true);
  return (
    <div className={`${position} filter`}>
      <span
        className={`${isLatest ? "selected" : ""}`}
        role="botton"
        onClick={() => setLatest(!isLatest)}
      >
        latest
      </span>{" "}
      |{" "}
      <span
        className={`${isLatest ? "" : "selected"}`}
        role="botton"
        onClick={() => setLatest(!isLatest)}
      >
        starred
      </span>{" "}
    </div>
  );
}

export default Filter;
