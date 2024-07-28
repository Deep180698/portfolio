const WorkExperience = () => {
  return (
    <>
      {/* Work Experience Section */}
      <section className="container my-5">
        <h1 className="text-center mb-4">Work Experience</h1>
        <div className="row">
          {/* Job 1 */}
          <div className="col-md-12 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Independent Project</h5>
                <h6 className="card-subtitle mb-2 text-muted">Mississauga | May 2023 - Present</h6>
                <p className="card-text">As a Fullstack Developer, I developed a comprehensive job-finding application using React Native for the frontend and Node.js for the backend. Key links:</p>
                <ul>
                  <li><a href="https://github.com/Deep180698/JobGuruApi" target="_blank" rel="noopener noreferrer">GitHub - Backend</a></li>
                  <li><a href="https://github.com/Deep180698/JobGuru" target="_blank" rel="noopener noreferrer">GitHub - Frontend</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Job 2 */}
          <div className="col-md-12 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Junior React Native Developer</h5>
                <h6 className="card-subtitle mb-2 text-muted">Centricwave LLP, Gujarat, India | Feb 2023 - Jul 2024</h6>
                <p className="card-text">At Centricwave LLP, I developed a cutting-edge POS system to streamline restaurant operations, enhancing efficiency and user experience.</p>
              </div>
            </div>
          </div>

          {/* Job 3 */}
          <div className="col-md-12 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Junior React Native Developer</h5>
                <h6 className="card-subtitle mb-2 text-muted">Izonnet Web Solution Pvt. Ltd, Chikhli, Gujarat, India | Jan 2020 - Feb 2023</h6>
                <p className="card-text">In this role, I developed the Fitness Management System and the Work-On-Demand App, contributing significantly to both projects' frontend and backend development.</p>
              </div>
            </div>
          </div>

          {/* Job 4 */}
          <div className="col-md-12 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Technical Intern</h5>
                <h6 className="card-subtitle mb-2 text-muted">Technoheaven Consultancy Pvt. Ltd. | May - Dec 2019</h6>
                <p className="card-text">During my internship, I worked as a Mobile Application Developer, gaining hands-on experience in developing mobile applications and understanding the software development lifecycle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkExperience;
