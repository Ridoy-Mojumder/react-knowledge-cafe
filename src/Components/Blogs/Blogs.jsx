import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleBookmarks, handleSendTime }) => {

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])


    return (
        <div>
            {
                blogs.map(blog => <Blog blog={blog} key={blog.id} handleBookmarks={handleBookmarks} handleSendTime={handleSendTime}></Blog>)
            }
        </div>
    );
};

export default Blogs;

Blogs.propTypes = {

    handleBookmarks: PropTypes.func.isRequired,
    handleSendTime: PropTypes.func.isRequired,
};