import React from "react";
import { src_config } from "@/Config/Config"; // Adjust this if needed

const blogPosts = [
  {
    title: "First Time Home Owner Ideas",
    author: "Kristin Watson",
    date: "Dec 19, 2021",
    image: "post-1.jpg",
  },
  {
    title: "How To Keep Your Furniture Clean",
    author: "Robert Fox",
    date: "Dec 15, 2021",
    image: "post-2.jpg",
  },
  {
    title: "Small Space Furniture Apartment Ideas",
    author: "Kristin Watson",
    date: "Dec 12, 2021",
    image: "post-3.jpg",
  },
  {
    title: "First Time Home Owner Ideas",
    author: "Kristin Watson",
    date: "Dec 19, 2021",
    image: "post-1.jpg",
  },
  {
    title: "How To Keep Your Furniture Clean",
    author: "Robert Fox",
    date: "Dec 15, 2021",
    image: "post-2.jpg",
  },
  {
    title: "Small Space Furniture Apartment Ideas",
    author: "Kristin Watson",
    date: "Dec 12, 2021",
    image: "post-3.jpg",
  },
  {
    title: "First Time Home Owner Ideas",
    author: "Kristin Watson",
    date: "Dec 19, 2021",
    image: "post-1.jpg",
  },
  {
    title: "How To Keep Your Furniture Clean",
    author: "Robert Fox",
    date: "Dec 15, 2021",
    image: "post-2.jpg",
  },
  {
    title: "Small Space Furniture Apartment Ideas",
    author: "Kristin Watson",
    date: "Dec 12, 2021",
    image: "post-3.jpg",
  },
];

const BlogSection = () => {
  return (
    <div className="blog-section">
      <div className="container">
        <div className="row">
          {blogPosts.map((post, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-5" key={index}>
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <img
                    src={`${src_config}images/${post.image}`}
                    alt="Blog"
                    className="img-fluid"
                  />
                </a>
                <div className="post-content-entry">
                  <h3>
                    <a href="#">{post.title}</a>
                  </h3>
                  <div className="meta">
                    <span>
                      by <a href="#">{post.author}</a>
                    </span>{" "}
                    <span>
                      on <a href="#">{post.date}</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
