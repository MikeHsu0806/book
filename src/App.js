import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuickSearch from './components/QuickSearch';
import RecentReads from './components/RecentReads';
import PopularBooks from './components/PopularBooks';
import BookCategories from './components/BookCategories';
import ReadingGoals from './components/ReadingGoals';
import ReadingStats from './components/ReadingStats';
import AddRecord from './components/AddRecord';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <header className="text-center mb-4">
          <h1 className="text-primary">歡迎使用個人閱讀紀錄與推薦系統</h1>
          <p className="text-muted">管理你的閱讀紀錄，探索更多書籍</p>
        </header>
        <QuickSearch />
        <RecentReads />
        <PopularBooks />
        <BookCategories />
        <ReadingGoals />
        <ReadingStats />
        <AddRecord />
      </div>
      <Footer />
    </div>
  );
}

export default App;
