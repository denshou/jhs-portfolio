import CssIcon from "/public/css.svg";

export default function Skills() {
  return (
    <>
      <div className="section-3">
        <div className="section-third">
          <p className="section-title">SKILLS</p>
          <div>
            <div className="skills-list">
              <div className="stack">
                <p>Frontend</p>
                  <img src="/HTML5.png" alt="" />
                  <img src="/css.png" alt="" />
                  <img src="/js.png" alt="" />
                  <img src="/sass.png" className="skill-icon" alt="" />
                  <img src="/react.png" alt="" />
                  <img src="/redux.png" alt="" />
                  <img src="/next.png" className="skill-icon" alt="" />
                  <img src="/bootstrap.png" alt="" />
                  <img src="/tailwindcss.png" alt="" />
              </div>
              <div className="stack">
                <p>Deployment</p>
                <img src="/Vercel.png" alt="" />
                <img src="/netlify.png" alt="" />
              </div>
              <div className="stack">
                <p>Version Control</p>
                <img src="/git.png" alt="" />
                <img src="/github.jpg" alt="" />
              </div>
              {/* <div className="stack">
                <p>Backend</p>
                <img src="/firebase.png" alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
