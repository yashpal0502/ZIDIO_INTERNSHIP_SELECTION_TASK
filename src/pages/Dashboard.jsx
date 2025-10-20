import {
  PlusIcon,
  UploadCloudIcon,
  Sparkles,
  FilePenLineIcon,
  TrashIcon,
  PencilIcon,
  XIcon,
  UploadCloud,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { dummyResumeData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];
  const [allResumes, setAllResumes] = useState([]);
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState(null);
  const [editResumeId, setEditResumeId] = useState("");
  const navigate = useNavigate();

  const loadAllResumes = async () => {
    setAllResumes(dummyResumeData);
  };
  const createResume = async (e) => {
    e.preventDefault();
    setShowCreateResume(false);
    navigate(`/app/builder/res123`);
  };
  const uploadResume = async (e) => {
    e.preventDefault();
    if (!title || !resume) {
      alert("Please provide both a title and a resume file");
      return;
    }
    // Here you would typically upload the file to your server
    // For now, we'll just create a new resume entry
    const newResume = {
      _id: 'res' + Date.now(), // Generate a temporary ID
      title: title,
      updatedAt: new Date().toISOString()
    };
    setAllResumes(prev => [...prev, newResume]);
    setShowUploadResume(false);
    setTitle("");
    setResume(null);
    navigate(`/app/builder/${newResume._id}`);
  };

  const editTitle = async (e) => {
    e.preventDefault();
    if (!editResumeId) return;
    // Update the title for the selected resume immutably
    setAllResumes((prev) =>
      prev.map((r) => (r._id === editResumeId ? { ...r, title } : r))
    );
    // clear modal state
    setEditResumeId("");
    setTitle("");
  };

  const deleteResume = async (resumeId) => {
    const confirm = window.confirm(
      "Are you sure, you want to delete this resume?"
    );
    if (confirm) {
      setAllResumes((prev) => prev.filter((resume) => resume._id !== resumeId));
    }
  };

  useEffect(() => {
    loadAllResumes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-slate-200 py-12 px-4">
      <div className="max-w-7xl mx-auto backdrop-blur-xl bg-white/40 rounded-3xl shadow-2xl p-10 border border-white/60">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="flex items-center justify-center gap-2 text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
            Welcome, Yashpal <Sparkles className="size-6 text-purple-500" />
          </h2>
          <p className="text-slate-600 mt-2 text-center text-sm sm:text-base">
            Let’s build or upload your resume and take the next step in your
            career.
          </p>
        </div>

        {/* Action Cards */}
        <div className="flex gap-6 justify-center flex-wrap">
          {/* Create Resume */}
          <button
            onClick={() => setShowCreateResume(true)}
            className="group relative w-full sm:max-w-56 h-56 flex flex-col items-center justify-center rounded-2xl 
            bg-white/40 backdrop-blur-lg border border-white/60 shadow-md hover:shadow-xl 
            transition-all duration-300 hover:scale-[1.03] hover:border-indigo-400"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-300/20 to-purple-300/20 opacity-0 group-hover:opacity-100 transition-all"></div>
            <PlusIcon className="size-12 p-3 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl shadow-lg" />
            <h3 className="mt-4 text-lg font-semibold text-slate-800 group-hover:text-indigo-600 transition-all">
              Create New Resume
            </h3>
            <p className="text-xs text-slate-500 mt-1 opacity-80">
              Start fresh with modern templates
            </p>
          </button>

          {/* Upload Resume */}
          <button
            onClick={() => setShowUploadResume(true)}
            className="group relative w-full sm:max-w-56 h-56 flex flex-col items-center justify-center rounded-2xl 
            bg-white/40 backdrop-blur-lg border border-white/60 shadow-md hover:shadow-xl 
            transition-all duration-300 hover:scale-[1.03] hover:border-purple-400"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-300/20 to-pink-300/20 opacity-0 group-hover:opacity-100 transition-all"></div>
            <UploadCloudIcon className="size-12 p-3 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-2xl shadow-lg" />
            <h3 className="mt-4 text-lg font-semibold text-slate-800 group-hover:text-purple-600 transition-all">
              Upload Existing Resume
            </h3>
            <p className="text-xs text-slate-500 mt-1 opacity-80">
              Import your current resume to edit
            </p>
          </button>
        </div>

        <hr className="border-slate-300/50 my-8 w-full sm:w-[320px] mx-auto" />

        {/* Resume Cards */}
        <div className="grid grid-cols-2 sm:flex flex-wrap gap-5 justify-center">
          {allResumes.map((resume, index) => {
            const baseColor = colors[index % colors.length];
            return (
              <button
                onClick={() => navigate(`/app/builder/${resume._id}`)}
                key={index}
                className="group relative w-full sm:max-w-40 h-48 flex flex-col items-center justify-center rounded-2xl 
                bg-white/30 backdrop-blur-md border border-white/50 shadow-md hover:shadow-lg hover:scale-[1.03]
                transition-all duration-300 cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}25)`,
                  borderColor: baseColor + "40",
                }}
              >
                <FilePenLineIcon
                  className="size-8 group-hover:scale-105 transition-all"
                  style={{ color: baseColor }}
                />
                <p
                  className="text-sm font-medium text-center mt-2"
                  style={{ color: baseColor }}
                >
                  {resume.title}
                </p>
                <p className="absolute bottom-2 text-[11px] text-slate-500">
                  Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                </p>

                {/* Hover Edit/Delete */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="hidden absolute top-1 right-1 group-hover:flex items-center "
                >
                  <TrashIcon
                    onClick={() => deleteResume(resume._id)}
                    className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"
                  />
                  <PencilIcon
                    onClick={() => {
                      setEditResumeId(resume._id);
                      setTitle(resume.title);
                    }}
                    className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Modals */}
        {(showCreateResume || showUploadResume || editResumeId) && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-10 flex items-center justify-center px-4">
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white/60 backdrop-blur-xl border border-white/50 shadow-2xl rounded-2xl p-8 w-full max-w-sm"
            >
              <XIcon
                onClick={() => {
                  setShowCreateResume(false);
                  setShowUploadResume(false);
                  setEditResumeId("");
                  setTitle("");
                }}
                className="absolute top-4 right-4 hover:text-slate-600 cursor-pointer transition"
              />

              {showCreateResume && (
                <form onSubmit={createResume}>
                  <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                    Create a Resume
                  </h2>
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    placeholder="Enter resume title"
                    className="w-full px-4 py-2 mb-4 rounded-xl bg-white/70 focus:ring-2 focus:ring-indigo-400 outline-none transition"
                    required
                  />
                  <button className="w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:opacity-90 transition">
                    Create Resume
                  </button>
                </form>
              )}

              {showUploadResume && (
                <form onSubmit={uploadResume}>
                  <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Upload Resume
                  </h2>
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    placeholder="Enter resume title"
                    className="w-full px-4 py-2 mb-4 rounded-xl bg-white/70 focus:ring-2 focus:ring-purple-400 outline-none transition"
                    required
                  />
                  <label
                    htmlFor="resume-input"
                    className="block text-sm text-slate-700 mb-2"
                  >
                    Select Resume File
                  </label>
                  <label 
                    htmlFor="resume-input"
                    className="flex flex-col items-center justify-center gap-2 border border-dashed border-slate-400/60 rounded-xl p-6 my-3 hover:border-purple-500 hover:text-purple-700 transition cursor-pointer"
                  >
                    {resume ? (
                      <p className="text-purple-600">{resume.name}</p>
                    ) : (
                      <>
                        <UploadCloud className="size-10 stroke-1 opacity-80" />
                        <p>Upload Resume</p>
                      </>
                    )}
                  </label>
                  <input
                    onChange={(e) => setResume(e.target.files[0])}
                    type="file"
                    id="resume-input"
                    accept=".pdf"
                    hidden
                  />
                  <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:opacity-90 transition">
                    Upload Resume
                  </button>
                </form>
              )}

              {editResumeId && (
                <form onSubmit={editTitle}>
                  <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                    Edit Resume Title
                  </h2>
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    placeholder="Enter new title"
                    className="w-full px-4 py-2 mb-4 rounded-xl bg-white/70 focus:ring-2 focus:ring-indigo-400 outline-none transition"
                    required
                  />
                  <button className="w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:opacity-90 transition">
                    Update
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
