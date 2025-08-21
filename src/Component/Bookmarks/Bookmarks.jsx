import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="w-1/3">
      <h2 className="text-3xl font-bold">
        Bookmarked Blogs : {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark) => (
        <Bookmark bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
