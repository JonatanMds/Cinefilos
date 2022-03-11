import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from "./components/footer/Footer";
// import Contato from "./components/contato/Contato";
// import Cards from "./components/cards/Cards";
// import Contato from "./components/contato/Contato";
// import Destaque from "./components/destaque/Destaque";
import NavBar from './components/navbar/NavBar'
import Home from './pages/Home/Home';
// import TopsSemana from './pages/topsDaSemana/TopsSemana'
import Tmdb from "./tmdbApi/Tmdb";

function App() {


  const [films, setFilms] = useState([])

  useEffect(()=>{
    const getFilms = async()=>{
      let list = await Tmdb.getHomeList();
      setFilms(list)
    }

    getFilms()
  },[]);

  // console.log(films)
  // const [films, setFilms] = useState([])

  //   useEffect(()=>{
  //     const getFilms = async() =>{
  //       const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=7f4036307af9ad9a12fc09c4f4974fa0')
  //       const data = await response.json()
  //       setFilms(data.results)
        
  //     } 
  //     getFilms()
  //   },[])

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home props={films} />}></Route>
        {/* <Route exact path="www.linkedin.com/in/jonatanmds" element={<Contato />}></Route> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
