import { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Row from "./Row";

import "./Container.scss";

function Container() {
  const refData = useRef([]);
  const newsList = useSelector((state) => state.list);
  const isLatest = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const updateNewsList = useCallback(
    (list) => {
      dispatch({
        type: "UPDATE_LIST",
        list,
      });
    },
    [dispatch]
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
      );
      let data = await response.json();
      data = data.map((val) => ({ id: val, saved: false }));
      refData.current = { data, index: 11 };
      updateNewsList(data.slice(0, 12));
    };
    fetchData();
  }, [updateNewsList, refData]);

  const save = useCallback(
    (id) => {
      const newList = newsList.map((val) => {
        if (val.id === id) {
          val.saved = !val.saved;
        }
        return val;
      });
      updateNewsList(newList);
    },
    [newsList, updateNewsList]
  );

  let index = 0;
  return (
    <div>
      <ul>
        {newsList.map((data) => {
          return (
            <Row key={data.id} index={index++} data={data} save={save}></Row>
          );
        })}
      </ul>
      {isLatest && (
        <button
          onClick={() => {
            refData.current.index += 11;
            updateNewsList(
              refData.current.data.slice(0, refData.current.index)
            );
          }}
        >
          show more
        </button>
      )}
    </div>
  );
}

export default Container;
