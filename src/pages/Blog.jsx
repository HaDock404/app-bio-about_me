import React from 'react';
import { useParams } from 'react-router-dom';

import articles from '../data/articles';
import Video from "../components/Video"
import HomeLogo from "../components/Home_logo.jsx";
import BlogList from '../components/BlogList.jsx';

function Blog() {

    return (
        <>
            <Video />
            <BlogList />
            <HomeLogo/>
        </>
    )
}

export default Blog