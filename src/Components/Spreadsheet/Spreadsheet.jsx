import "./Spreadsheet.css";
import NumCard from "./NumCard/NumCard";
// import { useRef } from "react";
// import useOnScreen from "../../Hooks/useOnScreen";

const Spreadsheet = () => {
  // const ref = useRef(null);
  // const isVisible = useOnScreen(ref);

  // console.log(isVisible);

  return (
    <div className="spreadsheet-main">
      <NumCard contextName="Alumni" contextCount={15} isVisible />
      <NumCard contextName="Publications" contextCount={5} isVisible />
      <NumCard contextName="Members" contextCount={10} isVisible />
    </div>
  );
};

export default Spreadsheet;
