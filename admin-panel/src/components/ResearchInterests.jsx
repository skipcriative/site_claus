// src/pages/ResearchInterests.jsx
import '../assets/styles/ResearchInterests.css';
import { FaDownload } from 'react-icons/fa';

function ResearchInterests() {
  return(
    <div className="background" id='Research'>
      <div className="researchs-container">
        <h2 className="researchs-title">Research Interests</h2>

        <div className="research-text-container" >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet molestie elit, eu placerat 
            ex. Etiam ac nisl bibendum, tempor urna a, luctus tortor. Duis finibus porta egestas. Nam vehicula 
            sit amet felis id ornare. Vestibulum cursus lectus mauris, ac iaculis nulla suscipit ac. 
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet molestie elit, eu placerat 
            ex. Etiam ac nisl bibendum, tempor urna a, luctus tortor. Duis finibus porta egestas. Nam vehicula 
            sit amet felis id ornare. Vestibulum cursus lectus mauris, ac iaculis nulla suscipit ac. 
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet molestie elit, eu placerat 
            ex. Etiam ac nisl bibendum, tempor urna a, luctus tortor. Duis finibus porta egestas. Nam vehicula 
            sit amet felis id ornare. Vestibulum cursus lectus mauris, ac iaculis nulla suscipit ac. 
          </p>
        </div>

        <div className="research-card">
          <span className="research-status-publicated">Publicado</span>
          <p className="research-authors">
            ALCANTARA, C.; PIMENTEL, E. A.; URBANO, J. M.
          </p>
          <h3 className="research-title">
            Hessian regularity in Hölder spaces for a semi-linear bi-Laplacian equation
          </h3>
          <p className="research-description">
            To appear in C. R. Math. Acad. Sci. Paris (2025)
          </p>
        </div>
      </div>
    </div>
  )
  }
  export default ResearchInterests;