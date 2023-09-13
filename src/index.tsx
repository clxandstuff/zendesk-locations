import { createRoot } from 'react-dom/client';
import React from 'react';
import { App } from './app';
import './global.css';

const root = document.createElement('div');
root.classList.add('root');

document.body.appendChild(root);

createRoot(root).render(
    <App />
);
