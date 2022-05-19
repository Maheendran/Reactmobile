// import logo from './logo.svg';
import './App.css';
import Answer1 from './components/Answer1'; 
function App() {
 
   let info=[{Heading:"Mobile Operating System",P1:"Android",P2:"Blackberry",P3:"iPhone",P4:"Windows Phone"},
   {Heading:"Mobile Manufacturers",P1:"Samsung",P2:"HTC",P3:"Micromax",P4:" Apple"}
  ]
       
   return ( 
       <div className='App'>
           <Answer1 {...info[0]}/>
           <Answer1 {...info[1]}/>
       </div>
  );
}

export default App;
