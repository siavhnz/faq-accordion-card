import { useState } from "react";
import Item from "./Item";
import styleUtils from "./List.module.css";

const List = () => {
  const [clickedItem, setClicedItem] = useState(1);

  const data = [
    {
      id: "1",
      title: "How many team members can I invite?",
      desc: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      id: "2",
      title: "What is the maximum file upload size? ",
      desc: "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      id: "3",
      title: "How do I reset my password?",
      desc: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
      id: "4",
      title: "Can I cancel my subscription?",
      desc: "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
      id: "5",
      title: "Do you provide additional support?",
      desc: "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ];

  const toggleHandler = (index) => {
    if (index === clickedItem) {
      setClicedItem(-1);
      return;
    }
    setClicedItem(index);
  };

  return (
    <div className={styleUtils.list}>
      <h1 className={styleUtils.list__title}>FAQ</h1>
      <ul className={styleUtils.list__items}>
        {data.map((item, index) => {
          return (
            <Item
              key={item.id}
              item={item}
              onToggle={toggleHandler.bind(this, index)}
              isActive={index === clickedItem}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default List;
