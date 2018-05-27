import React from "react"
import Link from "gatsby-link";
import { Parallax, Background } from 'react-parallax';
import { Helmet } from "react-helmet";
import mainLogo from '../../static/img/background.jpeg';
import portfolioBackground from '../../static/img/portfolio-background.jpeg';
import './index.scss';

export default () => <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Zeeshaan's Portfolio</title>
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Sunflower" />
    </Helmet>
    <Parallax
        bgImage={portfolioBackground}
        bgImageAlt=""
        strength={200}
    >
        <div className='c-intro-message'>
            I'm Zeeshaan, a fullstack javascript developer based in Hamburg, Germany.
        </div>
    </Parallax>
    <div style={{ height: '100vh', textAlign: 'center' }}>
        <h1>About</h1>
        <p>
            I enjoy building MVPs from top to bottom and testing the potential and viability of ideas, with code that not only a mother could love.
        </p>
    </div>
    <div style={{ height: '100vh', textAlign: 'center' }}>
        <h1>Projects</h1>
        <Link to="/page-2/">Link</Link>
    </div>
</div>
