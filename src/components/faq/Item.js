import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import styleUtils from "./Item.module.css";

const Item = ({ item, onToggle, isActive }) => {
  const { title, desc } = { ...item };

  // Used for animating description when it toggle
  const [descHeight, setDescHeight] = useState(0);

  // Used for access height of description
  const descElement = useRef();

  // Recreate component when height of description is available
  // And become active
  useEffect(() => {
    if (isActive) {
      setDescHeight(descElement.current.scrollHeight);
    } else {
      setDescHeight(0);
    }
  }, [isActive]);

  // Handle active classes for title, icon
  const titleClass = isActive
    ? `${styleUtils.title} ${styleUtils.active}`
    : styleUtils.title;

  const iconClass = isActive
    ? `${styleUtils.icon} ${styleUtils.active}`
    : styleUtils.icon;

  return (
    <li className={styleUtils.container}>
      <div className={styleUtils.header} onClick={onToggle}>
        <h2 className={titleClass}>{title}</h2>
        <div className={iconClass}></div>
      </div>
      <p
        ref={descElement}
        className={styleUtils.desc}
        style={{ height: descHeight }}
      >
        {desc}
      </p>
    </li>
  );
};

export default Item;
