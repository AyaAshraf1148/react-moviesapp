import React from "react";
import Contactmecomponent from "./Contactme";
import { FaEnvelope } from 'react-icons/fa';
import {BsFillTelephoneFill,BsInstagram,BsFacebook,BsTwitter} from 'react-icons/bs'



class Footercomponent extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(<>
        <div className="bg-dark">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h5 className="text-light mt-3">GET IN TOUCH</h5>
                <ul className="list-unstyled">
                    <li className="text-light"><FaEnvelope className="me-2"/>aya@gmail.com</li>
                    <li className="text-light"><BsFillTelephoneFill className="me-2"/>123456789</li>
                    
                </ul>
                </div>
                <div className="col-md-2 mt-5 m-auto">
                    <Contactmecomponent/>
                </div>
                <div className="col-md-4 mt-1 ms-5">
                
      <a
        class="btn btn-link btn-floating btn-lg text-light m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="light"
        ><BsInstagram/></a>

      
      <a
        class="btn btn-link btn-floating btn-lg text-light m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="light"
        ><BsFacebook/></a>

      
      <a
        class="btn btn-link btn-floating btn-lg text-light m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="light"
        ><BsTwitter/></a>

      <p className="text-light ms-4">© 2020 Copyright</p>

                </div>
            </div>
        </div>
        </div>
        </>)
    }
}
export default Footercomponent;