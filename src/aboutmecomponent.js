import React from "react";

class Aboutmecomponent extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return (<>
        <div className="container mb-5">
            <div className="row">
                <div className="col-md-3">
                    <h1>About Me</h1>
                </div>
                <div className="col-md-9">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button type="button" className="btn btn-dark  text-light ">Download Resume
                    <a className="btn line-btn-dark btn-icon btn-radius text-center" href="1.png" title="Download Resume" download></a>
                    </button>
                </div>
            </div>
        </div>
        </>)
    }
}
export default Aboutmecomponent ;