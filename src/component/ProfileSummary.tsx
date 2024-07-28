const ProfileSummary = () => {
  return (
    <>
      <section id="profile-summary" className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center mb-4">
              <img 
                src="/src/assets/images/profile_image.jpeg" 
                alt="Profile Picture" 
                className="img-fluid rounded-circle w-75" 
              />
            </div>
            <div className="col-md-8">
              <h2 className="mb-3">Profile Summary</h2>
              <p className="lead">
                Hello! I'm [Your Name], a passionate software developer specializing in frontend and backend technologies. With a background in [your specialization or industry], I have experience building high-quality, scalable, and user-friendly applications. I thrive on solving complex problems and continuously learning new technologies.
              </p>
              <p>
                I have a strong foundation in technologies like <strong>React, Node.js, MongoDB, and Java</strong>, and I am proficient in modern web development practices. I enjoy collaborating with teams and clients to bring innovative solutions to life. My goal is to leverage technology to create impactful digital experiences.
              </p>
              <p>
                When I'm not coding, I enjoy [a hobby or interest], which helps me stay creative and balanced. I'm always open to new opportunities and challenges. Let's connect and build something great together!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileSummary;
