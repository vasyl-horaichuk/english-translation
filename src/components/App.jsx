import Navigation from './AppBar';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
