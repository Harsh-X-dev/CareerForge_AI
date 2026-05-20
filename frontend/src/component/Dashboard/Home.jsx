import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Home = () => {

  const [selfDesc, setSelfDesc] =
    useState("");

  const [jobDesc, setJobDesc] =
    useState("");

  const resumeRef = useRef(null);

  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [selectedFileName,
    setSelectedFileName] =
    useState("");

  const [selectedFile,
    setSelectedFile] =
    useState(null);

  const handleGenrate = async () => {

    try {

      setLoading(true);

      const resume = selectedFile;

      if (
        !resume ||
        !selfDesc ||
        !jobDesc
      ) {

        setLoading(false);

        return alert(
          "Please fill all fields."
        );
      }

      const formData =
        new FormData();

      formData.append(
        "selfDescription",
        selfDesc
      );

      formData.append(
        "jobDescription",
        jobDesc
      );

      formData.append(
        "resume",
        resume
      );

      const res = await axios.post(
        "http://localhost:3000/api/interview/",
        formData,
        {
          withCredentials: true,
        }
      );

      navigate(
        `/dashboard/reports/${res.data.interviewReport._id}`
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  if (loading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div
      id="ai-generator-wrapper"
      className="w-full h-full flex items-center justify-center p-4"
    >

      <div
        id="ai-report-generator-component"
        className="w-full max-w-4xl bg-[#1e2330] border-2 border-dashed border-slate-600 rounded-3xl p-6 sm:p-8 flex flex-col shadow-2xl"
      >

        <div
          id="form-grid"
          className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 mb-8"
        >

          <div
            id="text-inputs-col"
            className="flex flex-col gap-6"
          >

            <div id="self-desc-wrapper">

              <label
                id="self-desc-label"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Self-Description
              </label>

              <textarea
                id="self-description"
                rows="4"
                placeholder="Enter your self-description here..."
                className="w-full px-4 py-3 bg-[#131722] border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none transition-all"
                value={selfDesc}
                onChange={(e) => {
                  setSelfDesc(
                    e.target.value
                  );
                }}
              ></textarea>

            </div>

            <div id="job-desc-wrapper">

              <label
                id="job-desc-label"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Job Description
              </label>

              <textarea
                id="job-description"
                rows="4"
                placeholder="Paste the job description here..."
                className="w-full px-4 py-3 bg-[#131722] border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none transition-all"
                value={jobDesc}
                onChange={(e) => {
                  setJobDesc(
                    e.target.value
                  );
                }}
              ></textarea>

            </div>

          </div>

          <div
            id="upload-col"
            className="flex flex-col h-full"
          >

            <label
              htmlFor="resume-file-input"
              id="resume-dropzone"

              onDrop={(e) => {

                e.preventDefault();

                const file =
                  e.dataTransfer.files[0];

                setSelectedFile(file);

                setSelectedFileName(
                  file.name
                );
              }}

              onDragOver={(e) => {
                e.preventDefault();
              }}

              className="flex-1 h-full border-2 border-dashed border-slate-600 bg-[#131722] rounded-2xl flex flex-col items-center justify-center p-8 hover:border-slate-500 hover:bg-[#1a202c] transition-colors cursor-pointer group min-h-[200px]"
            >

              {selectedFileName ? (

                <>
                  <span className="text-green-400 text-sm font-semibold">

                    {selectedFileName}

                  </span>

                  <span className="text-xs text-slate-400">

                    File selected successfully

                  </span>
                </>

              ) : (

                <>
                  <svg
                    id="upload-icon"
                    className="w-10 h-10 text-slate-400 group-hover:text-blue-400 transition-colors mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>

                  </svg>

                  <span
                    id="upload-text-main"
                    className="text-sm font-medium text-slate-300 text-center mb-1"
                  >

                    Click to upload or drag & drop

                  </span>

                  <span
                    id="upload-text-sub"
                    className="text-xs text-slate-500"
                  >

                    Only PDF files

                  </span>
                </>

              )}

              <input
                id="resume-file-input"
                type="file"
                accept=".pdf"
                className="hidden"
                ref={resumeRef}

                onChange={(e) => {

                  const file =
                    e.target.files[0];

                  setSelectedFile(file);

                  setSelectedFileName(
                    file.name
                  );
                }}
              />

            </label>

          </div>

        </div>

        <button
          id="generate-btn"
          type="button"
          className="w-full bg-black text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-900 border border-slate-800 transition-colors shadow-lg"
          onClick={handleGenrate}
        >

          <svg
            id="generate-icon"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            ></path>

          </svg>

          GENRATE REPORT

        </button>

      </div>

    </div>
  );
};