import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import EditableProfile from "../components/EditableProfile";

export default function Profile() {

  const navigate = useNavigate();

  return (
    <div className="bg-gray-200 min-h-screen p-6 flex items-center justify-center">

      <div className="bg-white w-[400px] rounded-3xl shadow-xl p-6">

        <button 
          onClick={() => navigate("/")}
          className="flex items-center gap-2 mb-6 text-green-600"
        >
          <ArrowLeft size={18}/>
          Back
        </button>

        <EditableProfile />

      </div>

    </div>
  );
}
