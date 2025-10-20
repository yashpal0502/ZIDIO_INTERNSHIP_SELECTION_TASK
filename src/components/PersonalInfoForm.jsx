import {
  BriefcaseBusiness,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  User,
  UserIcon,
} from "lucide-react";
import React from "react";

const PersonalInfoForm = ({
  data,
  onChange,
  removeBackground,
  setRemoveBackground,
}) => {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  const fields = [
    { key: "full_name", label: "Full Name", icon: User, type: "text", required: true },
    { key: "email", label: "Email Address", icon: Mail, type: "email", required: true },
    { key: "phone", label: "Phone Number", icon: Phone, type: "tel" },
    { key: "location", label: "Location", icon: MapPin, type: "text" },
    { key: "profession", label: "Profession", icon: BriefcaseBusiness, type: "text" },
    { key: "linkedin", label: "LinkedIn Profile", icon: Linkedin, type: "url" },
    { key: "website", label: "Personal Website", icon: Globe, type: "url" },
  ];

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 tracking-tight mb-2">
        Personal Information
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        Fill in your personal details to make your resume stand out.
      </p>

      {/* Image Upload Section */}
      <div className="flex items-center gap-6 mb-6">
        <label className="cursor-pointer flex-shrink-0">
          {data.image ? (
            <img
              src={typeof data.image === "string" ? data.image : URL.createObjectURL(data.image)}
              alt="user-image"
              className="w-16 h-16 rounded-full object-cover ring-2 ring-indigo-400 hover:ring-indigo-500 transition-all duration-300 shadow-sm"
            />
          ) : (
            <div className="w-16 h-16 flex flex-col items-center justify-center text-indigo-500 rounded-full border-2 border-dashed border-indigo-300 hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300 shadow-sm">
              <UserIcon className="size-6" />
              <span className="text-[10px] mt-1 font-medium text-indigo-600 text-center">
                Upload
              </span>
            </div>
          )}
          <input
            type="file"
            accept="image/jpeg, image/png"
            className="hidden"
            onChange={(e) => handleChange("image", e.target.files[0])}
          />
        </label>

        {typeof data.image === "object" && (
          <div className="flex flex-col gap-2 text-sm mt-2">
            <p className="text-gray-700 font-medium">Remove Background</p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={removeBackground}
                onChange={() => setRemoveBackground((prev) => !prev)}
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-indigo-500 transition-colors duration-300"></div>
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out peer-checked:translate-x-5"></span>
            </label>
          </div>
        )}
      </div>

      {/* Form Fields */}
      <div className="space-y-5">
        {fields.map((field) => {
          const Icon = field.icon;
          return (
            <div key={field.key} className="space-y-1">
              <label className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                <Icon className="size-4 text-indigo-500" />
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </label>
              <input
                type={field.type}
                value={data[field.key] || ""}
                onChange={(e) => handleChange(field.key, e.target.value)}
                placeholder={`Enter your ${field.label.toLowerCase()}`}
                required={field.required}
                className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white/70 backdrop-blur-sm text-gray-800 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300 shadow-sm hover:shadow-md"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalInfoForm;
