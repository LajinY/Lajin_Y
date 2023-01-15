import React from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./requests";
import Header from "./components/Header";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Row
        title="Netflix-Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargerRow
      />
      <Row title="Trending-Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top-Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
