//src/pages/ShortBio.jsx
import '../assets/styles/ShortBio.css';

function ShortBio() {
  return (
    <div className="background" id='Shortbio'>
      <div className="shortbio-container" >
        {/* <div className="text-conteiner"> */}
          <h2 className="shortbio-title">Short bio</h2>
          <p>
            PhD student in Mathematics at the Pontifical Catholic University of Rio de Janeiro (PUC-Rio)
            under the direction of Edgard A. Pimentel. Before that, he finished his master's degree (Brazil, 2021)
            in Mathematics at the Universidade Federal de Sergipe (UFS) under the direction of Disson dos Prazeres.
          </p>
          <p>
            In his master's, he studied the relationship between eigenvalue problems, the maximum principle,
            existence of fundamental solutions and Liouville-type theorems for a degenerate elliptic operator,
            and produced a dissertation entitled "Teoremas do tipo Liouville e Aplicações".
          </p>
          <p>
            Currently, he is interested in the intersection of Regularity Theory for nonlinear Partial Differential
            Equations, Geometric Analysis and Free Boundary problems.
          </p>
        {/* </div> */}
      </div>
    </div>
  );
}

export default ShortBio;
