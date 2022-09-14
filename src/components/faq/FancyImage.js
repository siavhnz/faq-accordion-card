// import { ReactComponent as WomanOnlineDesctop } from "../../images/illustration-woman-online-desktop.svg";
// import { ReactComponent as Box } from "../../images/illustration-box-desktop.svg";
import styleUtils from "./FancyImage.module.css";

const FancyImage = () => {
  return (
    <div>
      <div className={styleUtils["woman-online-img"]}></div>
      <div className="box-img"></div>
    </div>
  );
};

export default FancyImage;
