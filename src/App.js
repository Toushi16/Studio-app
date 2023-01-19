import Collections from "./components/Collections/Collections.jsx";
import Home from "./components/Home/Home.jsx";
import Mail from "./components/Mail/Mail.jsx";
import News from "./components/News/News.jsx";
import Projects from './components/Projects/Projects.jsx';
import Stories from "./components/Stories/Stories.jsx";

function App() {
  return (
    <div className="App">
      <Home />
      <News />
      <Collections />
      <Projects />
      <Stories />
      <Mail />
    </div>
  );
}

export default App;
