<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Pavithran S — Portfolio</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{
  --bg:#0a0a14;
  --surface:#11111f;
  --card:#16162a;
  --border:#2a2a4a;
  --accent:#7c6fcd;
  --accent2:#a78bfa;
  --accent3:#38bdf8;
  --gold:#fbbf24;
  --text:#e2e8f0;
  --muted:#64748b;
  --green:#34d399;
}
html{scroll-behavior:smooth}
body{
  font-family:'Inter',sans-serif;
  background:var(--bg);
  color:var(--text);
  min-height:100vh;
  overflow-x:hidden;
}

/* ─── CANVAS BACKGROUND ─── */
#bg-canvas{
  position:fixed;
  top:0;left:0;
  width:100%;height:100%;
  z-index:0;
  pointer-events:none;
}

/* ─── CURSOR TRAIL ─── */
.cursor-dot{
  position:fixed;
  width:6px;height:6px;
  background:var(--accent2);
  border-radius:50%;
  pointer-events:none;
  z-index:9999;
  transition:transform .1s;
  mix-blend-mode:screen;
}
.cursor-ring{
  position:fixed;
  width:32px;height:32px;
  border:1.5px solid var(--accent);
  border-radius:50%;
  pointer-events:none;
  z-index:9998;
  transition:transform .12s ease,opacity .3s;
  mix-blend-mode:screen;
}

/* ─── LAYOUT ─── */
#app{position:relative;z-index:1}
.container{max-width:960px;margin:0 auto;padding:0 2rem}

/* ─── NAV ─── */
nav{
  position:fixed;top:0;left:0;right:0;
  z-index:100;
  background:rgba(10,10,20,.8);
  backdrop-filter:blur(12px);
  border-bottom:1px solid var(--border);
  padding:.9rem 2rem;
  display:flex;justify-content:space-between;align-items:center;
}
.nav-logo{
  font-family:'Fira Code',monospace;
  font-size:1.1rem;
  font-weight:700;
  background:linear-gradient(135deg,var(--accent2),var(--accent3));
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  background-clip:text;
}
.nav-links{display:flex;gap:2rem;list-style:none}
.nav-links a{
  color:var(--muted);
  text-decoration:none;
  font-size:.85rem;
  font-weight:500;
  letter-spacing:.04em;
  transition:color .2s;
  position:relative;
}
.nav-links a::after{
  content:'';position:absolute;bottom:-4px;left:0;right:0;
  height:1px;background:var(--accent2);
  transform:scaleX(0);transform-origin:left;
  transition:transform .25s;
}
.nav-links a:hover{color:var(--accent2)}
.nav-links a:hover::after{transform:scaleX(1)}

/* ─── HERO ─── */
.hero{
  min-height:100vh;
  display:flex;align-items:center;
  padding:6rem 2rem 4rem;
  position:relative;
}
.hero-inner{max-width:960px;margin:0 auto;width:100%}
.hero-badge{
  display:inline-flex;align-items:center;gap:.5rem;
  font-family:'Fira Code',monospace;
  font-size:.8rem;
  color:var(--green);
  border:1px solid rgba(52,211,153,.25);
  background:rgba(52,211,153,.07);
  padding:.35rem .75rem;
  border-radius:100px;
  margin-bottom:1.5rem;
  animation:fadeInDown .7s ease both;
}
.hero-badge::before{
  content:'';width:7px;height:7px;
  background:var(--green);border-radius:50%;
  animation:pulse-green 2s infinite;
}
@keyframes pulse-green{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(52,211,153,.5)}50%{box-shadow:0 0 0 6px rgba(52,211,153,0)}}
.hero-name{
  font-size:clamp(2.8rem,6vw,5rem);
  font-weight:700;
  line-height:1.05;
  animation:fadeInDown .7s .15s ease both;
}
.hero-name span{
  background:linear-gradient(135deg,var(--accent2) 0%,var(--accent3) 60%,#f472b6 100%);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  background-clip:text;
}
.hero-title{
  font-family:'Fira Code',monospace;
  color:var(--muted);
  font-size:1.1rem;
  margin-top:.75rem;
  animation:fadeInDown .7s .25s ease both;
}
.hero-title .hl{color:var(--accent2)}
.hero-desc{
  color:var(--muted);
  font-size:1rem;
  line-height:1.7;
  max-width:520px;
  margin-top:1.2rem;
  animation:fadeInDown .7s .35s ease both;
}
.hero-cta{
  display:flex;gap:1rem;flex-wrap:wrap;
  margin-top:2rem;
  animation:fadeInDown .7s .45s ease both;
}
.btn{
  display:inline-flex;align-items:center;gap:.5rem;
  padding:.65rem 1.4rem;
  border-radius:8px;
  font-size:.9rem;
  font-weight:500;
  text-decoration:none;
  transition:all .2s;
  cursor:pointer;
}
.btn-primary{
  background:linear-gradient(135deg,var(--accent),var(--accent2));
  color:#fff;
  border:none;
}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(124,111,205,.4)}
.btn-ghost{
  background:transparent;
  color:var(--text);
  border:1px solid var(--border);
}
.btn-ghost:hover{border-color:var(--accent2);color:var(--accent2);transform:translateY(-2px)}

