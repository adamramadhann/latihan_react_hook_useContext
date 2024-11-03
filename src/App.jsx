import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailCard from './page/useQuery/DetailCard';
import CardJson from './page/useQuery/CardJson';
import CardProduck from './page/Latihan/CardProduck';


function App() {
    return (
        <Routes>
            {/* <Route path="/" element={<CardJson />} /> */}
            <Route path="/detail/:id" element={<DetailCard />} />
            <Route path="/" element={<CardProduck />} />
        </Routes>
    );
}

export default App;
