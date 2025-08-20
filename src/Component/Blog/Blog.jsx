import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const {
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
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <span>{hashtags}</span>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
