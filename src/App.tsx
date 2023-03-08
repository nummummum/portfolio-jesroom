import "./App.css";
import "./common.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RoomPage from "./pages/RoomPage";
import FurniturePage from "./pages/FurniturePage";
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";
import { ErrorBoundary } from "react-error-boundary";
import Header from "./components/Header";
import IntroPage from "./pages/IntroPage";
import RoomDetailPage from "./pages/RoomDetailPage";
import FurnitureDetailPage from "./pages/FurnitureDetailPage";
import AddFurniture from "./components/AddFurniture";
import AddRoom from "./components/AddRoom";
function App() {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="intro" element={<IntroPage />} />
          <Route path="room" element={<RoomPage />} />
          <Route path="room/:id" element={<RoomDetailPage />} />
          <Route path="furniture" element={<FurniturePage />} />
          <Route path="furniture/:id" element={<FurnitureDetailPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
