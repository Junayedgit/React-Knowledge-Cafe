import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3 bg-gray-400 pt-4 rounded-xl">
      <div>
        <h1 className="text-4xl font-bold text-center p-4">
          Reading Time: {readingTime} min
        </h1>
      </div>
      <h2 className="text-3xl font-bold text-center">
        Bookmarked Blogs : {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark) => (
        <Bookmark bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
