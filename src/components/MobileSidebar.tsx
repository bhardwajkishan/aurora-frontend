import { X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileSidebar({ open, onClose }: Props) {

  const navigate = useNavigate();
  const location = useLocation();

  if (!open) return null;

  return (
    <div className="fixed top-0 left-0 w-[240px] h-full bg-white shadow-xl p-4 z-50">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-green-700 font-semibold">Aurora</h2>
        <button onClick={onClose}>
          <X />
        </button>
      </div>

      <ul className="space-y-3 text-sm">

        <li
          onClick={() => { navigate("/"); onClose(); }}
          className={`p-2 rounded-lg cursor-pointer
          ${location.pathname === "/" ? "bg-green-600 text-white" : "hover:bg-gray-200"}`}
        >
          Dashboard
        </li>

        <li
          onClick={() => { navigate("/tasks"); onClose(); }}
          className={`p-2 rounded-lg cursor-pointer
          ${location.pathname === "/tasks" ? "bg-green-600 text-white" : "hover:bg-gray-200"}`}
        >
          Tasks
        </li>

        <li
          onClick={() => { navigate("/calendar"); onClose(); }}
          className={`p-2 rounded-lg cursor-pointer
          ${location.pathname === "/calendar" ? "bg-green-600 text-white" : "hover:bg-gray-200"}`}
        >
          Calendar
        </li>

        <li
          onClick={() => { navigate("/analytics"); onClose(); }}
          className={`p-2 rounded-lg cursor-pointer
          ${location.pathname === "/analytics" ? "bg-green-600 text-white" : "hover:bg-gray-200"}`}
        >
          Analytics
        </li>

        <li
          onClick={() => { navigate("/team"); onClose(); }}
          className={`p-2 rounded-lg cursor-pointer
          ${location.pathname === "/team" ? "bg-green-600 text-white" : "hover:bg-gray-200"}`}
        >
          Team
        </li>

      </ul>

    </div>
  );
}
