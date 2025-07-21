import React from 'react';

function PopularBooks() {
  return (
    <section id="popular-books" className="mb-4">
      <div className="card">
        <div className="card-header bg-danger text-white">熱門書籍排行榜</div>
        <div className="card-body">
          <ol>
            <li>書名 X - 作者 X</li>
            <li>書名 Y - 作者 Y</li>
            <li>書名 Z - 作者 Z</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default PopularBooks;
