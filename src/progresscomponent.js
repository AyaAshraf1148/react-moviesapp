import React from "react";

const data =[
    {name:'HTML', percentage:90},{name:'CSS',percentage:80},{name:'Javascript',percentage:70},{name:'React',percentage:30},{name:'Adope XD',percentage:20},{name:'Node js',percentage:50},{name:'Wordpress',percentage:30}]

class Progresscomponent extends React.Component
{
    constructor()
    {
        super();
    }

    render()
    {
            return(<>
            {data.map((item)=>{
                return(
                <div class="progress mt-2">
                    <div class="progress-bar bg-success" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width:item.percentage+'%'}}>{item.name}</div>
                  </div>
                )

            })}
                
                </>
                
                );
        
        
    }
}
export default Progresscomponent;