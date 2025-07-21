<!-- Bootstrap 5 CDN -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

# 專案開發進度（To-Do List）

<div class="container my-4">
  <div class="row">
    <div class="col-md-8 mx-auto">
      <div class="card mb-4">
        <div class="card-header bg-primary text-white">開發任務進度</div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <table class="table table-bordered table-striped mb-0">
              <thead class="table-light">
                <tr>
                  <th>編號</th>
                  <th>任務</th>
                  <th>工時</th>
                  <th>前置</th>
                  <th>狀態</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>.1</td><td>確認使用者核心需求</td><td>0.5</td><td>無</td><td>未開始</td></tr>
                <tr><td>1.2</td><td>討論紀錄格式與可編輯性</td><td>0.5</td><td>1.1</td><td>未開始</td></tr>
                <tr><td>1.3</td><td>定義紀錄欄位與驗證規則</td><td>0.5</td><td>1.2</td><td>未開始</td></tr>
                <tr><td>1.4</td><td>規劃使用者介面流程</td><td>0.5</td><td>1.3</td><td>未開始</td></tr>
                <tr><td>1.5</td><td>撰寫需求規格書（SRS）</td><td>0.5</td><td>1.4</td><td>未開始</td></tr>
                <tr><td>2.1</td><td>設計資料結構（書名、心得等）</td><td>0.5</td><td>1.5</td><td>未開始</td></tr>
                <tr><td>2.2</td><td>設計 UI 草圖</td><td>0.5</td><td>1.5</td><td>未開始</td></tr>
                <tr><td>2.3</td><td>決定資料儲存方式</td><td>0.5</td><td>1.5</td><td>未開始</td></tr>
                <tr><td>2.4</td><td>撰寫設計文件</td><td>0.5</td><td>2.1,2.2</td><td>未開始</td></tr>
                <tr><td>3.1</td><td>建立資料模型（BookRecord 類別）</td><td>0.5</td><td>2.1</td><td>未開始</td></tr>
                <tr><td>3.2</td><td>開發新增紀錄功能</td><td>1.0</td><td>3.1</td><td>未開始</td></tr>
                <tr><td>3.3</td><td>開發瀏覽紀錄清單功能</td><td>1.0</td><td>3.1</td><td>未開始</td></tr>
                <tr><td>3.4</td><td>開發單筆查看與編輯功能</td><td>1.0</td><td>3.3</td><td>未開始</td></tr>
                <tr><td>3.5</td><td>開發刪除紀錄功能</td><td>0.5</td><td>3.3</td><td>未開始</td></tr>
                <tr><td>3.6</td><td>資料儲存實作（如SharedPreferences）</td><td>0.5</td><td>3.2–3.5</td><td>未開始</td></tr>
                <tr><td>3.7</td><td>表單輸入驗證</td><td>0.5</td><td>3.2</td><td>未開始</td></tr>
                <tr><td>4.1</td><td>單元測試：新增與儲存</td><td>0.5</td><td>3.2</td><td>未開始</td></tr>
                <tr><td>4.2</td><td>邏輯測試：新增/修改/刪除流程</td><td>0.5</td><td>3.4,3.5</td><td>未開始</td></tr>
                <tr><td>4.3</td><td>UI 測試：顯示與操作測試</td><td>0.5</td><td>3.3–3.5</td><td>未開始</td></tr>
                <tr><td>4.4</td><td>邊界與錯誤測試</td><td>0.5</td><td>3.7</td><td>未開始</td></tr>
                <tr><td>5.1</td><td>整合功能模組</td><td>0.5</td><td>4.1–4.4</td><td>未開始</td></tr>
                <tr><td>5.2</td><td>產出可執行檔（如 APK）</td><td>0.5</td><td>5.1</td><td>未開始</td></tr>
                <tr><td>5.3</td><td>撰寫簡易使用說明文件</td><td>0.5</td><td>5.1</td><td>未開始</td></tr>
                <tr><td>5.4</td><td>客戶驗收與交付</td><td>0.5</td><td>5.2,5.3</td><td>未開始</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="card mb-4">
        <div class="card-header bg-success text-white">系統分層架構</div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item"><b>前端（Presentation Layer）</b>：React / Android App / Web前端</li>
            <li class="list-group-item"><b>應用邏輯層（Application Layer）</b>：Java / Node.js / Spring Boot</li>
            <li class="list-group-item"><b>資料層（Data Layer）</b>：MySQL / Firebase / MongoDB</li>
          </ul>
        </div>
      </div>

      <div class="card mb-4">
        <div class="card-header bg-info text-white">主要畫面設計草圖</div>
        <div class="card-body">
          <ul>
            <li>登入/註冊畫面（Email/Google 登入）</li>
            <li>主畫面（閱讀進度、月閱讀圖表、推薦書籍、快速新增）</li>
            <li>書籍紀錄列表（分類標籤、書籍卡片）</li>
            <li>新增/編輯書籍紀錄（自動填資料、評分、心得）</li>
            <li>推薦書單頁（封面、書名、類型標籤、推薦說明）</li>
            <li>閱讀目標設定與提醒（目標設定、進度、提醒開關）</li>
          </ul>
        </div>
      </div>

      <div class="card mb-4">
        <div class="card-header bg-warning text-dark">資料庫設計（ER 模型）</div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <table class="table table-bordered mb-0">
              <thead class="table-light">
                <tr><th>資料表</th><th>欄位</th><th>型別</th><th>說明</th></tr>
              </thead>
              <tbody>
                <tr><td rowspan="5">Book</td><td>book_id (PK)</td><td>int</td><td>書籍主鍵</td></tr>
                <tr><td>title</td><td>varchar</td><td>書名</td></tr>
                <tr><td>author</td><td>varchar</td><td>作者</td></tr>
                <tr><td>isbn</td><td>varchar</td><td>ISBN</td></tr>
                <tr><td>category</td><td>varchar</td><td>書籍分類</td></tr>
                <tr><td rowspan="8">ReadingRecord</td><td>record_id (PK)</td><td>int</td><td>紀錄主鍵</td></tr>
                <tr><td>user_id (FK)</td><td>int</td><td>對應使用者</td></tr>
                <tr><td>book_id (FK)</td><td>int</td><td>對應書籍</td></tr>
                <tr><td>status</td><td>varchar</td><td>想讀／閱讀中／已讀完</td></tr>
                <tr><td>start_date</td><td>date</td><td>開始時間</td></tr>
                <tr><td>end_date</td><td>date</td><td>結束時間</td></tr>
                <tr><td>rating</td><td>int</td><td>評分</td></tr>
                <tr><td>note</td><td>text</td><td>閱讀心得</td></tr>
                <tr><td rowspan="4">User</td><td>user_id (PK)</td><td>int</td><td>使用者主鍵</td></tr>
                <tr><td>email</td><td>varchar</td><td>電子郵件</td></tr>
                <tr><td>password</td><td>varchar</td><td>密碼</td></tr>
                <tr><td>preference</td><td>text</td><td>喜好類型</td></tr>
                <tr><td rowspan="6">ReadingGoal</td><td>goal_id (PK)</td><td>int</td><td>目標ID</td></tr>
                <tr><td>user_id (FK)</td><td>int</td><td>對應使用者</td></tr>
                <tr><td>year</td><td>int</td><td>年份</td></tr>
                <tr><td>month</td><td>int</td><td>月份</td></tr>
                <tr><td>target_books</td><td>int</td><td>目標本數</td></tr>
                <tr><td>target_hours</td><td>int</td><td>目標閱讀時數</td></tr>
                <tr><td>current_books</td><td>int</td><td>已讀本數</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- 登入頁面 -->
      <div id="login-page" class="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div class="card p-4 shadow" style="width: 24rem;">
          <h3 class="text-center mb-4">登入系統</h3>
          <form>
            <div class="mb-3">
              <label for="email" class="form-label">電子郵件</label>
              <input type="email" class="form-control" id="email" placeholder="輸入電子郵件">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">密碼</label>
              <input type="password" class="form-control" id="password" placeholder="輸入密碼">
            </div>
            <button type="button" id="login-button" class="btn btn-primary w-100">登入</button>
          </form>
        </div>
      </div>

      <!-- 主頁面 -->
      <div id="main-page" class="d-none">
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">閱讀紀錄系統</a>
            <button class="btn btn-outline-danger" id="logout-button">登出</button>
          </div>
        </nav>

        <div class="container mt-4">
          <h2>個人閱讀紀錄與推薦系統</h2>
          <p>這是您的閱讀紀錄與推薦書籍的主頁面。</p>

          <!-- 分頁功能 -->
          <div id="pagination-container" class="mt-4">
            <nav>
              <ul class="pagination justify-content-center">
                <li class="page-item"><a class="page-link" href="#" data-page="1">1</a></li>
                <li class="page-item"><a class="page-link" href="#" data-page="2">2</a></li>
                <li class="page-item"><a class="page-link" href="#" data-page="3">3</a></li>
              </ul>
            </nav>
          </div>

          <!-- 分頁內容 -->
          <div id="page-1" class="page-content">
            <h3>分頁 1</h3>
            <p>這是第一頁的內容。</p>
          </div>
          <div id="page-2" class="page-content d-none">
            <h3>分頁 2</h3>
            <p>這是第二頁的內容。</p>
          </div>
          <div id="page-3" class="page-content d-none">
            <h3>分頁 3</h3>
            <p>這是第三頁的內容。</p>
          </div>
        </div>
      </div>

      <div class="card mb-4">
        <div class="card-header bg-info text-white">新增閱讀紀錄</div>
        <div class="card-body">
          <form id="add-record-form">
            <div class="mb-3">
              <label for="book-title" class="form-label">書名</label>
              <input type="text" class="form-control" id="book-title" placeholder="輸入書名" required>
            </div>
            <div class="mb-3">
              <label for="book-author" class="form-label">作者</label>
              <input type="text" class="form-control" id="book-author" placeholder="輸入作者" required>
            </div>
            <div class="mb-3">
              <label for="reading-status" class="form-label">閱讀狀態</label>
              <select class="form-select" id="reading-status" required>
                <option value="想讀">想讀</option>
                <option value="閱讀中">閱讀中</option>
                <option value="已讀完">已讀完</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary">新增紀錄</button>
          </form>
          <div id="record-list" class="mt-4">
            <h5>新增的紀錄：</h5>
            <ul class="list-group" id="record-list-items"></ul>
          </div>
        </div>
      </div>

      <script>
        document.addEventListener('DOMContentLoaded', function () {
          const loginPage = document.getElementById('login-page');
          const mainPage = document.getElementById('main-page');
          const logoutButton = document.getElementById('logout-button');
          const pages = document.querySelectorAll('.page-content');
          const pageLinks = document.querySelectorAll('.page-link');

          // 模擬登入邏輯
          document.getElementById('login-button').addEventListener('click', function () {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // 簡單的登入驗證邏輯
            if (email === 'user@example.com' && password === '123') {
              alert('登入成功！');
              loginPage.classList.add('d-none'); // 隱藏登入頁面
              mainPage.classList.remove('d-none'); // 顯示主頁面
            } else {
              alert('登入失敗，請檢查帳號或密碼。');
            }
          });

          // 登出邏輯
          logoutButton.addEventListener('click', function () {
            mainPage.classList.add('d-none'); // 隱藏主頁面
            loginPage.classList.remove('d-none'); // 顯示登入頁面
          });

          // 分頁邏輯
          pageLinks.forEach(link => {
            link.addEventListener('click', function (e) {
              e.preventDefault();

              // 隱藏所有頁面
              pages.forEach(page => page.classList.add('d-none'));

              // 顯示對應頁面
              const pageToShow = document.getElementById(`page-${this.dataset.page}`);
              if (pageToShow) {
                pageToShow.classList.remove('d-none');
              }

              // 更新分頁按鈕的狀態
              pageLinks.forEach(link => link.parentElement.classList.remove('active'));
              this.parentElement.classList.add('active');
            });
          });

          const form = document.getElementById('add-record-form');
          const recordList = document.getElementById('record-list-items');

          form.addEventListener('submit', function (e) {
            e.preventDefault();

            // 獲取表單數據
            const title = document.getElementById('book-title').value;
            const author = document.getElementById('book-author').value;
            const status = document.getElementById('reading-status').value;

            // 新增到列表
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = `書名：${title}，作者：${author}，狀態：${status}`;
            recordList.appendChild(listItem);

            // 清空表單
            form.reset();
          });
        });
      </script>
    </div>
  </div>
</div>
