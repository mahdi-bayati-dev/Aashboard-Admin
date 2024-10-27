import React from "react";
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';
import './features.css'
function Features () {
    return ( 
        <>
           <div className="features">
               <div className="features_item">
                  <span className="features_title">Revalue</span>
                  <div className="features_container">
                  <span className="features_many">$3.415</span>
                  <span className="features_rite">
                     -11.4
                     <SouthIcon className="features_rite_icon negative"/>
                  </span>
                  </div>
                  <span className="features_sub">Lorem ipsum dolor sit amet.</span>
                   
               </div>
               <div className="features_item">
                  <span className="features_title">Sales</span>
                  <div className="features_container">
                  <span className="features_many">$3.415</span>
                  <span className="features_rite">
                     -1.4
                     <SouthIcon className="features_rite_icon negative"/>
                  </span>
                  </div>
                  <span className="features_sub">Lorem ipsum dolor sit amet.</span>
                   
               </div>

               <div className="features_item">
                  <span className="features_title">Revalue</span>
                  <div className="features_container">
                  <span className="features_many">$3.415</span>
                  <span className="features_rite">
                     +2.4
                     <NorthIcon className="features_rite_icon "/>
                  </span>
                  </div>
                  <span className="features_sub">Lorem ipsum dolor sit amet.</span>
                   
               </div>

           </div>
        </>
     );
}

export default Features ;