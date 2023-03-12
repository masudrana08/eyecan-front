import React, { useContext, useState } from "react";
import { MyContext } from "../../App";
import getImg from "../../utils/getImg";
import MyModal from "../MyModal/MyModal";
import "./blog.css";




export default function Blog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const { blogs, setShow } = useContext(MyContext);

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
    const API = process.env.REACT_APP_API
    fetch(API+"/blog", {
      method: 'POST',
      body: formData,
    })
    .then(()=>{
      setShow(false)
    })
    
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
        {blogs.map((blog) => {
          return (
            <div key={blog._id}>
              <img src={getImg(blog.thumbnail)} alt="" />
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
