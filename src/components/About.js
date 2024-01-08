export default function About() {
    return (
      <div className="About">
        <div className="About me">
          <div class="about-container">
            <div class="project-section">
              <h2 class="section-heading">About Food City Project😀</h2>
              <p class="section-content">
                "Food City" is a React based webApp that I created for practice. The
                website features a configuration-driven user interface and
                utilizes the Swiggy API to fetch restaurant and menu data. It is a
                demo website for a food delivering company, showcasing key
                features like a config-driven UI, routing.
                <ul>
                  😎 Key Features :
                  <li>📌 Shimmer UI for Better UserExperience</li>
                  <li>📌 Search Feature</li>
                  {/* <li>📌 Checking network connection</li> */}
                  <li>📌 forms to contact</li>
                  <li>📌 Single page application</li>
                  {/* <li>
                    📌 Implemented Lazy Loading or OnDemand Loading on This Router
                  </li> */}
                </ul>
                <ul>
                  💻 Technologies Used :<li>📌 React </li>
                  <li>📌 Redux for State Management</li>
                  {/* <li>📌 Checking network connection</li> */}
                  <li>📌 HTML, CSS, JavaScript</li>
                  <li>📌 Tailwind CSS</li>
                  {/* <li>
                    📌 Implemented Lazy Loading or OnDemand Loading on This Router
                  </li> */}
                </ul>
                <div className="note">
                  <strong>Notice: Limited Menu Display</strong>
                  <p>
                    If you encounter shimmering UI instead of menus when clicking
                    on restaurants, it's likely a CORS (Cross-Origin Resource
                    Sharing) issue. To overcome this, use a VPN like Proton VPN
                    for uninterrupted access. Simply download, connect, and
                    refresh the page for a seamless experience. Thank you for your
                    understanding.
                  </p>
                </div>
              </p>
            </div>
  
            <div class="author-section">
              <h2 class="section-heading">About the Author - Shivam Saurav😎</h2>
              <p class="section-content">
                I'm Shivam Saurav, a tech enthusiast fascinated by new
                technologies. My expertise spans languages such as C++, C, Python,
                JavaScript, React, HTML, CSS, and SQL. With touch typing skills
                and a typing speed of around 80+ words per minute, I am passionate
                about exploring and applying technology to solve real-world
                problems.
              </p>
              <div class="author-info">
                <strong>Technologies:</strong> C++, C, Python, JavaScript, React,
                HTML, CSS, SQL
                <br />
                <strong>Typing Speed:</strong> 80+ words per minute
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  