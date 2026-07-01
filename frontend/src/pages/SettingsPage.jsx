import { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import Card from "../components/common/Card";
import { SettingsIcon, CheckIcon, NotificationIcon } from "../components/common/Icons";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: false,
    complaintUpdates: true,
    allocationUpdates: true,
    systemMaintenance: false,
    weeklyReports: true,
    theme: "dark",
    language: "en",
  });
  const [saving, setSaving] = useState(false);

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert("Settings saved successfully!");
    } catch (error) {
      alert("Failed to save settings");
    } finally {
      setSaving(false);
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <SettingsIcon className="w-8 h-8" />
            Settings
          </h1>
          <p className="text-slate-400 mt-1">
            Customize your experience and notification preferences
          </p>
        </div>

        {/* Notification Settings */}
        <Card
          title="Notification Preferences"
          subtitle="Choose how you want to be notified"
          icon={<NotificationIcon className="w-5 h-5" />}
        >
          <div className="space-y-6">
            {/* Notification Methods */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Notification Methods</h3>
              <div className="space-y-4">
                <ToggleItem
                  label="Email Notifications"
                  description="Receive notifications via email"
                  checked={settings.emailNotifications}
                  onChange={() => handleToggle("emailNotifications")}
                />
                <ToggleItem
                  label="Push Notifications"
                  description="Receive browser push notifications"
                  checked={settings.pushNotifications}
                  onChange={() => handleToggle("pushNotifications")}
                />
                <ToggleItem
                  label="SMS Notifications"
                  description="Receive notifications via SMS"
                  checked={settings.smsNotifications}
                  onChange={() => handleToggle("smsNotifications")}
                />
              </div>
            </div>

            {/* Notification Types */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Notification Types</h3>
              <div className="space-y-4">
                <ToggleItem
                  label="Complaint Updates"
                  description="Get notified about complaint status changes"
                  checked={settings.complaintUpdates}
                  onChange={() => handleToggle("complaintUpdates")}
                />
                <ToggleItem
                  label="Allocation Updates"
                  description="Receive room allocation notifications"
                  checked={settings.allocationUpdates}
                  onChange={() => handleToggle("allocationUpdates")}
                />
                <ToggleItem
                  label="System Maintenance"
                  description="Get notified about system maintenance"
                  checked={settings.systemMaintenance}
                  onChange={() => handleToggle("systemMaintenance")}
                />
                <ToggleItem
                  label="Weekly Reports"
                  description="Receive weekly summary reports"
                  checked={settings.weeklyReports}
                  onChange={() => handleToggle("weeklyReports")}
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Appearance Settings */}
        <Card
          title="Appearance & Language"
          subtitle="Customize your interface preferences"
          icon={<SettingsIcon className="w-5 h-5" />}
        >
          <div className="space-y-6">
            <div className="form-row">
              <div>
                <label className="form-label">Theme</label>
                <select
                  value={settings.theme}
                  onChange={(e) => handleChange("theme", e.target.value)}
                  className="form-select"
                >
                  <option value="dark">Dark Theme</option>
                  <option value="light">Light Theme</option>
                  <option value="auto">Auto (System)</option>
                </select>
              </div>
              <div>
                <label className="form-label">Language</label>
                <select
                  value={settings.language}
                  onChange={(e) => handleChange("language", e.target.value)}
                  className="form-select"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
            </div>
          </div>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
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
                Save Settings
              </>
            )}
          </button>
        </div>
      </div>
    </AppLayout>
  );
}

function ToggleItem({ label, description, checked, onChange }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
      <div>
        <h4 className="font-medium text-white">{label}</h4>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
      <button
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          checked ? "bg-indigo-600" : "bg-slate-600"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}