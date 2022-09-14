import FancyImage from "./FancyImage";
import List from "./List";
import styleUtils from "./FAQ.module.css";

const FAQ = () => {
  return (
    <main className={styleUtils.container}>
      <FancyImage />
      <List />
    </main>
  );
};

export default FAQ;