/* ─── FLOATING STATS ─── */
.hero-stats{
  display:flex;gap:2.5rem;margin-top:3rem;
  animation:fadeInDown .7s .55s ease both;
}
.stat-item{text-align:center}
.stat-num{
  font-size:1.8rem;font-weight:700;
  background:linear-gradient(135deg,var(--accent2),var(--accent3));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.stat-label{font-size:.75rem;color:var(--muted);margin-top:.2rem}

/* ─── SECTION COMMONS ─── */
section{padding:5rem 0}
.section-label{
  font-family:'Fira Code',monospace;
  font-size:.78rem;
  color:var(--accent2);
  letter-spacing:.12em;
  text-transform:uppercase;
  margin-bottom:.5rem;
}
.section-title{
  font-size:2rem;font-weight:700;
  margin-bottom:1rem;
}
.section-line{
  width:48px;height:3px;
  background:linear-gradient(90deg,var(--accent),var(--accent3));
  border-radius:2px;
  margin-bottom:2.5rem;
}

/* ─── REVEAL ANIMATION ─── */
.reveal{
  opacity:0;
  transform:translateY(32px);
  transition:opacity .65s ease,transform .65s ease;
}
.reveal.visible{opacity:1;transform:none}

/* ─── TROPHY CARD ─── */
.trophy-card{
  background:linear-gradient(135deg,rgba(251,191,36,.08),rgba(124,111,205,.08));
  border:1px solid rgba(251,191,36,.25);
  border-radius:16px;
  padding:2rem;
  text-align:center;
  position:relative;
  overflow:hidden;
}
.trophy-card::before{
  content:'';position:absolute;inset:0;
  background:radial-gradient(circle at 50% 0%,rgba(251,191,36,.1),transparent 60%);
}
.trophy-emoji{font-size:3rem;display:block;margin-bottom:.5rem}
.trophy-title{font-size:1.2rem;font-weight:700;color:var(--gold);margin-bottom:.25rem}
.trophy-sub{color:var(--muted);font-size:.9rem;line-height:1.6}

/* ─── PROJECT CARD ─── */
.project-card{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:16px;
  padding:2rem;
  position:relative;
  overflow:hidden;
  transition:border-color .25s,transform .25s,box-shadow .25s;
}
.project-card::before{
  content:'';position:absolute;top:0;left:0;right:0;height:3px;
  background:linear-gradient(90deg,var(--accent),var(--accent3));
  opacity:0;transition:opacity .25s;
}
.project-card:hover{
  border-color:var(--accent);
  transform:translateY(-4px);
  box-shadow:0 20px 48px rgba(124,111,205,.15);
}
.project-card:hover::before{opacity:1}
.proj-title{font-size:1.3rem;font-weight:700;margin-bottom:.4rem}
.proj-badge{
  display:inline-block;
  font-size:.7rem;font-weight:600;
  background:rgba(124,111,205,.15);
  color:var(--accent2);
  border:1px solid rgba(124,111,205,.3);
  padding:.2rem .6rem;border-radius:100px;
  margin-bottom:1rem;
}
.proj-desc{color:var(--muted);font-size:.9rem;line-height:1.7;margin-bottom:1.2rem}
.feature-list{list-style:none;margin-bottom:1.5rem}
.feature-list li{
  font-size:.85rem;color:var(--muted);
  padding:.25rem 0;
  display:flex;align-items:flex-start;gap:.5rem;
}
.feature-list li::before{content:'→';color:var(--accent2);flex-shrink:0;margin-top:.05rem}
.tech-table{width:100%;border-collapse:collapse;font-size:.82rem;margin-bottom:1.5rem}
.tech-table th{
  color:var(--muted);font-weight:500;
  border-bottom:1px solid var(--border);
  padding:.4rem .6rem;text-align:left;
}
.tech-table td{
  padding:.4rem .6rem;
  border-bottom:1px solid rgba(42,42,74,.5);
  color:var(--text);
}
.tech-table td:first-child{color:var(--muted)}

/* ─── TECH GRID ─── */
.tech-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(140px,1fr));
  gap:1rem;
}
.tech-item{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:12px;
  padding:1rem;
  text-align:center;
  font-size:.82rem;
  color:var(--muted);
  transition:all .2s;
  cursor:default;
}
.tech-item:hover{
  border-color:var(--accent2);
  color:var(--accent2);
  background:rgba(124,111,205,.07);
  transform:scale(1.03);
}
.tech-cat{margin-bottom:1.5rem}
.tech-cat-label{
  font-size:.75rem;font-weight:600;
  color:var(--accent3);
  letter-spacing:.1em;
  text-transform:uppercase;
  margin-bottom:.75rem;
}

