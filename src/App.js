import './App.css';
import { CasamentoProvider } from './contexts/CasamentoContext';
import { ConfraternizacaoProvider } from './contexts/ConfraternizacaoContext';
import { FormaturaProvider } from './contexts/FormaturaContext';
import Routes from './routes/Routes';


function App() {
  return (
    <div className="App">
      <CasamentoProvider>
        <FormaturaProvider>
          <ConfraternizacaoProvider>
            <Routes/>
          </ConfraternizacaoProvider>
        </FormaturaProvider>
      </CasamentoProvider>
    </div>
  );
}

export default App;
