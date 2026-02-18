import { Bell } from "lucide-react";
import { useState } from "react";

export default function NotificationBell() {

  const [count, setCount] = useState<number>(() => {
    const saved = localStorage.getItem("notifications");
    return saved ? parseInt(saved) : 3;
  });

  const handleClick = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      localStorage.setItem("notifications", newCount.toString());
    }
  };

  return (
    <div className="relative cursor-pointer" onClick={handleClick}>

      <Bell />

      {count > 0 && (
        <span
          className="
          absolute 
          -top-2 
          -right-2
          bg-red-500
          text-white
          text-xs
          w-5
          h-5
          flex
          items-center
          justify-center
          rounded-full
        "
        >
          {count}
        </span>
      )}

    </div>
  );
}
