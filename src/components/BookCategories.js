import React from 'react';

function BookCategories() {
  return (
    <section id="book-categories" className="mb-4">
      <div className="card">
        <div className="card-header bg-secondary text-white">書籍分類瀏覽</div>
        <div className="card-body">
          <div className="d-grid gap-2">
            <button className="btn btn-outline-primary">文學</button>
            <button className="btn btn-outline-secondary">科學</button>
            <button className="btn btn-outline-success">歷史</button>
            <button className="btn btn-outline-danger">藝術</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookCategories;
