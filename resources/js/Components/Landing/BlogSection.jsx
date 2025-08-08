import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { src_config } from "@/Config/Config";
export default function BlogSection() {
  const posts = [
    {
      image: `${src_config}images/post-1.jpg`,
      title: "First Time Home Owner Ideas",
      author: "Kristin Watson",
      date: "Dec 19, 2021",
      link: "#",
    },
    {
      image: `${src_config}images/post-2.jpg`,
      title: "How To Keep Your Furniture Clean",
      author: "Robert Fox",
      date: "Dec 15, 2021",
      link: "#",
    },
    {
      image:`${src_config}images/post-3.jpg`,
      title: "Small Space Furniture Apartment Ideas",
      author: "Kristin Watson",
      date: "Dec 12, 2021",
      link: "#",
    },
  ];

  return (
    <div className="blog-section py-5">
      <Container>
        <Row className="mb-5">
          <Col md={6}>
            <h2 className="section-title">Recent Blog</h2>
          </Col>
          <Col md={6} className="text-start text-md-end">
            <a href="#" className="more">
              View All Posts
            </a>
          </Col>
        </Row>

        <Row>
          {posts.map((post, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              className="mb-4 mb-md-0"
            >
              <div className="post-entry">
                <a href={post.link} className="post-thumbnail">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="img-fluid"
                  />
                </a>
                <div className="post-content-entry">
                  <h3>
                    <a href={post.link}>{post.title}</a>
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
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
