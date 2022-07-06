import React from "react";
import { v4 as uuidv4} from "uuid"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link,
    NavLink
  } from "react-router-dom";
import Card from "./components/shared/Card";
import { useState } from "react";
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackData from "./data/FeedbackData";
import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./pages/AboutPage";
import Post from "./components/Post";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <Router>
            <Header/>
            <div className="container">
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <FeedbackForm handleAdd={addFeedback}/>
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                        </>
                    } />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/post/:slug/:name" element={<Post />} />
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
    );
}

export default App