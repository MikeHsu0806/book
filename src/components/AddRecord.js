import React from 'react';

function AddRecord() {
  return (
    <div className="card mb-4">
      <div className="card-header bg-info text-white">新增閱讀紀錄</div>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="book-title" className="form-label">書名</label>
            <input type="text" className="form-control" id="book-title" placeholder="輸入書名" />
          </div>
          <div className="mb-3">
            <label htmlFor="book-author" className="form-label">作者</label>
            <input type="text" className="form-control" id="book-author" placeholder="輸入作者" />
          </div>
          <div className="mb-3">
            <label htmlFor="reading-status" className="form-label">閱讀狀態</label>
            <select className="form-select" id="reading-status">
              <option value="想讀">想讀</option>
              <option value="閱讀中">閱讀中</option>
              <option value="已讀完">已讀完</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">新增紀錄</button>
        </form>
      </div>
    </div>
  );
}

export default AddRecord;
