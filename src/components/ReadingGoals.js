import React from 'react';

function ReadingGoals() {
  return (
    <div className="card mb-4">
      <div className="card-header bg-success text-white">閱讀目標</div>
      <div className="card-body">
        <p>年度目標：50 本書</p>
        <p>已完成：20 本書</p>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
        </div>
      </div>
    </div>
  );
}

export default ReadingGoals;
