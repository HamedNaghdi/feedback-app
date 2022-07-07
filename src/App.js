import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link,
    NavLink
  } from "react-router-dom";
import Card from "./components/shared/Card";
import Header from "./components/Header"

import { FeedbackProvider } from "./context/FeedbackContext";

import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./pages/AboutPage";
import Post from "./components/Post";
import Blog from "./components/Blog";

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header/>
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={
                            <>
                                <FeedbackForm/>
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        } />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/post/:slug/:name" element={<Post />} />
                        <Route path="/blog/*" element={<Blog />} />
                    </Routes>

                    <Card>
                        <NavLink to="/" activeClassName="active">
                            Home
                        </NavLink>
                        <NavLink to="/about" activeClassName="active">
                            About
                        </NavLink>
                    </Card>

                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    );
}

export default App