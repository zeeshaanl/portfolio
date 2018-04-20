import React from "react"
import Link from "gatsby-link";
import './index.scss';

export default () => <div style={{ color: `tomato` }}>
    <h1>Welcome to my site!</h1>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <br />
    <div>
        <Link to="/page-2/">Link</Link>
    </div>
</div>
