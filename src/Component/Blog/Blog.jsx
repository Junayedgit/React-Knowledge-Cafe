import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="flex flex-col gap-8 justify-center border-b-2 pt-2.5">
      <img src={cover} alt={`cover picture of the blog title ${title}`} />

      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center gap-1.5">
          <div>
            <img className="w-14" src={author_img} alt="" />
          </div>
          <div>
            <p>{author}</p>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>{" "}
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 cursor-pointer"
          >
            <CiBookmark></CiBookmark>
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <span>{hashtags}</span>
      <button
        className="flex justify-start cursor-pointer text-blue-600  underline mb-8"
        onClick={() => handleMarkAsRead(id, reading_time)}
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
};
export default Blog;
