import './App.css';
import { CasamentoProvider } from './contexts/CasamentoContext';
import { FormaturaProvider } from './contexts/FormaturaContext';
import Routes from './routes/Routes';


function App() {
  return (
    <div className="App">
      <CasamentoProvider>
        <FormaturaProvider>
          <Routes/>
        </FormaturaProvider>
      </CasamentoProvider>
    </div>
  );
}

export default App;
