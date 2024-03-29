
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route index element={<ListEmployeeComponent />} />
        <Route path="/" element={<ListEmployeeComponent />}></Route>
        <Route path="/employees" element={<ListEmployeeComponent />}></Route>
        <Route path="/add-employee" element={<AddEmployeeComponent />}></Route>
        <Route path="/edit-employee/:id" element={<AddEmployeeComponent />}></Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;