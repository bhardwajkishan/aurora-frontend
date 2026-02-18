import { useEffect, useState } from "react";

export default function UserAvatar() {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedImage = localStorage.getItem("image");

    if (savedName) setName(savedName);
    if (savedImage) setImage(savedImage);
  }, []);

  return (
    <div className="flex items-center gap-2">

      <img
        src={image || "https://i.pravatar.cc/40"}
        className="rounded-full w-[40px] h-[40px]"
      />

      <p className="text-sm font-semibold">
        {name || "User"}
      </p>

    </div>
  );
}
