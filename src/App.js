import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//  
import './App.css';

//Components
import Posts from './components/Posts';
import ListTask from './components/ListTasks';

/*
function HelloWorld(props) {
  console.log(props)
  return (
    <div id="hello">
      <h2>{props.text}</h2>
        Hola {props.nombre}
    </div>
  )
}

class HelloWorld extends React.Component {

  state = {
    show: true
  }

  toggleShow = () => {
    //this.state.show = false;
    this.setState({ show: !this.state.show })
  }

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h2>{this.props.text}</h2>
        Hola {this.props.nombre}
          <button onClick={() => { this.toggleShow() }}>Toggle Show</button>
        </div>
      )
    } else {
      return (
        <div>
          <h1>This component isn't enable.</h1>
          <button onClick={() => { this.toggleShow() }}>Toggle Show</button></div>
      )
    }
  }
}

//Posibles formas de llamar el componente de React

//FORMA ORIGINAL
function App (){
  return <div>Este es mi componente de de ArrowFunction <HelloWorld /> </div>
}
// FUNCION FLECHA
const App = () => { return <div>Este es mi componente de de ArrowFunction <HelloWorld /> </div> }

// CLASE
class App extends React.Component {
  render() {
    return <div>Este es mi componente desde una CLASE: <HelloWorld /> </div>
  }
}

function App() {
  return (
    <div>
      Estos son mis componentes
      <HelloWorld nombre="Luis" text="Texto - 1" />
      <HelloWorld nombre="Martin" text="Texto - 2" />
      <HelloWorld nombre="Saul" text="Texto - 3" />
    </div>
  );
}

*/


class App extends React.Component {


  render() {
    return (
      <Router>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/posts">Posts</Link>
        <Routes>
          <Route exact path="/" element={<ListTask />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Router>
    )
  }

}

export default App;