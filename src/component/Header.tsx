import { useNavigate } from "react-router-dom";

const Header:any = () => {
    const navigate = useNavigate();
    return (
        <header>
            <nav className="navbar navbar-expand-lg text-light bg-black">
                <span className="navbar-brand -text-white" onClick={() => navigate('/')}>Deep Patel</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <button className="nav-link btn text-light" onClick={() => navigate('/education')}>Education</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn text-light" onClick={() => navigate('/profilesummary')}>Profile summary</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn text-light" onClick={() => navigate('/objectives')}>Objectives</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn text-light" onClick={() => navigate('/work_experience')}>WorkExperience</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
