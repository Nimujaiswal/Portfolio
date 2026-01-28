import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import "./Home.css";

// Uses your existing image paths (put the files in /public/images)
const HERO_IMAGES = {
  uiux: "/images/Sketch.jpg",
  graphic: "/images/unnamed.jpg",
};

export default function Home() {
  const [mode, setMode] = useState("uiux");

  return (
    <>
      <Header />

      <main className="home" role="main" aria-label="Hero section">
        {/* Animated gradient + ambient orbs are in CSS */}
        <div className="home__backdrop" aria-hidden="true" />
        <div className="home__orbs" aria-hidden="true" />

        <section className="home__container">
          {/* LEFT: copy */}
          <div className="home__left">
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="availability" aria-live="polite">
                <span className="dot" aria-hidden="true" /> Available for freelance & full-time
              </div>

              <h1 className="title">
                Designing <span className="highlight">Experiences</span>
                <br />
                
              </h1>
              <h1 className="title1">
                That Inspire & Convert
              </h1>


              <p className="subtitle">
                WEB TECH ENTHUSIAST <br></br>
                TURNS IDEA INTO REALITY <br></br>
                KEEN ON FRONT-END INNOVATIONS <br></br>
                LOVES BUILDING DIGITAL EXPERIENCE 
              </p>

              {/* Tabs: UI/UX vs Graphic */}
              <div
                className="tabs"
                role="tablist"
                aria-label="Work preview type"
              >
                <button
                  role="tab"
                  id="uiux-tab"
                  aria-selected={mode === "uiux"}
                  aria-controls="uiux-panel"
                  className={`tab ${mode === "uiux" ? "is-active" : ""}`}
                  onClick={() => setMode("uiux")}
                >
                  {/* icon */}
                   <svg className="tab__icon" viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg">
  <rect x="3" y="3" width="7" height="7" 
        stroke="currentColor" strokeWidth="2"/>
  <rect x="14" y="3" width="7" height="7" 
        stroke="currentColor" strokeWidth="2"/>
  <rect x="3" y="14" width="7" height="7" 
        stroke="currentColor" strokeWidth="2"/>
  <rect x="14" y="14" width="7" height="7" 
        stroke="currentColor" strokeWidth="2"/>
</svg>
                  UI/UX
                </button>

                <button
                  role="tab"
                  id="graphic-tab"
                  aria-selected={mode === "graphic"}
                  aria-controls="graphic-panel"
                  className={`tab ${mode === "graphic" ? "is-active" : ""}`}
                  onClick={() => setMode("graphic")}
                >
                 <svg className="tab__icon" viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg">
  <path d="M12 1l5 12-5 5-5-5 5-12Z" 
        stroke="currentColor" strokeWidth="2" 
        fill="none"/>
  <circle cx="12" cy="17" r="2.5" 
        stroke="currentColor" strokeWidth="2"/>
</svg>


                  Graphic
                </button>
              </div>

              {/* CTAs */}
              <div className="cta">
                <a href="/about" className="btn btn--ghost">
                  Hire Me <span className="arrow">→</span>
                </a>
              {/* <a
                  href="https://drive.google.com/file/d/1j1iqe8pWLtcUOlHCwL3HaahgsUSpVPIs/view?usp=sharing"
                  className="btn btn--link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
               
                </a>
                */}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: preview image that changes with tab */}
          <div className="home__right">
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                role="tabpanel"
                id={`${mode}-panel`}
                aria-labelledby={`${mode}-tab`}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="preview"
                whileHover={{ rotateY: 4, rotateX: -3, scale: 1.02 }}
              >
                <img
                  src={HERO_IMAGES[mode]}
                  alt={mode === "uiux" ? "UI/UX preview" : "Graphic design preview"}
                  className="preview__img"
                  loading="eager"
                  decoding="async"
                />
                <div className="preview__shadow" aria-hidden="true" />
              </motion.div>
            </AnimatePresence>

            {/* tool strip */}
            <div className="tools">
              <span className="chip">Define →</span>
              <span className="chip">← Design →</span>
              <span className="chip">← Refine →</span>
              <span className="chip">← Shine </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
