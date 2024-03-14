import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className="bg-white rounded-lg p-4 mx-4 my-2 shadow-md w-full">
            <h3 className="text-lg font-light text-gray-800 mb-2">{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default Bookmark;
