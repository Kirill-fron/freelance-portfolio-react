import gitHub from "./../../images/icons/gitHub-black.svg";
import "./../BtnGit/Btn.css";
const Btn = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHub} alt="" />
      GitHub repo
    </a>
  );
};

export default Btn;
