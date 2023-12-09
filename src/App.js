import {Routes, Route} from "react-router"
import Profilepage from './page/ProfilePage';
import Homepage from './page/Homepage';
import Header from "./Components/Header";
import UserProvider from "./context/UserProvider";
// import 'react-bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/profile/:id" element={<Profilepage/>}/>
    </Routes>
    </>
  );
}

export default App;
