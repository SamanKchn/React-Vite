import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

interface Props {
  list : string[]
  title : string
}

export default function List({list , title} : Props) {
  const [selectedIndex , setSelectedIndex] = useState(-1)

  return (
    <>
      <h1>{title}</h1>
      <div>
        <ul className="list-group">
          {list.map((item , index) => (
            <li
              className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
              key={item}
              onClick={() => setSelectedIndex(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
