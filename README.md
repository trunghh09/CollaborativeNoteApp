<h3 align="center">Tổng quan dự án</h3>

<br />

<blockquote style="font-style: italic; font-size: 0.85rem; font-weight: 500;">
Ứng dụng cho phép nhiều người dùng soạn thảo, chia sẻ và chỉnh sửa ghi chú theo thời gian thực (giống Notion / Google docs thu nhỏ).
</blockquote>

<br />

<h4>🎯 Tính năng cốt lõi</h4>

<br />

<ol>
  <li>
    <bold>Auth & User Management</bold>
    <ul>
      <li>Đăng ký, đăng nhập với Google.</li>
      <li>Profile người dùng (avatar, tên hiển thị).</li>
    </ul>
  </li>
  <li>
    <bold>Note Management</bold>
    <ul>
      <li>CRUD note (Tạo, chỉnh sửa, xoá, chia sẻ).</li>
      <li>Gắn tag / folder để tổ chức ghi chú.</li>
      <li>Tìm kiếm note theo keyword</li>
    </ul>
  </li>
  <li>
    <bold>Collaboration</bold>
    <ul>
      <li>Realtime editing: nhiều người có thể chỉnh sửa cùng 1 note.</li>
      <li>Hiển thị con trỏ (cursor) của user khác (Giống Google docs).</li>
      <li>Highlight đoạn text mà user khác đang chỉnh.</li>
    </ul>
  </li>
  <li>
    <bold>Offline-first</bold>
    <ul>
      <li>Khi mất mạng vẫn có thể chỉnh sửa note -> tự đồng bộ lại khi online.</li>
      <li>Sử dụng IndexDB + Service Worker để cache dữ liệu.</li>
    </ul>
  </li>
  <li>
    <bold>Versioning & History</bold>
    <ul>
      <li>Lưu lại lịch sử chỉnh sửa (undo / redo nhiều bước).</li>
      <li>Có thể rollback về phiên bản trước.</li>
    </ul>
  </li>
  <li>
    <bold>Sharing & Permission</bold>
    <ul>
      <li>Share note qua link (Chỉ xem hoặc cho phép edit).</li>
      <li>Quản lý quyền: Owner / Editor / Viewer.</li>
    </ul>
  </li>
</ol>

<br />

<h4>🛠️ Tech Stack sử dụng trong dự án</h4>

<br />

<h5>Frontend</h5>

<br />

<ul>
  <li>React (TypeScript).</li>
  <li>TailwindCSS (UI nhanh, hiện đại).</li>
  <li>Y.js / Automerge (CRDT) để xử lý realtime collaboration</li>
  <li>Quill.js / TipTap / Slate.js cho text editor.</li>
</ul>

<br />

<h5>Backend</h5>

<br />

<ul>
  <li>Node js + Express / NestJS</li>
  <li>WebSocket (Socket.IO) cho realtime</li>
  <li>PostgreSQL + Prisma / Drizzle để lưu note & user.</li>
  <li>Redis (nếu muốn scale realtime).</li>
</ul>

<br />

<h5>Offline-first</h5>

<br />

<ul>
  <li>IndexedDB để lưu local notes.</li>
  <li>Service Worker để app hoạt động khi mất mạng (PWA)</li>
</ul>

<br />

<h4>🌐 Triển khai (Deployment)</h4>

<br />

<ul>
  <li>Deploy frontend + backend trên vercel / netlify + render/fly.io.</li>
  <li>Dùng docker nếu muốn đồng bộ môi trường.</li>
  <li>(Sau này khi học DevOps) -> chuyển sang Kubernetes, Github Actions CI / CD, monitoring bằng Grafana / Sentry.</li>
</ul>

<br />

<h4>📈 Mục tiêu mong muốn của dự án</h4>

<br />

<ul>
  <li>
    Học tập và rèn luyện các kỹ năng nâng cao: realtime sync, giải quyết xung đột (conflict resolution), online-first.
  </li>
  <li>
    Có thể mở rộng khi hoàn thiện dự án sau: AI assistant như gợi ý viết note, export PDF, plugin system,...
  </li>
</ul>

<br />

<h4>🛣️ Roadmap phát triển Collaborative Note App</h4>

<br />

<div style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;">Giai đoạn 1 – MVP (Minimum Viable Product)</div>

<h6>🎯 Mục tiêu: Có một app note cơ bản, mỗi user dùng riêng.</h6>

<ul>
  <li>Auth & User: Đăng ký / đăng nhập với tài khoản Google.</li>
  <li>CRUD Note: Tạo, sửa, xoá và xem note.</li>
  <li>UI cơ bản: Editor (Quill / Titap / Slate), danh sách note, dark mode.</li>
  <li>Database: PostgreSQL + Prisma</li>
  <li>Triển khai nhanh: Deploy FE (Vercel), backend (Render / Netlify functions).</li>
</ul>

<h6>👉 Kết quả: Một app note cá nhân, sạch sẽ, có thể demo thực tế.</h6>

<br />

<div style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;">Giai đoạn 2 – Realtime Collaboration</div>

<h6>🎯 Mục tiêu: Nhiều user cùng edit 1 note.</h6>

<ul>
  <li>
    <div>Sharing:</div>
    <ul>
      <li>Share qua link.</li>
      <li>Hoặc invite theo gmail.</li>
    </ul>
  </li>
  <li>
    <div>Realtime:</div>
    <ul>
      <li>WebSocket (Socket.IO)</li>
      <li>Dùng Y.js hoặc Automerge (CRDT) để xử lý xung đột khi edit.</li>
    </ul>
  </li>
  <li>UI cải tiến: Thấy con trỏ (cursor) của người khác, highlight text đang edit.</li>
</ul>

<h6>👉 Kết quả: Note có thể edit chung, giống Google Docs thu nhỏ.</h6>

<br />

<div style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;">Giai đoạn 3 – Offline-first & Sync</div>

<h6>🎯 Mục tiêu: Dùng được ngay cả khi mất mạng.</h6>

<ul>
  <li>IndexedDB: Lưu bản copy local.</li>
  <li>Service Worker: Đồng bộ lại khi online lại.</li>
</ul>

<h6>👉 Kết quả: Đồng bộ lại khi online lại.</h6>

<br />

<div style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;">Giai đoạn 4 – Sharing nâng cao & Production-ready</div>

<h6>🎯 Mục tiêu: Biến thành sản phẩm có thể scale.</h6>

<ul>
  <li>Permission: Owner / Editor / Viewer.</li>
  <li>Versioning: Lịch sử chỉnh sửa, rollback.</li>
  <li>Search: Tìm note theo keyword (ElasticSearch / Meilisearch)</li>
  <li>
    <div>Deploy chuyên nghiệp:</div>
    <ul>
      <li>Dockernize toàn bộ app.</li>
      <li>CI / CD (Github Actions).</li>
      <li>Logging (Sentry), monitoring (Grafana / Prometheus).</li>
    </ul>
  </li>
</ul>

<h6>👉 Kết quả: Một sản phẩm hoàn chỉnh, gần giống Notion/Google Docs thu nhỏ.</h6>

<br />
