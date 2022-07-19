import './App.css';
import { CasamentoProvider } from './contexts/CasamentoContext';
import Routes from './routes/Routes';


function App() {
  return (
    <div className="App">
      <CasamentoProvider>
        <Routes/>
      </CasamentoProvider>
    </div>
  );
}

export default App;
