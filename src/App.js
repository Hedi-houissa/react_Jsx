import './App.css';
import image from "./imageInSrc.jpg";

function App() {
  return (
    
  <div className="column" style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    
    <h1 className="title">Houissa hedi</h1>

    <img src={image} alt="src not exist" />

    <img src="/imageInPublic.jpg"  alt="public not exist"/>

    <video width={320} height={240} controls >
    <source src="myVideo.mp4" type="video/mp4" />
    </video>

   
  </div>
 

    
  );

}

export default App;