/* ─── EXPERIENCE ─── */
.timeline{position:relative;padding-left:1.5rem}
.timeline::before{
  content:'';position:absolute;left:0;top:0;bottom:0;
  width:2px;background:linear-gradient(to bottom,var(--accent),transparent);
}
.timeline-item{
  position:relative;
  margin-bottom:2.5rem;
}
.timeline-item::before{
  content:'';position:absolute;left:-1.5rem;top:.35rem;
  width:10px;height:10px;border-radius:50%;
  background:var(--accent2);
  border:2px solid var(--bg);
  box-shadow:0 0 0 3px rgba(167,139,250,.2);
}
.timeline-role{font-size:1.05rem;font-weight:600;margin-bottom:.2rem}
.timeline-company{color:var(--accent2);font-size:.9rem;margin-bottom:.15rem}
.timeline-date{
  font-family:'Fira Code',monospace;
  font-size:.75rem;color:var(--muted);
  margin-bottom:.6rem;
}
.timeline-desc{color:var(--muted);font-size:.88rem;line-height:1.65}

/* ─── SOCIAL GRID ─── */
.social-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(150px,1fr));
  gap:1rem;
}
.social-card{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:12px;
  padding:1rem 1.2rem;
  text-decoration:none;
  color:var(--text);
  font-size:.85rem;
  font-weight:500;
  transition:all .2s;
  display:flex;align-items:center;gap:.6rem;
}
.social-card:hover{
  border-color:var(--accent2);
  transform:translateY(-3px);
  box-shadow:0 8px 24px rgba(124,111,205,.15);
  color:var(--accent2);
}
.social-card .s-icon{font-size:1.1rem}

/* ─── STATS CARDS ─── */
.stats-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin-bottom:2rem}
.stat-card{
  background:var(--card);border:1px solid var(--border);
  border-radius:12px;padding:1.2rem;
  display:flex;align-items:center;gap:.9rem;
}
.stat-icon{font-size:1.6rem}
.stat-info .val{font-size:1.1rem;font-weight:700;color:var(--accent2)}
.stat-info .lbl{font-size:.75rem;color:var(--muted)}

/* ─── EMAIL ─── */
.email-badge{
  display:inline-flex;align-items:center;gap:.5rem;
  background:var(--card);
  border:1px solid var(--border);
  border-radius:100px;
  padding:.5rem 1.2rem;
  font-family:'Fira Code',monospace;
  font-size:.85rem;
  color:var(--accent2);
  text-decoration:none;
  transition:all .2s;
}
.email-badge:hover{border-color:var(--accent2);box-shadow:0 4px 16px rgba(124,111,205,.2)}

/* ─── FOOTER ─── */
footer{
  border-top:1px solid var(--border);
  padding:2rem;
  text-align:center;
  font-family:'Fira Code',monospace;
  font-size:.78rem;
  color:var(--muted);
}

/* ─── TYPING CURSOR ─── */
.typing-wrap{font-family:'Fira Code',monospace;font-size:1rem;color:var(--accent2)}
.typed-cursor{
  display:inline-block;
  width:2px;height:1em;
  background:var(--accent2);
  margin-left:2px;
  vertical-align:middle;
  animation:blink 1s infinite;
}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}

/* ─── GLITCH HOVER ─── */
.glitch{position:relative;display:inline-block}
.glitch:hover::before,.glitch:hover::after{
  content:attr(data-text);
  position:absolute;left:0;top:0;
  background:var(--bg);
  overflow:hidden;
  clip-path:polygon(0 0,100% 0,100% 35%,0 35%);
}
.glitch:hover::before{color:var(--accent3);animation:glitch-top .3s infinite linear}
.glitch:hover::after{
  color:#f472b6;
  animation:glitch-bot .3s .15s infinite linear;
  clip-path:polygon(0 65%,100% 65%,100% 100%,0 100%);
}
@keyframes glitch-top{0%,100%{transform:translateX(0)}25%{transform:translateX(-3px)}75%{transform:translateX(3px)}}
@keyframes glitch-bot{0%,100%{transform:translateX(0)}33%{transform:translateX(2px)}66%{transform:translateX(-2px)}}

