import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'devextreme/dist/css/dx.light.css';
import App from './App';
import Edit from './pages/Edit';
import UserContextProvider from "./store/users-context.tsx";
import FilterContextProvider from './store/filter-context.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <UserContextProvider>
      <FilterContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </FilterContextProvider>
    </UserContextProvider>



  </StrictMode>
);