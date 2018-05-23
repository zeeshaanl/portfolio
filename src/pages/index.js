import React from "react"
import Link from "gatsby-link";
import { Parallax, Background } from 'react-parallax';
import mainLogo from '../../static/img/background.jpeg';
import portfolioBackground from '../../static/img/portfolio-background.jpeg';
import './index.scss';

export default () => <div>
    <Parallax
        bgImage={portfolioBackground}
        bgImageAlt=""
        strength={200}
    >
        <div className='c-intro-message'>
            Hi, I'm Zeeshaan, a fullstack developer based in Hamburg, Germany.
        </div>
    </Parallax>
    <Parallax
        bgImage={mainLogo}
        bgImageAlt=""
        strength={200}
    >
        <div style={{ height: '100vh' }}>
            <Link to="/page-2/">Link</Link>
        </div>
    </Parallax>
</div>
