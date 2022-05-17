import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';

// Importando páginas
import Home from './pages/home.page';
import Ticket from './pages/ticket.page';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/tickets" element={ <Ticket /> } />
            </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
