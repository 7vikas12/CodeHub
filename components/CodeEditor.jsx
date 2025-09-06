// src/components/CodeEditor.jsx
import React from 'react';

export default function CodeEditor({ label, value, onChange }) {
  return (
    <div className="pane">
      <div className="pane-head">{label}</div>
      <textarea value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
