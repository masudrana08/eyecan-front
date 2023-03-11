import React, { useState } from "react";

export default function Blog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData();
    if (title) formData.append("title", title);
    if (description) formData.append("description", description);
    if (link) formData.append("link", link);
    if (file) formData.append("thumbnail", file);

    console.log(formData.get("thumbnail"));
  }
  return (
    <div>
      <div>
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)} />
            <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
            <input type="text" placeholder="Resource Link" value={link} onChange={(event) => setLink(event.target.value)} />
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Submit</button>
        </form>
      </div>
      <div>
      </div>
    </div>
  );
}
