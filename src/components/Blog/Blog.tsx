import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import MyCard from "../MyCard/MyCard";
import MyModal from "../MyModal/MyModal";
import "./blog.css";
const API = process.env.REACT_APP_API;

export default function Blog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const { blogs, setShow, editThis, setEditThis } = useContext(MyContext);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEditThis("");
    const formData = new FormData();
    if (title) formData.append("title", title);
    if (description) formData.append("description", description);
    if (link) formData.append("link", link);
    if (file) formData.append("thumbnail", file);

    if (editThis) {
      fetch(API + "/blog/" + editThis, {
        method: "PUT",
        body: formData,
      }).then(() => {
        setShow(false);
        setTitle("");
        setDescription("");
        setLink("");
      });
    } else {
      fetch(API + "/blog", {
        method: "POST",
        body: formData,
      }).then(() => {
        setShow(false);
        setTitle("");
        setDescription("");
        setLink("");
      });
    }
  };
  useEffect(() => {
    const filteredBlog = blogs.filter((i) => i._id == editThis);
    const blog = filteredBlog[0];
    if(blog){
      setTitle(blog.title);
      setDescription(blog.description);
      setLink(blog.link);
    }
  }, [editThis]);

  return (
    <div className="my-5">
      {/* Create blog  */}
      <h2 className="text-center ">Welcome to Our Blog</h2>
      <div>
        <MyModal btnName="Create Blog" header="Write Blog">
          <form onSubmit={handleFormSubmit} className="blog-form">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              maxLength={50}
            />
            <textarea
              value={description}
              placeholder="Description"
              onChange={(event) => setDescription(event.target.value)}
              maxLength={120}
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
      <div className="blogs">
        {blogs.map((blog) => {
          return (
            <div key={blog._id} className="item">
              <MyCard blog={blog} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
