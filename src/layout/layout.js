import React from 'react';
import './layout.css';
import {Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import Main from '../components/main';
import {Link} from 'react-router-dom';

const layout = () => {
    return(
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title={<a href="/">Alex Mulvaney's Resume</a>} scroll>
                    <Navigation>
                        <Link to ="/resume">Resume</Link>
                        <Link to ="/aboutme">About Me</Link>
                        <Link to ="/projects">Projects</Link>
                        <Link to ="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to ="/resume">Resume</Link>
                        <Link to ="/aboutme">About Me</Link>
                        <Link to ="/projects">Projects</Link>
                        <Link to ="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
                <div className="footer-container">
                <Footer size="mini">
                    <FooterSection type="left" logo="Title">
                        <FooterLinkList>
                            <a href="/contact">Contact</a>
                            <a href="/resume">Resume</a>
                        </FooterLinkList>
                </FooterSection>
            </Footer>
        </div>
            </Layout>
        </div>
    );
};

export default layout;