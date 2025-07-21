import React from 'react';

function Navbar() {
  const handleLogout = () => {
    window.location.href = "login.html";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">閱讀紀錄系統</a>
        <button className="btn btn-outline-danger" onClick={handleLogout}>登出</button>
      </div>
    </nav>
  );
}

export default Navbar;