/* ─── KEYFRAMES ─── */
@keyframes fadeInDown{from{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:none}}

/* ─── FLOATING SHAPES ─── */
.shape{
  position:absolute;border-radius:50%;
  pointer-events:none;
  opacity:.05;
  animation:floatShape linear infinite;
}
@keyframes floatShape{
  0%{transform:translateY(0) rotate(0)}
  50%{transform:translateY(-30px) rotate(180deg)}
  100%{transform:translateY(0) rotate(360deg)}
}

/* ─── HIGHLIGHT PILL ─── */
.hl-pill{
  display:inline-flex;align-items:center;gap:.3rem;
  font-size:.78rem;font-weight:600;
  background:rgba(56,189,248,.1);
  color:var(--accent3);
  border:1px solid rgba(56,189,248,.25);
  padding:.2rem .6rem;border-radius:100px;
}

/* ─── CODE RAIN ACCENT ─── */
#matrix-canvas{
  position:fixed;top:0;left:0;
  width:100%;height:100%;
  z-index:0;opacity:.04;
  pointer-events:none;
}

/* ─── PROGRESS BARS ─── */
.skill-bar-wrap{margin-bottom:.8rem}
.skill-bar-label{
  display:flex;justify-content:space-between;
  font-size:.8rem;margin-bottom:.3rem;
  color:var(--muted);
}
.skill-bar-label span:first-child{color:var(--text)}
.skill-bar-bg{
  height:5px;background:var(--surface);
  border-radius:3px;overflow:hidden;
}
.skill-bar-fill{
  height:100%;border-radius:3px;
  background:linear-gradient(90deg,var(--accent),var(--accent3));
  width:0;
  transition:width 1.2s cubic-bezier(.22,1,.36,1);
}

@media(max-width:640px){
  .hero-stats{gap:1.5rem}
  .social-grid{grid-template-columns:1fr 1fr}
  .nav-links{display:none}
}
</style>
</head>
<body>

<!-- CANVAS LAYERS -->
<canvas id="bg-canvas"></canvas>
<canvas id="matrix-canvas"></canvas>

<!-- CURSOR -->
<div class="cursor-dot" id="cursor-dot"></div>
<div class="cursor-ring" id="cursor-ring"></div>

<div id="app">

<!-- ─── NAV ─── -->
<nav>
  <div class="nav-logo">&lt;Pavithran S /&gt;</div>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#tech">Stack</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#connect">Connect</a></li>
  </ul>
</nav>

<!-- ─── HERO ─── -->
<section class="hero" id="about">
  <!-- floating shapes -->
  <div class="shape" style="width:400px;height:400px;background:var(--accent);top:-100px;right:-100px;animation-duration:18s"></div>
  <div class="shape" style="width:250px;height:250px;background:var(--accent3);bottom:10%;left:-80px;animation-duration:14s;animation-delay:-6s"></div>

  <div class="hero-inner">
    <div class="hero-badge">● Available for opportunities</div>
    <h1 class="hero-name glitch" data-text="Hi 👋 I'm Pavithran S">Hi 👋 I'm <span>Pavithran S</span></h1>
    <div class="hero-title">
      <span id="typed-text"></span><span class="typed-cursor"></span>
    </div>
    <p class="hero-desc">
      Software Engineer passionate about AI/ML, Full Stack Development, and Flutter. 
      Building intelligent systems and beautiful interfaces — from legal AI chatbots to mobile apps. 
      Hackathon Champion 🏅 | Based in Coimbatore, India.
    </p>
    <div class="hero-cta">
      <a href="https://pavis.vercel.app/" class="btn btn-primary" target="_blank">🌐 Portfolio</a>
      <a href="https://linkedin.com/in/pavithran-s-ab85a9235" class="btn btn-ghost" target="_blank">💼 LinkedIn</a>
      <a href="mailto:pavithran2004s@gmail.com" class="email-badge">📫 pavithran2004s@gmail.com</a>
    </div>
    <div class="hero-stats">
      <div class="stat-item">
        <div class="stat-num" id="cnt-projects">0</div>
        <div class="stat-label">Projects</div>
      </div>
      <div class="stat-item">
        <div class="stat-num" id="cnt-certs">0</div>
        <div class="stat-label">Certifications</div>
      </div>
      <div class="stat-item">
        <div class="stat-num" id="cnt-stacks">0+</div>
        <div class="stat-label">Tech Stacks</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">🏅</div>
        <div class="stat-label">Hackathon Win</div>
      </div>
    </div>
  </div>
</section>

