import PropTypes from 'prop-types';
import { IoBookmarkOutline } from "react-icons/io5";

const Blog = ({ blog, handleBookmarks ,handleSendTime }) => {
    const { title, author_img, cover_image, author, posted_date, reading_time, hashtags } = blog;

    return (
        <div className="flex justify-center my-9">
            <div className="max-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <img className="w-full" src={cover_image} alt={title} />
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                    <div className="flex items-center mt-4">
                        <img className="w-12 h-12 rounded-full object-cover mr-4" src={author_img} alt="Author" />
                        <div>
                            <h3 className='text-lg font-semibold'>{author}</h3>
                            <div className='flex justify-between gap-[580px] text-sm text-gray-600 mt-1'>
                                <p>{posted_date}</p>
                                <p> <div className='flex gap-2'><span>{reading_time} min read</span><IoBookmarkOutline className='mt-1' onClick={() => handleBookmarks(blog)}></IoBookmarkOutline></div> </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <ul className="flex flex-wrap mt-2">
                            {hashtags.map((hashtag, index) => (
                                <li key={index} className="mr-6 mb-2 text-sm  rounded-full px-3 py-1">#{hashtag}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex justify-end items-center mt-4">
                        <button onClick={() => handleSendTime(reading_time)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                            Bookmark
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author_img: PropTypes.string.isRequired,
        cover_image: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        posted_date: PropTypes.string.isRequired,
        reading_time: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    handleBookmarks: PropTypes.func.isRequired,
    handleSendTime: PropTypes.func.isRequired,
};

export default Blog;
