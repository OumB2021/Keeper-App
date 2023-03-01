import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

console.log(notes);
function App() {
  return (
    <div>
      <Header />
      {notes.map((card) => {
        <Note key={card.key} title={card.title} content={card.content} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
