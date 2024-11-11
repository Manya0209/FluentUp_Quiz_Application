import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { DashBoard } from './modules/quiz/pages/DashBoard';
import { UserPage } from './modules/user/pages/UserPage';

function App() {
  return (
     <BrowserRouter>
    <DashBoard/>
    </BrowserRouter> 
  );
}

export default App;
