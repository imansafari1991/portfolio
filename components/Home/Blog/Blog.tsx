import SectionHeading from "@/components/Helpers/SectionHeading";
import { blogs } from "@/data/data";
import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>Our Blog</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-center">
        {blogs.map((blog,i) => {
          return (
            <div
              key={blog.id}
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 50}`}
            >
              <BlogCard blog={blog} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;