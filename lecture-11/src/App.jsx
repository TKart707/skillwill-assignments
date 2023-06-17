import React from "react";
import "./App.css";
import BooksList from "./components/BooksList";
import { BookData } from "./data";

function App() {
  return (
    <div className="app">
      <BooksList BookData={BookData} />
    </div>
  )
}

export default App;

