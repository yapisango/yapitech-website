import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ProjectList from "./pages/ProjectList";

import WebDevelopment from "./pages/WebDevelopment";
import CloudSolutions from "./pages/CloudSolutions";
import AIAssistedSolutions from "./pages/AIAssistedSolutions";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        {/* About */}
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />

        {/* Services overview */}
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />

        {/* ================================
            SPECIFIC SERVICE DETAIL PAGES
        ================================== */}
        <Route
          path="/services/web"
          element={
            <Layout>
              <WebDevelopment />
            </Layout>
          }
        />

        <Route
          path="/services/cloud"
          element={
            <Layout>
              <CloudSolutions />
            </Layout>
          }
        />

        <Route
          path="/services/ai"
          element={
            <Layout>
              <AIAssistedSolutions />
            </Layout>
          }
        />

        {/* Dynamic project list (kept last to avoid conflicts) */}
        <Route
          path="/services/:serviceId"
          element={
            <Layout>
              <ProjectList />
            </Layout>
          }
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}



