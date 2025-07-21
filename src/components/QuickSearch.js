import React from 'react';

function QuickSearch() {
  return (
    <section id="quick-search" className="mb-4">
      <div className="card">
        <div className="card-header bg-secondary text-white">快速搜索</div>
        <div className="card-body">
          <input type="text" className="form-control" placeholder="輸入書名或作者進行搜索" />
        </div>
      </div>
    </section>
  );
}

export default QuickSearch;
