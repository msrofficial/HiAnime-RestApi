export const htmlAsString = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HiAnime REST-API | MSR SAKIBUR</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

    <style>
        :root {
            --bg-body: #0f172a;
            --bg-card: #1e293b;
            --bg-card-hover: #334155;
            --border-color: #334155;
            --primary: #3b82f6;
            --primary-hover: #2563eb;
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --success: #10b981;
            
            --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
            --font-mono: 'JetBrains Mono', monospace;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            background-color: var(--bg-body);
            color: var(--text-main);
            font-family: var(--font-sans);
            line-height: 1.6;
            overflow-x: hidden;
        }

        a { text-decoration: none; color: inherit; transition: 0.2s; }
        ul { list-style: none; }

        
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(15, 23, 42, 0.85);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border-color);
            z-index: 1000;
            padding: 1rem 0;
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-weight: 700;
            font-size: 1.25rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .logo span { color: var(--primary); }

        .menu-btn {
            background: transparent;
            border: none;
            cursor: pointer;
            color: var(--text-main);
            display: flex;
            align-items: center;
            padding: 0.5rem;
            border-radius: 6px;
            transition: background 0.2s;
        }

        .menu-btn:hover { background: var(--bg-card); }


        .drawer-overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.5);
            opacity: 0;
            visibility: hidden;
            transition: 0.3s;
            z-index: 1001;
            backdrop-filter: blur(2px);
        }

        .drawer {
            position: fixed;
            top: 0; right: -300px;
            width: 300px;
            height: 100%;
            background: var(--bg-card);
            border-left: 1px solid var(--border-color);
            padding: 2rem;
            transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1002;
            display: flex;
            flex-direction: column;
        }

        .drawer.active { right: 0; }
        .drawer-overlay.active { opacity: 1; visibility: visible; }

        .drawer-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 1rem;
        }

        .drawer-title {
            font-size: 0.9rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-muted);
        }

        .social-link {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 0.75rem 0;
            color: var(--text-muted);
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .social-link:hover { color: var(--primary); padding-left: 5px; }
        .social-link svg { width: 20px; height: 20px; }


        .hero {
            padding: 8rem 1.5rem 4rem;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
        }

        .status-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(16, 185, 129, 0.1);
            color: var(--success);
            padding: 0.35rem 0.75rem;
            border-radius: 99px;
            font-size: 0.8rem;
            font-weight: 500;
            margin-bottom: 1.5rem;
            border: 1px solid rgba(16, 185, 129, 0.2);
        }

        h1 {
            font-size: 3.5rem;
            font-weight: 800;
            letter-spacing: -0.025em;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            background: linear-gradient(to right, #fff, #94a3b8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero p {
            font-size: 1.125rem;
            color: var(--text-muted);
            margin-bottom: 2.5rem;
        }

        .cta-group {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-weight: 600;
            font-size: 0.95rem;
            transition: all 0.2s;
        }

        .btn-primary {
            background: var(--primary);
            color: white;
        }
        .btn-primary:hover { background: var(--primary-hover); transform: translateY(-1px); }

        .btn-secondary {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            color: var(--text-main);
        }
        .btn-secondary:hover { border-color: var(--text-muted); background: var(--bg-card-hover); }


        main {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem 6rem;
        }

        .grid-3 {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-bottom: 4rem;
        }

        .section-header {
            margin: 4rem 0 2rem;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .section-header h2 { font-size: 1.5rem; font-weight: 700; }
        .section-header svg { color: var(--primary); }


        .card {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 1.5rem;
            transition: 0.2s;
        }

        .card:hover {
            border-color: var(--primary);
            transform: translateY(-2px);
            box-shadow: 0 10px 30px -10px rgba(0,0,0,0.3);
        }

        .card-icon {
            width: 36px;
            height: 36px;
            background: rgba(59, 130, 246, 0.1);
            color: var(--primary);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
        }

        .card h3 {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
        }

        .card p {
            font-size: 0.9rem;
            color: var(--text-muted);
            margin-bottom: 1rem;
        }


        .method {
            font-family: var(--font-mono);
            font-size: 0.75rem;
            font-weight: 700;
            padding: 2px 6px;
            border-radius: 4px;
            background: rgba(59, 130, 246, 0.2);
            color: #60a5fa;
            margin-right: 8px;
        }

        .url {
            font-family: var(--font-mono);
            font-size: 0.85rem;
            color: var(--text-muted);
        }

        .chip {
            display: inline-block;
            font-size: 0.75rem;
            padding: 2px 8px;
            background: #0f172a;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            color: var(--text-muted);
            margin: 2px;
            font-family: var(--font-mono);
        }


        pre {
            background: #0d1117;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 1.25rem;
            overflow-x: auto;
            position: relative;
        }
        
        code {
            font-family: var(--font-mono);
            font-size: 0.85rem;
            color: #e2e8f0;
        }
        
        .code-comment { color: #64748b; }
        .code-cmd { color: #facc15; }
        
        .copy-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(255,255,255,0.1);
            border: none;
            color: #fff;
            padding: 4px;
            border-radius: 4px;
            cursor: pointer;
            opacity: 0.7;
        }
        .copy-btn:hover { opacity: 1; background: rgba(255,255,255,0.2); }


        footer {
            border-top: 1px solid var(--border-color);
            padding: 3rem 0;
            text-align: center;
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        footer strong { color: var(--text-main); }
        footer a:hover { color: var(--primary); text-decoration: underline; }

        @media (max-width: 768px) {
            h1 { font-size: 2.5rem; }
            .grid-3 { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>

    <nav>
        <div class="nav-container">
            <a href="#" class="logo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                HiAnime<span>REST-API</span>
            </a>
            <button class="menu-btn" onclick="toggleDrawer()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
        </div>
    </nav>

    <div class="drawer-overlay" id="overlay" onclick="toggleDrawer()"></div>
    <aside class="drawer" id="drawer">
        <div class="drawer-header">
            <span class="drawer-title">Developer Menu</span>
            <button class="menu-btn" onclick="toggleDrawer()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        </div>
        
        <span class="drawer-title" style="margin-bottom:10px">Socials</span>
        
        <a href="https://github.com/msrofficial" target="_blank" class="social-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            GitHub
        </a>
        <a href="https://x.com/msrsakibur" class="social-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            Twitter / X
        </a>
<a href="https://instagram.com/msr.sakibur" target="_blank" class="social-link">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
    Instagram
</a>

<a href="https://facebook.com/sakibur.msr" target="_blank" class="social-link">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
    Facebook
</a>


        <div style="margin-top: auto;">
             <span class="drawer-title">Resources</span>
             <a href="/doc" class="social-link" style="border:none">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                 Scalar Docs
             </a>
             <a href="/swagger" class="social-link" style="border:none">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                Swagger UI
             </a>
        </div>
    </aside>

    <header class="hero">
        <div class="status-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Operational
        </div>
        <h1>
            Anime Data,<br>Simplified for Developers
        </h1>
        <p>
            An unofficial, high-performance REST API for scraping hianime data.
            Open source, self-hosted, and ready for your next project.
        </p>
        <div class="cta-group">
            <a href="/doc" class="btn btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                Read Documentation
            </a>
            <a href="https://github.com/msrofficial/HiAnime-RestApi" class="btn btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                Star on GitHub
            </a>
        </div>
    </header>

    <main>
        <div class="grid-3">
            <div class="card">
                <div class="card-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </div>
                <h3>Base URL</h3>
                <p>All endpoints are prefixed with the current API version.</p>
                <code style="background: rgba(255,255,255,0.05); padding: 4px 8px; border-radius: 4px; color: var(--success);">/api/v1</code>
            </div>
            
            <div class="card">
                <div class="card-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                </div>
                <h3>Response Format</h3>
                <p>Standardized JSON envelope for all requests.</p>
                <code style="color: #94a3b8;">{ "success": true, "data": ... }</code>
            </div>

            <div class="card">
                <div class="card-icon" style="color: #ef4444; background: rgba(239, 68, 68, 0.1);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                </div>
                <h3>Disclaimer</h3>
                <p>Content belongs to original owners. This tool is for educational purposes only.</p>
            </div>
        </div>

        <div class="section-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            <h2>Core Endpoints</h2>
        </div>

        <div class="grid-3">
            <div class="card">
                <h3>Home</h3>
                <p>Get trending, spotlight, and top airing data.</p>
                <div>
                    <span class="method">GET</span>
                    <span class="url">/home</span>
                </div>
            </div>

            <div class="card">
                <h3>Anime Details</h3>
                <p>Metadata, episodes, and recommendations.</p>
                <div style="margin-bottom: 10px;">
                    <span class="method">GET</span>
                    <span class="url">/anime/{animeId}</span>
                </div>
                <span class="chip">one-piece-100</span>
            </div>

            <div class="card">
                <h3>Search</h3>
                <p>Search anime with pagination support.</p>
                <div>
                    <span class="method">GET</span>
                    <span class="url">/search?keyword={str}</span>
                </div>
            </div>

            <div class="card">
                <h3>Episodes</h3>
                <p>Fetch all episodes for a specific anime.</p>
                <div>
                    <span class="method">GET</span>
                    <span class="url">/episodes/{animeId}</span>
                </div>
            </div>

            <div class="card">
                <h3>Stream</h3>
                <p>HLS streams, subtitles, and intro timestamps.</p>
                <div>
                    <span class="method">GET</span>
                    <span class="url">/stream?id={ep_id}</span>
                </div>
            </div>

            <div class="card">
                <h3>Category</h3>
                <p>Filter by Genre, AZ-List, or Type.</p>
                <div style="margin-bottom: 10px;">
                    <span class="method">GET</span>
                    <span class="url">/{category}</span>
                </div>
                <span class="chip">top-airing</span>
                <span class="chip">movies</span>
            </div>
        </div>

        <div class="section-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            <h2>Quick Start</h2>
        </div>

        <div class="card" style="background: #0d1117; border: 1px solid var(--border-color);">
            <pre>
<span class="code-comment"># Clone the official repository</span>
<span class="code-cmd">git</span> clone https://github.com/msrofficial/HiAnime-RestApi.git

<span class="code-comment"># Enter directory & install dependencies</span>
cd HiAnime-RestApi
bun install

<span class="code-comment"># Start the server</span>
bun run dev
<button class="copy-btn" onclick="copyToClipboard(this)">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
</button>
</pre>
        </div>

    </main>

    <footer>
        <p>
            Developed by <strong>MSR SAKIBUR</strong> · 
            <a href="https://github.com/msrofficial/HiAnime-RestApi">GitHub Repository</a>
        </p>
        <p style="margin-top: 0.5rem; opacity: 0.5; font-size: 0.8rem;">
            Unofficial API · Built for the community
        </p>
    </footer>

    <script>
        function toggleDrawer() {
            const drawer = document.getElementById('drawer');
            const overlay = document.getElementById('overlay');
            drawer.classList.toggle('active');
            overlay.classList.toggle('active');
        }

        function copyToClipboard(button) {
            const code = \`git clone https://github.com/msrofficial/HiAnime-RestApi.git
cd HiAnime-RestApi
bun install
bun run dev\`;
            
            navigator.clipboard.writeText(code).then(() => {
                const originalContent = button.innerHTML;
                button.innerHTML = \`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>\`;
                setTimeout(() => {
                    button.innerHTML = originalContent;
                }, 2000);
            });
        }
    </script>
</body>
</html>
`;
