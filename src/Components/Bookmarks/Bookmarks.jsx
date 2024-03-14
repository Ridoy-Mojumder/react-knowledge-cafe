import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({ bookmarks, spentTime }) => {
    return (
        <div>
            <div className='flex justify-center items-center text-center border-2 border-lime-500 m-4 p-4'>
                <h3 className='text-2xl font-bold'>Reading Time: {spentTime}</h3>
            </div>
            <div>
                <h2 className="text-2xl font-bold m-4 p-2 border-b-2 border-gray-400">Bookmarked Blogs: {bookmarks.length}</h2>

                {bookmarks.map((bookmark, idx) => <Bookmark bookmark={bookmark} key={idx} />)}
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    spentTime: PropTypes.number.isRequired,
};

export default Bookmarks;
