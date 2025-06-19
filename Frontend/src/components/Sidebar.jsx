import React from "react";
import { Car, ClipboardList, PlusSquare, Settings } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { id: "orders", label: "Orders", icon: ClipboardList },
  { id: "cars", label: "Cars", icon: Car },
  { id: "add", label: "Add Car", icon: PlusSquare },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar({ activeTab, setActiveTab }) {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const hndelLogout = () => {
    dispatch(logout(navigator))
  }
  ;

  return (
    <div className="fixed md:static bottom-0 w-full md:w-60 bg-white md:h-screen shadow-md z-10 flex md:flex-col justify-around md:justify-start">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`flex items-center gap-2 md:p-4 p-2 w-full md:w-auto justify-center md:justify-start ${
            activeTab === item.id
              ? "text-red-600 font-semibold"
              : "text-gray-600"
          } hover:bg-red-100 transition`}
        >
          <item.icon className="w-5 h-5" />
          <span className="hidden md:inline">{item.label}</span>
        </button>
      ))}
      <button
        onClick={hndelLogout}
        className={`flex items-center gap-2 md:p-4 p-2 w-full md:w-auto justify-center md:justify-start hover:bg-red-100 transition`}
      >
        <span className="hidden md:inline">Logout</span>
      </button>
    </div>
  );
}
