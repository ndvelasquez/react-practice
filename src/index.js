import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import FiguresPage from './routes/figuresPage';
import DiscountsPage from './routes/discountsPage';
import AveragesPage from './routes/averagesPage';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index />
        <Route path="/figures" element={<FiguresPage />} />
        <Route path="/discounts" element={<DiscountsPage />} />
        <Route path="/averages" element={<AveragesPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
)