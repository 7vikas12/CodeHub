import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { EditorProvider } from './context/EditorContext';
import Welcome from './pages/Welcome';
import EditorPage from './pages/EditorPage';
import ResourcesPage from './pages/ResourcesPage';
import OtherEditorsPage from './pages/OtherEditorsPage';

export default function App() {
  return (
    <EditorProvider>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/other-editors" element={<OtherEditorsPage />} />
      </Routes>
    </EditorProvider>
  );
}
