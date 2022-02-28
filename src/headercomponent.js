import React from "react";
import Contactmecomponent from "./components/contactmecomponent";



class Headercomponent extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return (<>
        <div id="carouselExampleSlidesOnly" className="carousel slide mb-5" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="download.jpg" alt="First slide"/>
              <div className ="carousel-caption position-absolute top-50 end-50 translate-middle ms-4">
              <h1 className="text-light text-bolder">Aya Ashraf</h1>
              <h2 className="text-light mb-4">MEARN Stack Web Developer</h2>
              <Contactmecomponent/>
              </div>
            </div>
          </div>
        </div>
        
        </>)
        
    }
}
export default Headercomponent ;