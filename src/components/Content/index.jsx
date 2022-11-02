import { useEffect, useState } from "react";

function Container() {
  const [list, updateList] = useState([{ id: 1 }, { id: 2 }]);

  return (
    <div>
      <ul>
        {list.map((val) => (
          <li>{val.id}</li>
        ))}
        <li></li>
      </ul>
    </div>
  );
}

export default Container;
