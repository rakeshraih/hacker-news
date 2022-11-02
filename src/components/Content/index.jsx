import { useEffect, useState, useRef, useCallback } from "react";
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
      let data = await response.json();
      data = data.map((val) => ({ id: val, saved: false }));
      refData.current = { data, index: 11 };
      updateList(data.slice(0, 1));
    };
    fetchData();
  }, [updateList, refData]);

  const save = useCallback(
    (id) => {
      const newList = list.map((val) => {
        if (val.id === id) {
          val.saved = !val.saved;
        }
        return val;
      });
      updateList(newList);
    },
    [list, updateList]
  );

  return (
    <div>
      <ul>
        {list.map((data, index) => (
          <Row key={data.id} index={index} data={data} save={save}></Row>
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
