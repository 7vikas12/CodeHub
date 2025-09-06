// src/components/Preview.jsx
import React, { useEffect, useRef } from 'react';
import { useEditor } from '../context/EditorContext';

export default function Preview({ runSignal = 0 }) {
  const iframeRef = useRef(null);
  const { html, css, js, live } = useEditor();

  const writePreview = (docHtml = html, docCss = css, docJs = js) => {
    const doc = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <style>html,body{margin:0;padding:18px;background:transparent;color:inherit;font-family:Inter, Arial, sans-serif} ${docCss}</style>
  </head>
  <body>${docHtml}<script>try{${docJs}}catch(e){console.error(e)}<\/script></body>
</html>`;
    const iframeDoc = iframeRef.current?.contentWindow?.document;
    if (!iframeDoc) return;
    iframeDoc.open();
    iframeDoc.write(doc);
    iframeDoc.close();
  };

  // live (debounced)
  useEffect(() => {
    if (!live) return;
    const id = setTimeout(() => writePreview(), 220);
    return () => clearTimeout(id);
  }, [html, css, js, live]);

  // run when runSignal changes
  useEffect(() => {
    writePreview();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runSignal]);

  // initial render
  useEffect(() => {
    writePreview();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="output-area">
      <div className="output-head">Output</div>

      {/* Padded frame around the iframe so content feels spacious and visible */}
      <div className="output-frame card">
        <iframe
          title="preview"
          ref={iframeRef}
          id="preview"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  );
}
