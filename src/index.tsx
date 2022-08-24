import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/styles.css';
import './styles/test.scss';
import './styles/test.less';
import Test from './Components/Test';

function App(): JSX.Element {
  return (
    <div>
      <Test />
      <div className="box">
        <h2>test less</h2>
      </div>
      <div className="card">
        <h2>test sass</h2>
      </div>
    </div>
  );
}

const container = document.getElementById('root');

const root = createRoot(container!);
root.render(<App />);
