import { useState } from "react";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Students from "./Students.jsx";
import Contact from "./Contact.jsx";

const SCHOOL_NAME = "Your School Name";
const CLASS_NAME = "TVET Certificate IV - Software Development";

function Header({ schoolName, currentView, onNavigate }) {
  const pages = ["Home", "About", "Students", "Contact"];

  return (
    <header>
      <h1>{schoolName}</h1>
      <p>{CLASS_NAME}</p>
      <nav aria-label="Main navigation">
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onNavigate(page)}
            disabled={currentView === page}
          >
            {page}
          </button>
        ))}
      </nav>
      <hr />
    </header>
  );
}

export default function App() {
  const [currentView, setCurrentView] = useState("Home");
  const [clickCount, setClickCount] = useState(0);

  function navigateTo(view) {
    setCurrentView(view);
  }

  return (
    <main>
      <Header
        schoolName={SCHOOL_NAME}
        currentView={currentView}
        onNavigate={navigateTo}
      />

      {currentView === "Home" && (
        <Home
          schoolName={SCHOOL_NAME}
          className={CLASS_NAME}
          onNavigate={navigateTo}
          clickCount={clickCount}
          onCountClick={() => setClickCount((count) => count + 1)}
        />
      )}
      {currentView === "About" && <About schoolName={SCHOOL_NAME} />}
      {currentView === "Students" && <Students className={CLASS_NAME} />}
      {currentView === "Contact" && (
        <Contact schoolName={SCHOOL_NAME} onNavigate={navigateTo} />
      )}

      <hr />
      <footer>
        <p>{SCHOOL_NAME} | {CLASS_NAME}</p>
        <p>ReactJS class website practical assessment.</p>
      </footer>
    </main>
  );
}