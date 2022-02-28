import React from "react";

const skill =['Web Design','Mobile Design','logo Design','Web Application Development','Mobile Application Development','Pwa Development'];
class Portfoliocomponent extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(<>
        <h1 className="ms-5 mt-5 mb-5">Portfolio</h1>
        <div className="container mb-5">
            <div className="row">
                
                    {skill.map((skills)=>
                {
                    return(<div className="col-md-4  text-light ">
                    <h6 className="bg-dark text-center pt-5 pb-5">{skills}<hr className="w-50 m-auto mt-2"></hr></h6> 
                    </div>
                    )

                })
                }
                
            </div>
        </div>
        </>)
    }
}
export default Portfoliocomponent;