import { useState, useEffect } from "react";

export default function EditableProfile() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  // LOAD DATA
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedEmail = localStorage.getItem("email");
    const savedImage = localStorage.getItem("image");

    if (savedName) setName(savedName);
    if (savedEmail) setEmail(savedEmail);
    if (savedImage) setImage(savedImage);
  }, []);

  // SAVE DATA
  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("image", image);
  }, [name, email, image]);

  const handleImage = (e:any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result as string);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center">

      <img
        src={image || "https://i.pravatar.cc/150"}
        className="rounded-full w-[120px] h-[120px] mb-4"
      />

      <input 
        type="file"
        onChange={handleImage}
        className="mb-4"
      />

      <input
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="Enter Name"
        className="border p-2 rounded w-full mb-2"
      />

      <input
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Enter Email"
        className="border p-2 rounded w-full"
      />

    </div>
  );
}
