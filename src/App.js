import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
    return (
        <div style={{ height: "300px", position: "relative" }}>
            <Layout
                style={{
                    background:
                        "url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover"
                }}
            >
                <Header
                    transparent
                    title="My Portfolio"
                    style={{ color: "white" }}
                >
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contacts</Link>
                    </Navigation>
                </Header>
                <Drawer title="My Portfolio">
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contacts</Link>
                    </Navigation>
                </Drawer>
                <Main />
                <Content />
            </Layout>
        </div>
    );
}

export default App;
