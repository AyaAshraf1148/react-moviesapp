import "../src/App.css";
import Headercomponent from "./headercomponent";
import Aboutmecomponent from "./aboutmecomponent";
import Skillscomponent from "./skillscomponents";
import Portfoliocomponent from "./myprofoliocomponent";
import Footercomponent from "./footercomponent";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import Logincomponent from "./pages/logincomponent";
import Registerationcomponent from "./pages/registerationcomponent";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Notfound from "./pages/notfound";
import Moviedetails from "./pages/movieDetails";
import Addfavourites from "./components/addfavourites";
import MovieList from "./components/movielist";


// library.add(fab);


function App() {
  return (
    
    <div className="App">
     
       {/* <Headercomponent />
      <Aboutmecomponent />
      <Skillscomponent />
      <Portfoliocomponent/>
      <Footercomponent/> 
      <Logincomponent/>
      <Registerationcomponent/> */}
      {/* <Home/> */}
       {/* <Footer/>  */}
      <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route path ="/" exact component={MovieList}/>
      {/* <Route path ="/" exact component={Home}/> */}
      <Route path="/register"exact component={Registerationcomponent}/>
      <Route path="/login" exact component={Logincomponent}/>
      <Route path="/moviedetails/:id" exact component={Moviedetails}/>
      <Route path="/favourites" exact component={Addfavourites}/>
      <Route path={"*"} component={Notfound}/>
      </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
