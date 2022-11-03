import { useState } from "react";
import "./Filter.scss";

function Filter({ position }) {
  const [isLatest, setLatest] = useState(true);
  return (
    <div className={`${position} filter`}>
      <span
        className={`${isLatest ? "selected" : ""}`}
        tabindex="0"
        role="button"
        aria-pressed="false"
        onClick={() => setLatest(!isLatest)}
      >
        latest
      </span>{" "}
      |{" "}
      <span
        className={`${isLatest ? "" : "selected"}`}
        tabindex="0"
        role="button"
        aria-pressed="false"
        onClick={() => setLatest(!isLatest)}
      >
        starred
      </span>{" "}
    </div>
  );
}

export default Filter;
