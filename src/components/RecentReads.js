import React from 'react';

function RecentReads() {
  return (
    <section id="recent-reads" className="mb-4">
      <div className="card">
        <div className="card-header bg-dark text-white">最近閱讀紀錄</div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">書名：書名 A - 作者：作者 A</li>
            <li className="list-group-item">書名：書名 B - 作者：作者 B</li>
            <li className="list-group-item">書名：書名 C - 作者：作者 C</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default RecentReads;
