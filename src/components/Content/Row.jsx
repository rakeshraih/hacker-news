import { useEffect, useState } from "react";

function Row({ id, index }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      );
      const data = await response.json();
      setData(data);
    };
    fetchData(id);
  }, [setData, id]);

  return data ? (
    <li className="conatiner" key={id}>
      <div className="count">{index + 1}.</div>
      <div className="title">
        <div>{data.title}</div>
        <div>
          {data.score} by {data.by} {} ago | {data.kids ? data.kids.length : 0}{" "}
          comments | saved
        </div>
      </div>
    </li>
  ) : null;
}

export default Row;
