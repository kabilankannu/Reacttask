import logo from './logo.svg';
import Se from './App2.js';
import './App.css';
function App() {
    var l=20;
    var b=40;
    var c=2*(l+b);
  return (
    <div>
      <h1>Area of shapes</h1>
    <p>Area of rectangle is {c}</p>
    <Se/>
    </div>
    );
}
export default App;
