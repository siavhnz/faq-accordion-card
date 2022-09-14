import styleUtils from "./Item.module.css";

const Item = (props) => {
  const { title, desc } = { ...props.item };

  return (
    <li className={styleUtils.container}>
      <div className={styleUtils.header}>
        <h2 className={styleUtils.title}>{title}</h2>

        <div className={`${styleUtils.icon} ${styleUtils["active"]}`}></div>
      </div>
      <p className={styleUtils.desc}>{desc}</p>
    </li>
  );
};

export default Item;
