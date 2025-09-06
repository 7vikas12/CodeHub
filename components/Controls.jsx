import React from 'react';
import { useEditor } from '../context/EditorContext';
import { Sun, Moon } from 'lucide-react';

export default function Controls({ runNow }) {
  const { live, setLive, dark, setDark } = useEditor();

  return (
    <div className="controls">
      {/* Left: theme toggle */}
      <div className="theme-toggle">
        <Sun size={18} className="theme-icon" />
        <label className="switch" aria-label="Toggle theme">
          <input
            type="checkbox"
            checked={!dark}
            onChange={(e) => setDark(!e.target.checked)}
          />
          <span className="slider">
            <span className="thumb" />
          </span>
        </label>
        <Moon size={18} className="theme-icon" />
      </div>

      {/* Center: AI Help */}
      <div className="ai-help">
        <a className="ai-btn" href="https://chat.openai.com/" target="_blank" rel="noreferrer">
          AI Help
        </a>
      </div>

      {/* Right: Run buttons */}
      <div className="control-buttons">
        <button
          className={live ? 'btn active' : 'btn'}
          onClick={() => setLive(true)}
        >
          Live Run
        </button>

        <button
          className="btn"
          onClick={() => {
            setLive(false);
            runNow && runNow();
          }}
        >
          Run
        </button>
      </div>
    </div>
  );
}
