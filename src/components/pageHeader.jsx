import "./pageHeader.css";

const PageHeader = ({name, className, buttonName}) => {
  return (
    <header>
      <h2>{name}</h2>
      <button className={className}>{buttonName}</button>
    </header>)
}

export default PageHeader;