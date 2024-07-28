import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* About Section */}
            {/* <div className="row rounded m-4" style={{ backgroundImage: 'url(/src/assets/images/profile_bg.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', padding: '20px' }}> */}
            <div className="row rounded m-4" style={{ background: 'linear-gradient(0deg, rgb(7 24 46) 21%, rgb(116 106 137 / 0%) 100%)', backgroundSize: 'cover', backgroundPosition: 'center', padding: '20px', color:'#FFF' }}>
                <div className="col-md-4 align-self-center">
                    <img src="/src/assets/images/profile_image.jpeg" alt="Deep Patel" className="img-fluid rounded-circle w-50" />
                </div>
                <div className="col-md-8 align-self-center">
                    <p className='text-justify'>
                        I'm Deep Patel, a software developer with experience in building high-quality web and mobile applications. I have a strong background in frontend and backend technologies, including React, Node.js, and Java. My passion lies in solving complex problems and delivering user-friendly solutions.
                    </p>
                </div>
            </div>

            {/* Projects Section */}
            {/* <div className="container my-5"> */}
            <div className="row m-4">
                <div className="col-12">
                    <h2 className="text-center mb-4">Featured Projects</h2>
                </div>
                <div className="col-md-4">
                <div className="card mb-4 border-0" style={{ backgroundImage: 'url(/src/assets/images/card-bg.jpeg)', backgroundSize: 'cover', height: '450px', backgroundPosition: 'center', color: '#fff' }}>
                    {/* <div className="card mb-4 border-0" style={{ background: 'linear-gradient(353deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 28%, rgba(62,91,233,1) 69%, rgba(5,99,181,1) 100%)', height: '450px', color: '#fff' }}> */}
                        <div className="d-flex justify-content-between">
                            <img src="/src/assets/images/common-health.png" className="card-img-top w-25" alt="Project 1" />
                            <h5 className="card-title align-self-end">Fitness App</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text text-justify">With online coaching, you receive personalized support from coaches throughout the month. Communication options vary, from email and in-app text messaging in the basic plan to unlimited text and video messaging in higher tiers.</p>
                            {/* <a href="https://github.com/Deep180698/Project1" className="btn btn-dark" target="_blank" rel="noopener noreferrer">View on GitHub</a> */}
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="https://github.com/Deep180698/Project3" className="btn btn-info align-self-end" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 border-0" style={{ backgroundImage: 'url(/src/assets/images/card-bg.jpeg)', backgroundSize: 'cover', height: '450px', backgroundPosition: 'center', color: '#fff' }}>
                        <div className="d-flex justify-content-between">
                            <img src="/src/assets/images/wod.jpg" className="card-img-top w-25" alt="Project 1" />
                            <h5 className="card-title align-self-end">Work on demand</h5>
                        </div>
                        <div className="card-body">
                            {/* <h5 className="card-title">Work on demand</h5> */}
                            <p className="card-text text-justify">Work on Demand connects customers with companies for essential services like cleaning, waste disposal, and office relocation. Customers can post jobs and companies can accept and fulfill these tasks, with both parties having the opportunity to provide feedback.</p>
                            {/* <a href="https://github.com/Deep180698/Project2" className="btn btn-dark" target="_blank" rel="noopener noreferrer">View on GitHub</a> */}
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="https://github.com/Deep180698/Project3" className="btn btn-info align-self-end" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 border-0" style={{ backgroundImage: 'url(/src/assets/images/card-bg.jpeg)', backgroundSize: 'cover', height: '450px', backgroundPosition: 'center', color: '#fff' }}>
                        <div className="d-flex justify-content-between">
                            <img src="/src/assets/images/flip_fashion.png" className="card-img-top w-50" alt="Project 1" />
                            <h5 className="card-title align-self-end">Flipthefashion</h5>
                        </div>
                        <div className="card-body">
                            {/* <h5 className="card-title">Flipthefashion</h5> */}
                            <p className="card-text text-justify">Welcome to Flipthefashion, where fashion meets self-expression! We offer a curated selection of trendy, high-quality, and affordable clothing to suit your unique style and lifestyle.</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="https://github.com/Deep180698/Project3" className="btn btn-info align-self-end" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}

            {/* Skills Section */}
            <div className="bg-light py-5">
                <div className="container">
                    <h2 className="text-center mb-4">My Skills</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <h5>Frontend Development</h5>
                            <p>React, React Native, JavaScript, HTML, CSS, Bootstrap</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Backend Development</h5>
                            <p>Node.js, Express, Java, REST APIs</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Database Management</h5>
                            <p>MySQL, MongoDB, Microsoft SQL Server</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="jumbotron text-center bg-secondary text-white mt-5">
                <h2>Interested in collaborating?</h2>
                <p className="lead">Feel free to reach out for any web or mobile development projects, or just to say hi!</p>
                <Link to="/contact" className="btn btn-light btn-lg">Contact Me</Link>
            </div>
        </div>
    );
};

export default Home;
