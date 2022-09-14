import styleUtils from "./Item.module.css";

const Item = (props) => {
  const { id, title, desc } = { ...props.item };

  // Handle title class
  let titleClass = styleUtils.title;
  let descClass = styleUtils.desc;

  if (id == 2) {
    titleClass = `${styleUtils.title} ${styleUtils.active}`;
    descClass = styleUtils.desc;
  } else {
    descClass = `${styleUtils.desc} ${styleUtils.inactive}`;
  }

  return (
    <li className={styleUtils.container}>
      <div className={styleUtils.header}>
        <h2 className={titleClass}>{title}</h2>

        <div className={`${styleUtils.icon} ${styleUtils["active"]}`}></div>
      </div>
      <p className={descClass}>{desc}</p>
    </li>
  );
};

export default Item;
