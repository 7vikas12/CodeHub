import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Controls from '../components/Controls';
import CodeEditor from '../components/CodeEditor';
import Preview from '../components/Preview';
import { useEditor } from '../context/EditorContext';

export default function EditorPage() {
  const { html, setHtml, css, setCss, js, setJs, live } = useEditor();
  const [runSignal, setRunSignal] = useState(0);

  const runNow = () => {
    setRunSignal(s => s + 1);
  };

  // keyboard shortcut: Cmd/Ctrl + Enter
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        runNow();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Controls runNow={runNow} />
      <div className="editor-grid">
        <CodeEditor label="HTML" value={html} onChange={setHtml} />
        <CodeEditor label="CSS" value={css} onChange={setCss} />
        <CodeEditor label="JavaScript" value={js} onChange={setJs} />
      </div>
      <Preview runSignal={runSignal} />
    </div>
  );
}
