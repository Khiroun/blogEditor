import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./components/Layout";

import "./styles/style.css";

function App() {
  return (
    <div>
      <Suspense fallback={<span>Loading</span>}>
        <Router>
          <Layout />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
