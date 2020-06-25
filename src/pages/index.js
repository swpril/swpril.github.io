import React from 'react';
import Layout from '../components/layout';
import About from '../components/about';
import Education from '../components/education';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/footer';
import SEO from '../components/seo';
const IndexPage = () => {
    return (
        <Layout>
            <SEO title='oyeshubhu' />
            <About />
            <Education />
            <Projects />
            <Contact />
            <Footer />
        </Layout>
    )
}

export default IndexPage