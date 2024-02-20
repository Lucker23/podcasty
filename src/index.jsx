import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import './style.css'

createRoot(
  document.querySelector('#app'),
).render(<HomePage />);
