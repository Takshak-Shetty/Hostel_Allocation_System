import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import AppLayout from "../components/layout/AppLayout";
import Card from "../components/common/Card";
import { UserIcon, EditIcon, CheckIcon } from "../components/common/Icons";
import { apiRequest } from "../services/apiClient";

export default function AccountPage() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    bio: user?.bio || "",
  });
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const endpoint = user?.role === "ADMIN" ? "/admin/profile" : "/student/profile";
      await apiRequest(endpoint, {
        method: "PUT",
        body: formData,
        auth: true,
      });
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      alert(error.message || "Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  const getInitials = (name) => {
    return name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase() || "U";
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <UserIcon className="w-8 h-8" />
            My Account
          </h1>
          <p className="text-slate-400 mt-1">
            Manage your profile information and preferences
          </p>
        </div>

        {/* Profile Card */}
        <Card
          title="Profile Information"
          subtitle="Update your personal details"
          icon={<UserIcon className="w-5 h-5" />}
        >
          <div className="space-y-6">
            {/* Avatar Section */}
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                {getInitials(formData.name)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{formData.name}</h3>
                <p className="text-slate-400">{formData.email}</p>
                <p className="text-sm text-indigo-400 capitalize">{user?.role?.toLowerCase()}</p>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-4">
              <div className="form-row">
                <div>
                  <label className="form-label">Full Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="form-input disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="form-label">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="form-input disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="form-label">Bio</label>
                <textarea
                  name="bio"
                  rows={3}
                  value={formData.bio}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="form-input disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell us about yourself..."
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 justify-end">
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="btn-primary flex items-center gap-2"
                  >
                    <EditIcon className="w-4 h-4" />
                    Edit Profile
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setIsEditing(false);
                        setFormData({
                          name: user?.name || "",
                          email: user?.email || "",
                          bio: user?.bio || "",
                        });
                      }}
                      className="btn-secondary"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      disabled={saving}
                      className="btn-primary flex items-center gap-2"
                    >
                      {saving ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <CheckIcon className="w-4 h-4" />
                          Save Changes
                        </>
                      )}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Account Details */}
        <Card
          title="Account Details"
          subtitle="View your account information"
          icon={<UserIcon className="w-5 h-5" />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="form-label">User ID</label>
              <div className="px-4 py-3 bg-slate-800/30 border border-slate-600 rounded-xl text-slate-300">
                {user?.id || "N/A"}
              </div>
            </div>
            <div>
              <label className="form-label">Role</label>
              <div className="px-4 py-3 bg-slate-800/30 border border-slate-600 rounded-xl text-slate-300 capitalize">
                {user?.role?.toLowerCase() || "N/A"}
              </div>
            </div>
            <div>
              <label className="form-label">Hostel ID</label>
              <div className="px-4 py-3 bg-slate-800/30 border border-slate-600 rounded-xl text-slate-300">
                {user?.hostelId || "Not Assigned"}
              </div>
            </div>
            <div>
              <label className="form-label">Account Created</label>
              <div className="px-4 py-3 bg-slate-800/30 border border-slate-600 rounded-xl text-slate-300">
                {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}