import './App.css';
// import { BrowserRouter as Router,Route, Routes} from "react-router-dom"
// import Header from './components/Header/Header';
import Create from './MyPractice/Create';
import Read from './MyPractice/Read';
import Update from './MyPractice/update';
import Header from './components/Header/Header';
import Com from './components/ContextExample/Com';
// import Update from './MyPractice/update';
// import Popup3 from './MyPractice/Create';
function App() {


  return (
  <>
    {/* <Router>
    <Routes>
     
          <Route  path='/create' component={Create}/>
      
      
          <Route  path='/read' component={Read}/>


        <Route path='/update' component={Update}/>
   
      </Routes>
    </Router> */}



<Header/>
<Create/>
{/* <Read/> */}
{/* <Update/> */}
<Com/>





    {/* <Router> */}
      {/* <Header/> */}
      {/* <Routes> */}
      {/* <Route/> */}
      {/* </Routes> */}
    {/* </Router> */}
  {/* <Popup3/> */}
    </>
  );
}

export default App;
