
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import Jumbo from './components/Jumbotron';
import LatestRelease from './components/LatestRelease';

function App() {
  return (
    <div>
      <MyNav title=" My Book Store" />
      <Jumbo message = "Welcome! to My Book Store"/>
      <LatestRelease />
    </div>
  );
}

export default App
