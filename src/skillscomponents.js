import React from "react";
import Progresscomponent from "./progresscomponent";

// const arr=['HTML','CSS','Javascript','React','Adope XD','Node js','Wordpress']
// const data =[
//     {name:'HTML', percentage:90},{name:'CSS',percentage:80},{name:'Javascript',percentage:70},{name:'React',percentage:50},{name:'Adope XD',percentage:20},{name:'Node js',percentage:50},{name:'Wordpress',percentage:30}];
class Skillscomponent extends React.Component
{
    constructor()
    {
        super();
    }
     
    render()
    {
        return(<>
        <div className="bg-dark pb-3">
           <h2 className="text-light text-center pt-3 pb-3">Skills</h2>
           <div className="container mb-4">
               <div className="row">
                   <div className="col-md ">
                   <p className="text-light text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                   </div>
               </div>
           </div>
           <div className="container mb-5">
               <div className="row">
                   <div className="col-md-3 me-5">
                       <h4 className="text-light  me-5">My Focus</h4>
                       <hr className="text-light w-50"></hr>
                       <ul className="text-light list-unstyled">
                           <li>UI/UX Design</li>
                           <li>Responsive Web</li>
                           <li>Web Design</li>
                           <li>Mobile App Design</li>
                       </ul>
                   </div>
                   <div className="col-md-6 ms-5">
                      
                       <Progresscomponent/>
                        
                   </div>
               </div>
           </div>
        </div>
        </>)
    }
}
export default Skillscomponent;