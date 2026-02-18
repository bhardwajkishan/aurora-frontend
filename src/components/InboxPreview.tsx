import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function InboxPreview({ open, onClose }: Props) {

  if (!open) return null;

  return (
    <div className="fixed right-6 top-20 w-[320px] bg-white shadow-xl rounded-2xl p-4 z-50">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Inbox</h3>
        <button onClick={onClose}>
          <X size={18}/>
        </button>
      </div>

      {/* MAIL LIST */}
      <div className="space-y-3 text-sm">

        <div className="bg-gray-100 p-2 rounded-lg">
          <p className="font-medium">HR Team</p>
          <p className="text-gray-400 text-xs">
            Meeting rescheduled to 3PM
          </p>
        </div>

        <div className="bg-gray-100 p-2 rounded-lg">
          <p className="font-medium">Client</p>
          <p className="text-gray-400 text-xs">
            New requirements added
          </p>
        </div>

        <div className="bg-gray-100 p-2 rounded-lg">
          <p className="font-medium">Project Manager</p>
          <p className="text-gray-400 text-xs">
            Deadline approaching
          </p>
        </div>

      </div>

    </div>
  );
}
