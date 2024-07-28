const Footer = () => {
    return (
        <footer className="bg-black text-light pt-4">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-4 mb-3">
                        <h5 className="text-left">About Deep</h5>
                        <p className="text-justify">I'm Deep Patel, a software developer with experience in building high-quality web and mobile applications. I have a strong background in frontend and backend technologies, including React, Node.js, and Java. My passion lies in solving complex problems and delivering user-friendly solutions.</p>
                    </div>
                    
                    <div className="col-12 col-md-4 mb-3">
                        <h5 className="text-left">Follow Me</h5>
                        <ul className="list-unstyled text-left">
                            <li><a href="https://twitter.com/" className="text-light" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="https://www.facebook.com/" className="text-light" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://www.instagram.com/" className="text-light" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://www.linkedin.com/" className="text-light" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 mb-3">
                        <h5 className="text-left">Contact Information</h5>
                        <p className="text-left">Email: pateldeep0989@gmail.com</p>
                        <p className="text-left">Phone: +1 7059757158</p>
                        <p className="text-left">
                            LinkedIn: <a href="https://www.linkedin.com/in/deep-patel-a65b0a157/" target="_blank" rel="noopener noreferrer">Deep Patel</a>
                        </p>
                        <p className="text-left">
                            GitHub: <a href="https://github.com/Deep180698" target="_blank" rel="noopener noreferrer">Deep180698</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center py-3 bg-black">
                <p>&copy; 2024 Deep Patel. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
