import ArrowUp from "/public/arrow-up.svg";

export default function Nav() {
  return (
    <>
      <div className="navigation">
        <div className="nav-bar">
          <div className="nav">
            <ul className="nav-ul">
              <li className="nav-li">Home</li>
              <li className="nav-li">About me</li>
              <li className="nav-li">Skills</li>
              <li className="nav-li">Archive</li>
              <li className="nav-li">Projects</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="page-up-btn">
        <ArrowUp width='2rem' height='2rem'/>
      </div>
    </>
  );
}