<!-- ─── ACHIEVEMENT ─── -->
<section style="padding:2rem 0">
  <div class="container">
    <div class="trophy-card reveal">
      <span class="trophy-emoji">🏆</span>
      <div class="trophy-title">KALAM 2025 Hackathon Champions — 1st Place 🥇</div>
      <div class="trophy-sub">Sri Shakthi Institute of Engineering & Technology · Coimbatore · 21–22 March 2025</div>
    </div>
  </div>
</section>

<!-- ─── TECH STACK ─── -->
<section id="tech">
  <div class="container">
    <div class="section-label reveal">Tech Stack</div>
    <h2 class="section-title reveal">💻 What I Build With</h2>
    <div class="section-line reveal"></div>

    <div class="tech-cat reveal">
      <div class="tech-cat-label">🧑‍💻 Languages</div>
      <div class="tech-grid">
        <div class="tech-item">C</div><div class="tech-item">C++</div>
        <div class="tech-item">Java</div><div class="tech-item">Python</div>
        <div class="tech-item">R</div><div class="tech-item">C#</div><div class="tech-item">Kotlin</div>
      </div>
    </div>

    <div class="tech-cat reveal">
      <div class="tech-cat-label">🌐 Web Development</div>
      <div class="tech-grid">
        <div class="tech-item">HTML</div><div class="tech-item">CSS</div>
        <div class="tech-item">JavaScript</div><div class="tech-item">TypeScript</div>
        <div class="tech-item">Next.js</div><div class="tech-item">Angular</div>
        <div class="tech-item">Django</div><div class="tech-item">Flask</div>
        <div class="tech-item">FastAPI</div><div class="tech-item">Node.js</div>
      </div>
    </div>

    <div class="tech-cat reveal">
      <div class="tech-cat-label">📱 Mobile</div>
      <div class="tech-grid">
        <div class="tech-item">Flutter</div><div class="tech-item">Dart</div>
      </div>
    </div>

    <div class="tech-cat reveal">
      <div class="tech-cat-label">🗄️ Databases & Cloud</div>
      <div class="tech-grid">
        <div class="tech-item">MongoDB</div><div class="tech-item">MySQL</div>
        <div class="tech-item">PostgreSQL</div><div class="tech-item">Supabase</div>
        <div class="tech-item">AWS</div><div class="tech-item">Firebase</div>
        <div class="tech-item">Vercel</div><div class="tech-item">Netlify</div>
      </div>
    </div>

    <div class="tech-cat reveal">
      <div class="tech-cat-label">🤖 AI / ML & Data Science</div>
      <div class="tech-grid">
        <div class="tech-item">TensorFlow</div><div class="tech-item">PyTorch</div>
        <div class="tech-item">Scikit-learn</div><div class="tech-item">Pandas</div>
        <div class="tech-item">NumPy</div><div class="tech-item">Keras</div>
      </div>
    </div>

    <div class="tech-cat reveal">
      <div class="tech-cat-label">🔧 Tools & DevOps</div>
      <div class="tech-grid">
        <div class="tech-item">Git</div><div class="tech-item">GitHub Actions</div>
        <div class="tech-item">Selenium</div><div class="tech-item">Figma</div>
        <div class="tech-item">Apache Spark</div><div class="tech-item">Apache Kafka</div>
      </div>
    </div>

    <!-- Skill bars -->
    <div class="reveal" style="margin-top:2.5rem;max-width:520px">
      <div class="section-label" style="margin-bottom:1rem">Proficiency</div>
      <div class="skill-bar-wrap"><div class="skill-bar-label"><span>Python / Django</span><span>90%</span></div><div class="skill-bar-bg"><div class="skill-bar-fill" data-w="90"></div></div></div>
      <div class="skill-bar-wrap"><div class="skill-bar-label"><span>Next.js / React</span><span>85%</span></div><div class="skill-bar-bg"><div class="skill-bar-fill" data-w="85"></div></div></div>
      <div class="skill-bar-wrap"><div class="skill-bar-label"><span>Flutter / Dart</span><span>80%</span></div><div class="skill-bar-bg"><div class="skill-bar-fill" data-w="80"></div></div></div>
      <div class="skill-bar-wrap"><div class="skill-bar-label"><span>AI / ML / LangChain</span><span>82%</span></div><div class="skill-bar-bg"><div class="skill-bar-fill" data-w="82"></div></div></div>
      <div class="skill-bar-wrap"><div class="skill-bar-label"><span>Java / C++</span><span>75%</span></div><div class="skill-bar-bg"><div class="skill-bar-fill" data-w="75"></div></div></div>
    </div>
  </div>
</section>

