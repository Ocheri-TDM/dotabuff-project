import Main from "./Pages/Main"
import Post24 from "./Pages/Post24"
import NewsInt24 from "./Pages/NewsInt24"
import {Routes, Route} from "react-router-dom"
import StatsM from "./Pages/StatsM"

import "./assets/css/style.css";
function App() {
  return (
    <>
    <main>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/News/Int24/:id" element={<NewsInt24/>}/>
        <Route path="/Post24/:id" element={<Post24/>}/>
        <Route path="/Stats" element={<StatsM/>}/>
      </Routes>
    </main>
    </>
  );
}

export default App;