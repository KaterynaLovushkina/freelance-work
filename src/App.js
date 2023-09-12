import './App.css';
import Catalog from './components/Catalog/Catalog';
import Header from './components/Header/Header';
import Main from './components/Main/Main.jsx'
import Subscribe from './components/Subscribe/Subscribe';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className='custom-container'>
        <Header className="header-fixed"/>
        <Main/>
        <Catalog/>
        <Subscribe/>
        <Contact/>
        <Header/>
     </div>
  );
}

export default App;