<!-- ─── PROJECTS ─── -->
<section id="projects">
  <div class="container">
    <div class="section-label reveal">Projects</div>
    <h2 class="section-title reveal">🧠 What I've Built</h2>
    <div class="section-line reveal"></div>

    <div class="project-card reveal">
      <span class="proj-badge">Postgraduate Final Year Major Project · N.G.P Arts and Science College · 2026</span>
      <div class="proj-title">🤖 Sattam AI — Tamil Nadu Law Chatbot</div>
      <p class="proj-desc">
        A full-stack, AI-powered legal assistant specialized for Tamil Nadu laws. Ingests Tamil Nadu legal PDFs (acts, rules, regulations), processes them into a vector database using RAG (Retrieval-Augmented Generation), and provides intelligent chat-based querying across web and mobile platforms.
      </p>
      <div style="margin-bottom:1rem">
        <span class="hl-pill">✨ Key Features</span>
      </div>
      <ul class="feature-list">
        <li><strong>RAG Pipeline</strong> — Sentence-transformer embeddings from legal PDFs stored in ChromaDB</li>
        <li><strong>Multi-LLM Support</strong> — Google Gemini (free tier) or OpenAI-compatible via Cloudflare AI Gateway</li>
        <li><strong>Document Management</strong> — Upload & process Tamil Nadu law PDFs with web scraping support</li>
        <li><strong>Real-time Chat</strong> — Context-aware responses on both web and mobile</li>
        <li><strong>Auth</strong> — Clerk integration for user management</li>
        <li><strong>Cross-Platform</strong> — Flutter mobile app + Next.js web app</li>
        <li><strong>Data</strong> — Pre-loaded with 50+ Tamil Nadu acts & rules</li>
      </ul>
      <table class="tech-table">
        <tr><th>Layer</th><th>Technologies</th></tr>
        <tr><td>Backend</td><td>FastAPI · LangChain · ChromaDB · Python 3.10+</td></tr>
        <tr><td>Web Frontend</td><td>Next.js 16+ · React 19 · TailwindCSS · Clerk</td></tr>
        <tr><td>Mobile App</td><td>Flutter 3.8+ · Dart · Clerk Flutter</td></tr>
        <tr><td>AI / ML</td><td>Google Gemini · OpenAI · sentence-transformers</td></tr>
      </table>
      <div style="display:flex;gap:.75rem;flex-wrap:wrap">
        <a href="https://github.com/Pavithran26/Major-Project-SATTAM-AI-2026" target="_blank" class="btn btn-ghost" style="font-size:.8rem">⭐ GitHub Repo</a>
        <a href="https://pavithran26.github.io/Major-Project-SATTAM-AI-2026" target="_blank" class="btn btn-primary" style="font-size:.8rem">🚀 Live Demo</a>
      </div>
    </div>
  </div>
</section>

<!-- ─── EXPERIENCE ─── -->
<section id="experience">
  <div class="container">
    <div class="section-label reveal">Experience</div>
    <h2 class="section-title reveal">🚀 Experience & Internships</h2>
    <div class="section-line reveal"></div>

    <div class="timeline reveal">
      <div class="timeline-item">
        <div class="timeline-role">Software Development Intern</div>
        <div class="timeline-company">@ Cognifyz Technologies</div>
        <div class="timeline-date">Apr 2025 – May 2025</div>
        <div class="timeline-desc">Developed and optimized software solutions using Python and Java. Recognized for dedication, teamwork, and problem-solving skills.</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-role">Java Internship Training</div>
        <div class="timeline-company">@ Internship Studio</div>
        <div class="timeline-date">Completed: 30th November, 2024 · Cert No.: ISJVAT1092020 · ISO 9001:2015</div>
        <div class="timeline-desc">Successfully completed intensive training in Java programming under mentor Supriya Dongre.</div>
      </div>
    </div>
  </div>
</section>

<!-- ─── CONNECT ─── -->
<section id="connect">
  <div class="container">
    <div class="section-label reveal">Connect</div>
    <h2 class="section-title reveal">🌐 Connect With Me</h2>
    <div class="section-line reveal"></div>

    <div class="social-grid reveal">
      <a href="https://linkedin.com/in/pavithran-s-ab85a9235" target="_blank" class="social-card"><span class="s-icon">💼</span>LinkedIn</a>
      <a href="https://www.leetcode.com/u/dawn26/" target="_blank" class="social-card"><span class="s-icon">⚡</span>LeetCode</a>
      <a href="https://www.hackerrank.com/profile/pavithran2004cs" target="_blank" class="social-card"><span class="s-icon">🟢</span>HackerRank</a>
      <a href="https://youtube.com/@be_a_techiegamer" target="_blank" class="social-card"><span class="s-icon">▶️</span>YouTube</a>
      <a href="https://www.codechef.com/users/pavithran26" target="_blank" class="social-card"><span class="s-icon">👨‍🍳</span>CodeChef</a>
      <a href="https://auth.geeksforgeeks.org/user/pavithraw7mx" target="_blank" class="social-card"><span class="s-icon">🌱</span>GeeksforGeeks</a>
      <a href="https://pavis.vercel.app/" target="_blank" class="social-card"><span class="s-icon">🌍</span>Portfolio</a>
      <a href="https://github.com/Pavithran26" target="_blank" class="social-card"><span class="s-icon">🐙</span>GitHub</a>
    </div>

    <div style="margin-top:2rem;text-align:center" class="reveal">
      <a href="mailto:pavithran2004s@gmail.com" class="email-badge" style="font-size:1rem">📫 pavithran2004s@gmail.com</a>
    </div>
  </div>
