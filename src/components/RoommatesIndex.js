import HomepageHeader from "./Header/HomepageHeader";
import "./Css/HomepageHeader.css";
import {bootstrap} from 'bootstrap/dist/css/bootstrap.css'
import HomepageMain from "./Main/HomepageMain";

export default function RoommatesIndex(){
    return(
        <div className="container-fluid ">
            <div className="box">
                <header>
                 <HomepageHeader/>
                </header>
                <section>
                    <HomepageMain/>
                </section>

            
            </div>

           
        </div>
    );
}