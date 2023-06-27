import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

import './index.css';

const skills = [
    {
        name: 'HTML',
        years: 5,
        icon: 'fab fa-html5',
        color: '#e34c26'
    },
    {
        name: 'CSS',
        years: 5,
        icon: 'fab fa-css3-alt',
        color: '#264de4'
    },
    {
        name: 'JavaScript',
        years: 5,
        icon: 'fab fa-js-square',

        color: '#f0db4f'
    },
    {
        name: 'React',
        years: 3,
        icon: 'fab fa-react',
        color: '#61dbfb'
    },
    {
        name: 'Node.js',
        years: 3,
        icon: 'fab fa-node-js',
        color: '#3c873a'
    },
    {
        name: 'MySQL',
        years: 3,
        icon: 'fas fa-database',
        color: '#00758f'
    }


];

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home skills={skills} />} />
                        <Route path="/about" element={<About skills={skills} />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
