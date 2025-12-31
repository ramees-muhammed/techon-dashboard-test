import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import MainLayout from './components/layout/MainLayout';


const App: React.FC = () => {
  return (
    <Routes>

      <Route path="/" element={<MainLayout />}>
        


        <Route path="*" element={<Navigate to="/" replace />} />
        
      </Route>



    </Routes>
  );
};

export default App;
