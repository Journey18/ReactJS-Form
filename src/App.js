import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Form from './components/Form';

function App() {
  return (
    // <div className="App">
     
    // </div>

    <>
    <Routes>
        <Route element={<Form/>} path='/'></Route>
    </Routes>
    </>
  );
}

export default App;
