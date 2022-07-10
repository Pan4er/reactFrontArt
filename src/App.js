import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import AllContextProvider from './context/AllContext';
import AboutUs from './pages/AboutUs';
import AllPosts from './pages/AllPosts';
import AllVideos from './pages/AllVideos';
import Contacts from './pages/Contacts';
import CurrentPost from './pages/CurrentPost';
import CurrentVideo from './pages/CurrentVideo';
import MainPage from './pages/MainPage';

function App() {

  // axios.get("http://51.250.39.117:8000/videos/10").then(res => console.log(res.data)).then(data => console.log(data, "DATA"))

  return (
    <AllContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainPage/>} path="/" />
          <Route element={<AllVideos/>} path="/blog/videos" />
          <Route element={<AllPosts/>} path="/blog/posts" />
          <Route element={<AboutUs/>} path="/about-us" />
          <Route element={<Contacts/>} path="/contacts" />
          <Route element={<CurrentVideo/>} path="/blog/videos/:videoId" />
          <Route element={<CurrentPost/>} path="/blog/posts/:postId" />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </AllContextProvider>
  );
}

export default App;
