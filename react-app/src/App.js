import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import JavaCode from './components/JavaCode';
import SQLCode from './components/SQLCode';
import CypherCode from './components/CypherCode';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <Link to="/">Home</Link>
            {' '}
            |
            <Link to="/java">Java</Link>
            {' '}
            |
            <Link to="/sql">SQL</Link>
            {' '}
            |
            <Link to="/cypher">Cypher</Link>
            {' '}
            |
          </ul>

        </nav>
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>

      </header>
      <body>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="java" element={<JavaCode />} />
          <Route path="sql" element={<SQLCode />} />
          <Route path="cypher" element={<CypherCode />} />
        </Routes>
      </body>
    </div>
  );
}

// App.js
function Home() {
  return (
    <main>
      <h2>Welcome to the homepage!</h2>
      <p>You can do this, I believe in you.</p>
    </main>
  );
}

export default App;
