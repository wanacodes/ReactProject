import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
    return (
        <div>
            <Layout fixedHeader>
                <Header
                    className="header-color"
                    title={
                        <span>
                            <span style={{ color: "#ddd" }}>Area / </span>
                            <strong>The Title</strong>
                        </span>
                    }
                >
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contacts</Link>
                    </Navigation>
                </Header>
                <Main />
                <Content />
            </Layout>
        </div>
    );
}

export default App;
