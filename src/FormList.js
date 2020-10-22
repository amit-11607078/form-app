import React, { useEffect, useState } from "react";
import Item from "./Item";

function FormList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/user-list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  function dataPlay() {}

  return (
    <div>
      <form onSubmit={dataPlay}>
        {list.map((item, i) => (
          <div key={i}>
            <Item data={item} />
          </div>
        ))}
      </form>
    </div>
  );
}

export default FormList;
