import './App.css';
import { Route, Routes } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Information from './Components/Information';

function App() {
  return (
    <div className="">
     <Routes>
     <Route path="/" element={<Dashboard />}>
     <Route index element={<Information />} />
     <Route path="/" element={<Information />} />
     </Route>
     </Routes>
    </div>
  );
}

export default App;
