import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Filter.scss";

function Filter({ position }) {
  const isLatest = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const changeFilter = useCallback(
    (filter) => {
      dispatch({
        type: "CHANGE_FILTER",
        filter,
      });
    },
    [dispatch]
  );

  return (
    <div className={`${position} filter`}>
      <span
        className={`${isLatest ? "selected" : ""}`}
        tabIndex="0"
        role="button"
        aria-pressed="false"
        onClick={() => changeFilter(!isLatest)}
      >
        latest
      </span>{" "}
      |{" "}
      <span
        className={`${isLatest ? "" : "selected"}`}
        tabIndex="0"
        role="button"
        aria-pressed="false"
        onClick={() => changeFilter(!isLatest)}
      >
        starred
      </span>{" "}
    </div>
  );
}

export default Filter;
