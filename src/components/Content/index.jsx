import { useEffect, useState, useRef } from "react";
import "./Container.scss";
import Row from "./Row";

function Container() {
  const [list, updateList] = useState([1, 2]);
  const refData = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
      );
      const data = await response.json();
      refData.current = { data, index: 11 };
      updateList(data.slice(0, 1));
    };
    fetchData();
  }, [updateList, refData]);

  return (
    <div>
      <ul>
        {list.map((id, index) => (
          <Row key={id} index={index} id={id}></Row>
        ))}
      </ul>
      <button
        onClick={() => {
          refData.current.index += 11;
          updateList(refData.current.data.slice(0, refData.current.index));
        }}
      >
        show more
      </button>
    </div>
  );
}

export default Container;
