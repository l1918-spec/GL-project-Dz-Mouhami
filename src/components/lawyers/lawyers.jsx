import React from "react";
import "./lawyers.css";

const lawyers = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <div > <img className="p1" src="r1.png" alt="" /></div>
          <span className="primaryText">Azouaou Faical</span>
          <span className="secondaryText">
          Catégories Droit civil, Droit des entreprises, Droit des étrangers, Droit familial, Droit foncier, Droit judiciaire, Droit pénal, Droit routier, Droit social, Droits de l'homme
            <br />
            Droit familial, Droit foncier, Droit judiciaire, Droit pénal, Droit routier
          </span>
          <button className="button" href>
            <a href="/profile-lawyer">View Profile</a>
          </button>
        </div>
        
         </div>
      {/* Here you add more lawyer listing----- */}


      <div className="btns">
            <button className="button" href>
            <a href="/profile-lawyer">Previous</a>
            </button>
            <button className="button" href>
            <a href="/profile-lawyer">Next</a>
            </button>
         </div>
    </div>
    
  );
};

export default lawyers;
