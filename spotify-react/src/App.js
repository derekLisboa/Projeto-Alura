import './App.css';
import Header from '../src/components/Header/Header';
import Sidebar from '../src/components/Sidebar/Sidebar';
import Footer from '../src/components/Footer/Footer';
import Main from '../src/components/Main/Main';

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;