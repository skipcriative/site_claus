// src/pages/Publications.jsx
import '../assets/styles/Publications.css';
import { FaDownload } from 'react-icons/fa';

function Publications() {
  return (
    <div className="background" id='Publications'>
      <div className="publications-container">
        <h2 className="publications-title">Publications</h2>

        <div className="publication-card">
          <span className="publication-status-publicated">Publicado</span>
          <p className="publication-authors">
            ALCANTARA, C.; PIMENTEL, E. A.; URBANO, J. M.
          </p>
          <h3 className="publication-title">
            Hessian regularity in Hölder spaces for a semi-linear bi-Laplacian equation
          </h3>
          <p className="publication-description">
            To appear in C. R. Math. Acad. Sci. Paris (2025)
          </p>
          <a href="/papers/sample.pdf" className="pdf-button" download>
            <FaDownload style={{ marginRight: '8px' }} />
            PDF
          </a>
        </div>
      </div>
    </div>
  );
}

export default Publications;
