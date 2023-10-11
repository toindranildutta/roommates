import React from "react";
import topimg from "../images/topimg.png"


function HomepageMain() {
    return (
        <>
        <div className="d-flex justify-content-around m-3 p-3">
            <div className="d-flex flex-column justify-content-around">
                <div>
                    <h1>Find <span className="text-success">Like Minded</span>  <br/> Roommates & PGs</h1>
                    <h5>Share your rooms with right roommates</h5>
                </div>
                
                <div>
                    <input type="text" className="form-control mb-3" placeholder="Search Places"/>
                     <h6>Top Cities: Bangalore, Hydrabad, Pune view more</h6>
                </div>
                
            </div>
            <div>
               <img className="justfiy-content-center mx-auto" src={topimg} alt="simple example"/>
            </div>
            
        </div>
        </>
    )
}

export default HomepageMain