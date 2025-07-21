import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Books from "../pages/Books";
import BookForm from "../pages/BookForm";
import Goals from "../pages/Goals";
import Recommend from "../pages/Recommend";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/add" element={<BookForm />} />
        <Route path="/books/edit/:id" element={<BookForm />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
