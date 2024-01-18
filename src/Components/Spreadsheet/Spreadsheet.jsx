import "./Spreadsheet.css";
import NumCard from "./NumCard/NumCard";

const Spreadsheet = () => {
  return (
    <div className="spreadsheet-main">
      <NumCard contextName="Alumni" contextCount={15} isVisible />
      <NumCard contextName="Publications" contextCount={5} isVisible />
      <NumCard contextName="Members" contextCount={10} isVisible />
    </div>
  );
};

export default Spreadsheet;
