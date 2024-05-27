import React from "react";
import {
  BlogsContainer,
  BlogWrapper,
  BlogCard,
  BlogImage,
  BlogInfo,
  BlogLink,
  BlogDate,
  BlogsHeading,
} from "./BlogElements";
import SocialIcons from "../Social/SocialIcons";

const Blogs = () => {
  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "Introduction to React Hooks",
      image: "/blog1.jpg",
      description:
        "Learn about React Hooks and how to use them in your projects.",
      link: "https://example.com",
      date: "April 15, 2024",
    },
    {
      id: 2,
      title: "Getting Started with CSS Grid Layout",
      image: "/blog2.jpg",
      description:
        "Explore the basics of CSS Grid Layout and create responsive layouts easily.",
      link: "https://example.com",
      date: "May 1, 2024",
    },
    {
      id: 3,
      title: "JavaScript ES6 Features You Should Know",
      image: "/blog3.jpg",
      description:
        "Discover the powerful features introduced in ES6 and how to use them.",
      link: "https://example.com",
      date: "June 10, 2024",
    },
    {
      id: 5,
      title: "JavaScript ES6 Features You Should Know",
      image: "/blog2.png",
      description:
        "Discover the powerful features introduced in ES6 and how to use them.",
      link: "https://example.com",
      date: "June 10, 2024",
    },
    {
      id: 6,
      title: "JavaScript ES6 Features You Should Know",
      image: "/blog4.jpg",
      description:
        "Discover the powerful features introduced in ES6 and how to use them.",
      link: "https://example.com",
      date: "June 10, 2024",
    },
  ];

  return (
    <>
      <BlogsContainer id="blogs">
        <BlogWrapper>
          <BlogsHeading>
            <h1>Latest Blogs</h1>
          </BlogsHeading>
          <div>
            {blogs.map((blog) => (
              <BlogCard key={blog.id}>
                <BlogImage src={blog.image} alt={blog.title} />
                <BlogInfo>
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                  <BlogLink
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer">
                    Read more
                  </BlogLink>
                  <BlogDate>{blog.date}</BlogDate>
                </BlogInfo>
              </BlogCard>
            ))}
          </div>
        </BlogWrapper>
        <SocialIcons />
      </BlogsContainer>
     
    </>
  );
};

export default Blogs;
