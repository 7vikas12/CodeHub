import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const EditorContext = createContext(null);

export function EditorProvider({ children }) {
  const [html, setHtml] = useState('<h1>Hello world</h1>');
  const [css, setCss] = useState(
    'body { font-family: Arial, sans-serif; padding: 20px; } h1 { color: #2b6cb0; }'
  );
  const [js, setJs] = useState("console.log('hello from iframe')");
  const [live, setLive] = useState(false);
  const [dark, setDark] = useState(true);

  // keep a body class in sync with the dark state so global styles can react
  useEffect(() => {
    if (dark) {
      document.body.classList.add('theme-dark');
      document.body.classList.remove('theme-light');
    } else {
      document.body.classList.add('theme-light');
      document.body.classList.remove('theme-dark');
    }
  }, [dark]);

  const reset = useCallback(() => {
    setHtml('<h1>Hello world</h1>');
    setCss('body { font-family: Arial, sans-serif; padding: 20px; } h1 { color: #2b6cb0; }');
    setJs("console.log('hello from iframe')");
  }, []);

  return (
    <EditorContext.Provider
      value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
        live,
        setLive,
        dark,
        setDark,
        reset,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}

export function useEditor() {
  const ctx = useContext(EditorContext);
  if (!ctx) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return ctx;
}
