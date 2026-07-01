import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { useAuth } from "../../context/AuthContext";
import { UserIcon, SettingsIcon, LogoutIcon } from "./Icons";

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setIsOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const getInitials = (name) => {
    return name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase() || "U";
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Avatar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-sm font-semibold">
          {getInitials(user?.name)}
        </div>
        <div className="hidden md:block text-left">
          <p className="text-sm font-medium text-white">{user?.name}</p>
          <p className="text-xs text-slate-400 capitalize">{user?.role?.toLowerCase()}</p>
        </div>
        <svg
          className={`w-4 h-4 text-slate-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && createPortal(
        <div 
          className="profile-dropdown-portal" 
          style={{ zIndex: 2147483647 }}
        >
          <div className="absolute right-6 top-16 w-64 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl animate-fade-in">
            {/* User Info Header */}
            <div className="p-4 border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-semibold">
                  {getInitials(user?.name)}
                </div>
                <div>
                  <p className="font-medium text-white">{user?.name}</p>
                  <p className="text-sm text-slate-400">{user?.email}</p>
                  <p className="text-xs text-indigo-400 capitalize">{user?.role?.toLowerCase()}</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-2">
              <button
                onClick={() => handleNavigation("/account")}
                className="w-full flex items-center gap-3 px-3 py-2 text-left text-slate-300 hover:bg-slate-800/50 hover:text-white rounded-lg transition-colors"
              >
                <UserIcon className="w-4 h-4" />
                My Account
              </button>
              <button
                onClick={() => handleNavigation("/settings")}
                className="w-full flex items-center gap-3 px-3 py-2 text-left text-slate-300 hover:bg-slate-800/50 hover:text-white rounded-lg transition-colors"
              >
                <SettingsIcon className="w-4 h-4" />
                Settings
              </button>
              <hr className="my-2 border-slate-700" />
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2 text-left text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg transition-colors"
              >
                <LogoutIcon className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}