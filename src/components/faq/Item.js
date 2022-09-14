const Item = (props) => {
  const { title, desc } = { ...props.item };

  return (
    <li>
      <div>
        <h2>{title}</h2>
        <div className="arrow-icon"></div>
      </div>
      <p>{desc}</p>
    </li>
  );
};

export default Item;
