const Education = () => (
  <section id="education" className="bg-light py-5">
    {/* Education Section */}
    <div className="container">
      <h2 className="text-center mb-4">Education</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Master of Science in Computer Science</h4>
              <h5 className="card-subtitle mb-2 text-muted">XYZ University</h5>
              <p className="card-text">
                <strong>Years Attended:</strong> 2018 - 2020<br />
                <strong>Location:</strong> City, State<br />
                Focused on advanced topics in computer science including machine learning, artificial intelligence, and software development methodologies.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Bachelor of Technology in Information Technology</h4>
              <h5 className="card-subtitle mb-2 text-muted">ABC Institute of Technology</h5>
              <p className="card-text">
                <strong>Years Attended:</strong> 2014 - 2018<br />
                <strong>Location:</strong> City, State<br />
                Developed strong foundational skills in programming, databases, and network security.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">High School Diploma</h4>
              <h5 className="card-subtitle mb-2 text-muted">XYZ High School</h5>
              <p className="card-text">
                <strong>Years Attended:</strong> 2012 - 2014<br />
                <strong>Location:</strong> City, State<br />
                Excelled in Mathematics and Computer Science, participating in various academic and extracurricular activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


);

export default Education;
