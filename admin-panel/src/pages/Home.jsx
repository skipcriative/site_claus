import '../assets/styles/Home.css';
import claudemirImage from '../assets/images/claudemir.png';
import Contact from '../components/Contact';
import ShortBio from '../components/ShortBio';
import Publications from '../components/Publications';
import ResearchInterests from '../components/ResearchInterests';

function Home() {
  return (
    <>
    <div className="home-wrapper" id='Home'>
      <div className="hero">
        <img src={claudemirImage} alt="Claudemir Alcantara" className="profile-img" />
        <div className="intro-text">
          <h1>Claudemir<br />Alcantara</h1>
        </div>  
      </div>
      <div className='hero-university'>
        <p className="university">Pontifical Catholic University of Rio de Janeiro</p>
      </div>
    </div>

    <ShortBio/>
    <ResearchInterests/>
    <Publications/>
    <Contact/>
    
    </>
  );
}

export default Home;