</section>

</div><!-- #app -->

<footer>
  <div>Built with ❤️ by <span style="color:var(--accent2)">Pavithran S</span> · Software Engineer · AI/ML · Full Stack · Flutter</div>
  <div style="margin-top:.4rem;color:rgba(100,116,139,.5);font-size:.7rem">KALAM 2025 Hackathon Champion 🏅</div>
</footer>

<script>
/* ═══════════════════════════════════════════
   1. PARTICLE CONSTELLATION BACKGROUND
═══════════════════════════════════════════ */
(function(){
  const canvas=document.getElementById('bg-canvas');
  const ctx=canvas.getContext('2d');
  let W,H,particles=[];
  const N=90;

  function resize(){
    W=canvas.width=window.innerWidth;
    H=canvas.height=window.innerHeight;
  }
  resize();
  window.addEventListener('resize',resize);

  function Particle(){
    this.x=Math.random()*W;
    this.y=Math.random()*H;
    this.vx=(Math.random()-.5)*.35;
    this.vy=(Math.random()-.5)*.35;
    this.r=Math.random()*1.5+.5;
    this.alpha=Math.random()*.5+.2;
    this.color=Math.random()<.6?'124,111,205':'56,189,248';
  }
  Particle.prototype.update=function(){
    this.x+=this.vx;this.y+=this.vy;
    if(this.x<0)this.x=W;if(this.x>W)this.x=0;
    if(this.y<0)this.y=H;if(this.y>H)this.y=0;
  };

  for(let i=0;i<N;i++)particles.push(new Particle());

  let mx=W/2,my=H/2;
  window.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});

  function draw(){
    ctx.clearRect(0,0,W,H);
    // draw lines
    for(let i=0;i<N;i++){
      for(let j=i+1;j<N;j++){
        const dx=particles[i].x-particles[j].x;
        const dy=particles[i].y-particles[j].y;
        const d=Math.sqrt(dx*dx+dy*dy);
        if(d<130){
          ctx.beginPath();
          ctx.moveTo(particles[i].x,particles[i].y);
          ctx.lineTo(particles[j].x,particles[j].y);
          ctx.strokeStyle=`rgba(124,111,205,${(.18*(1-d/130)).toFixed(3)})`;
          ctx.lineWidth=.5;
          ctx.stroke();
        }
      }
      // mouse attract
      const dx=mx-particles[i].x;
      const dy=my-particles[i].y;
      const d=Math.sqrt(dx*dx+dy*dy);
      if(d<150){
        ctx.beginPath();
        ctx.moveTo(particles[i].x,particles[i].y);
        ctx.lineTo(mx,my);
        ctx.strokeStyle=`rgba(167,139,250,${(.15*(1-d/150)).toFixed(3)})`;
        ctx.lineWidth=.5;
        ctx.stroke();
      }
    }
    // draw dots
    for(const p of particles){
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(${p.color},${p.alpha})`;
      ctx.fill();
      p.update();
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ═══════════════════════════════════════════
   2. MATRIX CODE RAIN (subtle accent)
═══════════════════════════════════════════ */
(function(){
  const canvas=document.getElementById('matrix-canvas');
  const ctx=canvas.getContext('2d');
  let W,H;
  function resize(){
    W=canvas.width=window.innerWidth;
    H=canvas.height=window.innerHeight;
  }
  resize();
  window.addEventListener('resize',resize);
  const chars='01アイウエオカキクケコサシスセソABCDEFGHIJKLMN<>/{}[]()';
  const fs=13,cols=[];
  function setup(){cols.length=0;for(let i=0;i<Math.floor(W/fs);i++)cols[i]=Math.floor(Math.random()*-H/fs)}
  setup();
  window.addEventListener('resize',setup);
  function draw(){
    ctx.fillStyle='rgba(10,10,20,.06)';
    ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#7c6fcd';
    ctx.font=fs+'px monospace';
    for(let i=0;i<cols.length;i++){
      const c=chars[Math.floor(Math.random()*chars.length)];
      ctx.fillText(c,i*fs,cols[i]*fs);
      if(cols[i]*fs>H&&Math.random()>.97)cols[i]=0;
      else cols[i]++;
    }
    setTimeout(()=>requestAnimationFrame(draw),80);
  }
  draw();
})();

/* ═══════════════════════════════════════════
   3. CUSTOM CURSOR
═══════════════════════════════════════════ */
(function(){
  const dot=document.getElementById('cursor-dot');
  const ring=document.getElementById('cursor-ring');
  let tx=0,ty=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{
    tx=e.clientX;ty=e.clientY;
    dot.style.left=(tx-3)+'px';dot.style.top=(ty-3)+'px';
  });
  (function lerp(){
    rx+=(tx-rx)*.12;ry+=(ty-ry)*.12;
    ring.style.left=(rx-16)+'px';ring.style.top=(ry-16)+'px';
    requestAnimationFrame(lerp);
  })();
  document.querySelectorAll('a,button,.btn,.tech-item,.social-card').forEach(el=>{
    el.addEventListener('mouseenter',()=>{ring.style.transform='scale(1.6)';ring.style.opacity='.6'});
    el.addEventListener('mouseleave',()=>{ring.style.transform='scale(1)';ring.style.opacity='1'});
  });
})();

/* ═══════════════════════════════════════════
   4. TYPING ANIMATION
═══════════════════════════════════════════ */
(function(){
  const lines=['🚀 Software Engineer','⚡ Next.js | Django | PostgreSQL','🤖 AI/ML & Data Analytics','📱 Flutter Developer','🏅 Hackathon Champion 2025!'];
  let li=0,ci=0,del=false;
  const el=document.getElementById('typed-text');
  function type(){
    const cur=lines[li];
    if(!del){
      el.textContent=cur.slice(0,ci+1);
      ci++;
      if(ci===cur.length){del=true;setTimeout(type,1800);return}
      setTimeout(type,55);
    } else {
      el.textContent=cur.slice(0,ci-1);
      ci--;
      if(ci===0){del=false;li=(li+1)%lines.length;setTimeout(type,400);return}
      setTimeout(type,28);
    }
  }
  type();
})();

/* ═══════════════════════════════════════════
   5. SCROLL REVEAL
═══════════════════════════════════════════ */
(function(){
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('visible');
        // trigger skill bars
        e.target.querySelectorAll&&e.target.querySelectorAll('.skill-bar-fill').forEach(b=>{
          b.style.width=b.dataset.w+'%';
        });
      }
    });
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // standalone skill bars
  const io2=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting)e.target.style.width=e.target.dataset.w+'%';
    });
  },{threshold:.1});
  document.querySelectorAll('.skill-bar-fill').forEach(el=>io2.observe(el));
})();

/* ═══════════════════════════════════════════
   6. COUNT-UP ANIMATION
═══════════════════════════════════════════ */
(function(){
  function countUp(el,target,dur){
    let start=0,startTime=null;
    function step(ts){
      if(!startTime)startTime=ts;
      const p=Math.min((ts-startTime)/dur,1);
      el.textContent=Math.floor(p*target)+(el.id==='cnt-stacks'?'+':'');
      if(p<1)requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        countUp(document.getElementById('cnt-projects'),10,1200);
        countUp(document.getElementById('cnt-certs'),17,1500);
        countUp(document.getElementById('cnt-stacks'),30,1000);
        io.disconnect();
      }
    });
  },{threshold:.3});
  io.observe(document.querySelector('.hero-stats'));
})();

/* ═══════════════════════════════════════════
   7. FLOATING PARTICLES ON CLICK
═══════════════════════════════════════════ */
document.addEventListener('click',e=>{
  for(let i=0;i<8;i++){
    const p=document.createElement('div');
    p.style.cssText=`position:fixed;left:${e.clientX}px;top:${e.clientY}px;width:6px;height:6px;border-radius:50%;background:hsl(${Math.random()*60+240},80%,70%);pointer-events:none;z-index:9997;mix-blend-mode:screen;`;
    document.body.appendChild(p);
    const angle=Math.random()*Math.PI*2;
    const speed=Math.random()*4+2;
    let vx=Math.cos(angle)*speed,vy=Math.sin(angle)*speed-2;
    let x=e.clientX,y=e.clientY,alpha=1;
    (function animate(){
      x+=vx;y+=vy;vy+=.15;alpha-=.03;
      p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=alpha;
      if(alpha>0)requestAnimationFrame(animate);
      else p.remove();
    })();
  }
});
</script>
</body>
</html>
