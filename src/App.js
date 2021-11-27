import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Row from "./components/Row/Row";
import requests from "./requests";
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Banner/>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLarge={false}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLarge={false}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLarge={false} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLarge={false}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLarge={false}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLarge={false}/>
      <Row
        title="Netflix Documentries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;


