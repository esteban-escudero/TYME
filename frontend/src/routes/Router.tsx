import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cliente" element={<div>Vista Cliente</div>} />
        <Route path="/entrenador" element={<div>Vista Entrenador</div>} />
        <Route path="/admin" element={<div>Vista Admin</div>} />
      </Routes>
    </BrowserRouter>
  );
}
