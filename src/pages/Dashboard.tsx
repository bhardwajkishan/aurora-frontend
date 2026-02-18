import { Mail, Play, Pause, RotateCcw, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UserAvatar from "../components/UserAvatar";
import NotificationBell from "../components/NotificationBell";
import InboxPreview from "../components/InboxPreview";
import MobileSidebar from "../components/MobileSidebar";

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  const [openInbox, setOpenInbox] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  // DARK MODE
  const [dark, setDark] = useState(false);
  const toggleTheme = () => {
    setDark((prev) => !prev);
  };

  // TIMER STATE
  const [time, setTime] = useState(() => {
    const saved = localStorage.getItem("time");
    return saved ? parseInt(saved) : 0;
  });

  const [running, setRunning] = useState(() => {
    const saved = localStorage.getItem("running");
    return saved === "true";
  });

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    localStorage.setItem("time", time.toString());
    localStorage.setItem("running", running.toString());
  }, [time, running]);

  const formatTime = () => {
    const hrs = Math.floor(time / 3600);
    const mins = Math.floor((time % 3600) / 60);
    const secs = time % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        backgroundColor: dark ? "#111827" : "#e5e7eb",
        color: dark ? "white" : "black",
        transition: "0.3s",
      }}
      className="min-h-screen p-4"
    >
      <div
        className="flex w-full h-[95vh] rounded-3xl shadow-xl p-6"
        style={{
          backgroundColor: dark ? "#1f2937" : "white",
          transition: "0.3s",
        }}
      >
        {/* SIDEBAR */}
        <div className="hidden md:block w-[230px] pr-6 border-r">
          <h2 className="text-xl font-semibold text-green-700 mb-10">Aurora</h2>

          <p className="text-xs text-gray-400 mb-4">MENU</p>

          <ul className="space-y-3 text-sm">
            <li
              onClick={() => navigate("/")}
              className={`p-2 rounded-lg cursor-pointer ${
                location.pathname === "/"
                  ? "bg-green-600 text-white"
                  : "hover:bg-gray-200 text-gray-800 dark:text-gray-300"
              }`}
            >
              Dashboard
            </li>

            <li
              onClick={() => navigate("/tasks")}
              className={`p-2 rounded-lg cursor-pointer ${
                location.pathname === "/tasks"
                  ? "bg-green-600 text-white"
                  : "hover:bg-gray-200 text-gray-800 dark:text-gray-300"
              }`}
            >
              Tasks
            </li>

            <li
              onClick={() => navigate("/calendar")}
              className={`p-2 rounded-lg cursor-pointer ${
                location.pathname === "/calendar"
                  ? "bg-green-600 text-white"
                  : "hover:bg-gray-200 text-gray-800 dark:text-gray-300"
              }`}
            >
              Calendar
            </li>

            <li
              onClick={() => navigate("/analytics")}
              className={`p-2 rounded-lg cursor-pointer ${
                location.pathname === "/analytics"
                  ? "bg-green-600 text-white"
                  : "hover:bg-gray-200 text-gray-800 dark:text-gray-300"
              }`}
            >
              Analytics
            </li>

            <li
              onClick={() => navigate("/team")}
              className={`p-2 rounded-lg cursor-pointer ${
                location.pathname === "/team"
                  ? "bg-green-600 text-white"
                  : "hover:bg-gray-200 text-gray-800 dark:text-gray-300"
              }`}
            >
              Team
            </li>
          </ul>
        </div>

        {/* MAIN */}
        <div className="flex-1 pl-6 flex flex-col overflow-y-auto">
          {/* TOPBAR */}
          <div className="flex justify-between items-center mb-6 w-full">
            <button
              className="md:hidden"
              onClick={() => setOpenSidebar(true)}
            >
              <Menu />
            </button>

            <input
              placeholder="Search task"
              className="bg-gray-100 px-4 py-2 rounded-xl outline-none text-black"
            />

            <div className="flex gap-4 items-center">
              <button onClick={toggleTheme}>{dark ? "☀️" : "🌙"}</button>

              <button onClick={() => setOpenInbox(true)}>
                <Mail />
              </button>

              <NotificationBell />

              <div
                className="cursor-pointer"
                onClick={() => navigate("/profile")}
              >
                <UserAvatar />
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-green-600 text-white p-4 rounded-xl">
              <p>Total Projects</p>
              <h2 className="text-2xl">24</h2>
            </div>

            <div className="bg-gray-100 text-black p-4 rounded-xl">
              <p>Ended Projects</p>
              <h2 className="text-2xl">10</h2>
            </div>

            <div className="bg-gray-100 text-black p-4 rounded-xl">
              <p>Running Projects</p>
              <h2 className="text-2xl">12</h2>
            </div>

            <div className="bg-gray-100 text-black p-4 rounded-xl">
              <p>Pending Project</p>
              <h2 className="text-2xl">2</h2>
            </div>
          </div>

          {/* ANALYTICS + REMINDER */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="col-span-2 bg-gray-100 text-black p-4 rounded-xl">
              <p className="mb-4">Project Analytics</p>

              <div className="flex items-end justify-around h-[120px]">
                <div className="w-6 h-24 bg-gray-300 rounded"></div>
                <div className="w-6 h-32 bg-green-400 rounded"></div>
                <div className="w-6 h-20 bg-green-600 rounded"></div>
                <div className="w-6 h-36 bg-green-800 rounded"></div>
                <div className="w-6 h-28 bg-gray-300 rounded"></div>
              </div>
            </div>

            <div className="bg-gray-100 text-black p-4 rounded-xl">
              <p className="mb-2">Reminders</p>

              <h4 className="font-semibold">Meeting with Arc Company</h4>

              <p className="text-xs text-gray-500">
                Time: 02:00 pm - 04:00 pm
              </p>

              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-xl w-full hover:bg-green-700 transition">
                Start Meeting
              </button>
            </div>
          </div>

          {/* TEAM + PROGRESS + TIMER */}
          <div className="grid grid-cols-3 gap-4 pb-4">
            {/* TEAM */}
            <div className="col-span-2 bg-gray-100 text-black p-4 rounded-xl">
              <p className="mb-3">Team Collaboration</p>

              <div className="flex justify-between text-sm">
                <span>Alexandra</span>
                <span className="bg-gray-200 px-2 rounded">Completed</span>
              </div>

              <div className="flex justify-between text-sm mt-2">
                <span>Edwin</span>
                <span className="bg-gray-200 px-2 rounded">In Progress</span>
              </div>

              <div className="flex justify-between text-sm mt-2">
                <span>Isaac</span>
                <span className="bg-gray-200 px-2 rounded">Pending</span>
              </div>
            </div>

            {/* PROGRESS */}
            <div className="bg-gray-100 text-black p-4 rounded-xl flex flex-col items-center justify-center">
              <p>Project Progress</p>

              <div className="relative mt-4">
                <svg width="120" height="120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#e5e7eb"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#16a34a"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="314"
                    strokeDashoffset="185"
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.8s ease" }}
                  />
                </svg>

                <div className="absolute top-10 left-10 text-xl font-bold">
                  41%
                </div>
              </div>
            </div>

            {/* TIMER */}
            <div className="bg-green-600 text-white p-4 rounded-xl flex flex-col items-center justify-center h-[150px]">
              <p className="text-sm">Time Tracker</p>

              <div className="text-xl my-1">{formatTime()}</div>

              <div className="flex gap-4 mt-2">
                <button onClick={() => setRunning(true)}>
                  <Play size={18} />
                </button>

                <button onClick={() => setRunning(false)}>
                  <Pause size={18} />
                </button>

                <button
                  onClick={() => {
                    setRunning(false);
                    setTime(0);
                  }}
                >
                  <RotateCcw size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InboxPreview
        open={openInbox}
        onClose={() => setOpenInbox(false)}
      />

      <MobileSidebar
        open={openSidebar}
        onClose={() => setOpenSidebar(false)}
      />
    </div>
  );
}