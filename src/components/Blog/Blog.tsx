import React, { useContext, useState } from "react";
import { MyContext } from "../../App";
import getImg from "../../utils/getImg";
import MyModal from "../MyModal/MyModal";
import "./blog.css";

// interface MyContextProps {
//   blogs: {title:String, description:String, thumbnail:String, link:String}[],
//   setBlogs : (data:[])=>void
//  }
interface IBlog{
  title:String, 
  description:String, 
  thumbnail:String, 
  link:String,
  "_id":String,
  createdAt:String
}

export default function Blog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const { blogs }: any = useContext(MyContext);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    if (title) formData.append("title", title);
    if (description) formData.append("description", description);
    if (link) formData.append("link", link);
    if (file) formData.append("thumbnail", file);
  };

  return (
    <div>
      {/* Create blog  */}
      <div>
        <MyModal btnName="Create Blog" header="Write Blog">
          <form onSubmit={handleFormSubmit} className="blog-form">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <textarea
              value={description}
              placeholder="Description"
              onChange={(event) => setDescription(event.target.value)}
            />
            <input
              type="text"
              placeholder="Resource Link"
              value={link}
              onChange={(event) => setLink(event.target.value)}
            />
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Submit</button>
          </form>
        </MyModal>
      </div>
      {/* Show Blog  */}
      show blog
      <div>
        {blogs.map((blog:IBlog) => {
          return (
            <div key={blog._id.toString()}>
              <img src={`${getImg(blog.thumbnail)}`} alt="" />
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
