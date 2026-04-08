export default function UnderConstruction() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Inter:wght@300;400;500&display=swap');

        .uc-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          font-family: 'Inter', sans-serif;
        }

        .uc-wrapper {
          text-align: center;
          max-width: 640px;
          width: 100%;
        }

        .gear-ring {
          position: relative;
          width: 130px;
          height: 130px;
          margin: 0 auto 36px;
        }

        .gear-outer {
          width: 130px;
          height: 130px;
          animation: spin 8s linear infinite;
        }

        .gear-inner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          animation: spin-reverse 5s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(-360deg); }
        }

        .uc-badge {
          display: inline-block;
          background: #2d6a2d;
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 6px 18px;
          border-radius: 100px;
          margin-bottom: 20px;
        }

        .uc-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 6vw, 3.4rem);
          font-weight: 800;
          color: #1a2e1a;
          line-height: 1.15;
          margin-bottom: 16px;
        }

        .uc-title span { color: #3a8a3a; }

        .uc-desc {
          font-size: 15px;
          color: #4a6b4a;
          line-height: 1.7;
          margin-bottom: 40px;
          font-weight: 300;
        }

        .uc-progress-wrap {
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(80,160,80,0.2);
          border-radius: 16px;
          padding: 24px 28px;
          margin-bottom: 40px;
          backdrop-filter: blur(6px);
        }

        .uc-progress-label {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          font-weight: 500;
          color: #4a6b4a;
          margin-bottom: 10px;
        }

        .uc-progress-bar {
          width: 100%;
          height: 8px;
          background: rgba(80,160,80,0.15);
          border-radius: 100px;
          overflow: hidden;
        }

        .uc-progress-fill {
          height: 100%;
          width: 0%;
          background: linear-gradient(90deg, #3a8a3a, #5fbe5f);
          border-radius: 100px;
          animation: fill 2s ease-out 0.5s forwards;
        }

        @keyframes fill { to { width: 72%; } }

        .uc-notify-row {
          display: flex;
          gap: 10px;
          max-width: 420px;
          margin: 0 auto 40px;
        }

        .uc-input {
          flex: 1;
          padding: 12px 18px;
          border-radius: 100px;
          border: 1.5px solid rgba(80,160,80,0.3);
          background: rgba(255,255,255,0.7);
          font-size: 14px;
          color: #1a2e1a;
          outline: none;
          font-family: 'Inter', sans-serif;
        }

        .uc-input::placeholder { color: #8aab8a; }
        .uc-input:focus { border-color: #3a8a3a; }

        .uc-btn {
          padding: 12px 22px;
          border-radius: 100px;
          background: #2d6a2d;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          font-family: 'Syne', sans-serif;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.2s, transform 0.15s;
        }

        .uc-btn:hover { background: #1f4f1f; transform: scale(1.03); }

        .uc-socials {
          display: flex;
          justify-content: center;
          gap: 14px;
        }

        .uc-social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1.5px solid rgba(80,160,80,0.3);
          background: rgba(255,255,255,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3a8a3a;
          text-decoration: none;
          font-size: 14px;
          transition: background 0.2s, border-color 0.2s;
        }

        .uc-social-link:hover { background: #3a8a3a; color: #fff; border-color: #3a8a3a; }

        .uc-footer {
          margin-top: 48px;
          font-size: 12px;
          color: #7a9b7a;
        }

        @media (max-width: 480px) {
          .uc-notify-row { flex-direction: column; }
        }
      `}</style>

      <div className="uc-page">
        <div className="uc-wrapper">

          {/* Gears */}
          <div className="gear-ring">
            <svg className="gear-outer" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43 5h14l2 8a34 34 0 0 1 8.3 3.4l7.4-3.6 9.9 9.9-3.6 7.4A34 34 0 0 1 84.6 40l8 2v14l-8 2a34 34 0 0 1-3.4 8.3l3.6 7.4-9.9 9.9-7.4-3.6A34 34 0 0 1 59 82.6l-2 8H43l-2-8a34 34 0 0 1-8.3-3.4l-7.4 3.6-9.9-9.9 3.6-7.4A34 34 0 0 1 15.4 59l-8-2V43l8-2a34 34 0 0 1 3.4-8.3l-3.6-7.4 9.9-9.9 7.4 3.6A34 34 0 0 1 41 5.4Z" fill="rgba(58,138,58,0.15)" stroke="#3a8a3a" strokeWidth="2"/>
              <circle cx="50" cy="50" r="18" fill="rgba(58,138,58,0.08)" stroke="#3a8a3a" strokeWidth="2"/>
            </svg>
            <svg className="gear-inner" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26 3h8l1 5a20 20 0 0 1 5 2l4-2 5.7 5.7-2 4a20 20 0 0 1 2 5l5 1v8l-5 1a20 20 0 0 1-2 5l2 4L43 47l-4-2a20 20 0 0 1-5 2l-1 5h-8l-1-5a20 20 0 0 1-5-2l-4 2L9.3 41.3l2-4a20 20 0 0 1-2-5l-5-1v-8l5-1a20 20 0 0 1 2-5l-2-4L15 7l4 2a20 20 0 0 1 5-2Z" fill="rgba(45,106,45,0.2)" stroke="#2d6a2d" strokeWidth="1.5"/>
              <circle cx="30" cy="30" r="9" fill="rgba(45,106,45,0.15)" stroke="#2d6a2d" strokeWidth="1.5"/>
            </svg>
          </div>

          <div className="uc-badge">Under Construction</div>

          <h1 className="uc-title">We're Building<br />Something <span>Great</span></h1>

          <p className="uc-desc">Our website is currently under construction.<br />We're working hard to bring you an amazing experience.</p>

          <div className="uc-progress-wrap">
            <div className="uc-progress-label">
              <span>Overall Progress</span>
              <span>72%</span>
            </div>
            <div className="uc-progress-bar">
              <div className="uc-progress-fill"></div>
            </div>
          </div>

          {/* <div className="uc-notify-row">
            <input className="uc-input" type="email" placeholder="Enter your email address" />
            <button className="uc-btn">Notify Me</button>
          </div> */}

          {/* <div className="uc-socials">
            <a href="#" className="uc-social-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="uc-social-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="uc-social-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="#" className="uc-social-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div> */}

          <p className="uc-footer">© 2025 Vaqtrix. All rights reserved.</p>

        </div>
      </div>
    </>
  );
}