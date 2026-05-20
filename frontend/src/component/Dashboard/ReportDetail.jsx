// import React from 'react'
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

// import { useNavigate } from "react-router-dom";
// import { Reports } from "./Reports";

function ReportDetail() {
  const { id } = useParams();
  const [reportData, setReportData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getReportDetail = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `http://localhost:3000/api/interview/report/${id}`,
          {
            withCredentials: true,
          },
        );

        setReportData(res.data.interviewReport);
        console.log(res.data.interviewReport);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getReportDetail();
  }, [id]);
  console.log(reportData.behavioralQuestions);

  const handleGenrateResume = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        `http://localhost:3000/api/interview/resume/pdf/${reportData._id}`,
        {},
        {
          withCredentials: true,

          responseType: "blob",
        },
      );

      const file = new Blob([res.data], {
        type: "application/pdf",
      });

      const fileURL = window.URL.createObjectURL(file);

      const link = document.createElement("a");

      link.href = fileURL;

      link.download = "resume.pdf";

      document.body.appendChild(link);

      link.click();

      link.remove();

      window.URL.revokeObjectURL(fileURL);
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
      id="report-detail-body"
      className="bg-gray-900 h-screen flex font-['Inter',_sans-serif] overflow-hidden text-slate-200"
    >
      <main
        id="report-main-content"
        className="flex-1 flex flex-col h-full overflow-y-auto p-4 sm:p-8 relative"
      >
        <div
          id="report-container"
          className="w-full max-w-5xl mx-auto flex flex-col gap-6"
        >
          <header
            id="report-header"
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#1e2330] border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-lg"
          >
            <div id="header-text-group">
              <h1
                id="report-title"
                className="text-3xl font-bold text-white tracking-tight"
              >
                {reportData.title}
              </h1>
              <p id="report-date" className="text-sm text-slate-500 mt-1"></p>
              Generated on{" "}
              {new Date(reportData.updatedAt).toLocaleString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>

            <div id="header-actions-group" className="flex items-center gap-4">
              <button
                id="download-pdf-btn"
                className="px-5 py-2.5 bg-transparent border border-slate-600 text-slate-300 rounded-xl hover:bg-slate-700 hover:text-white transition-all text-sm font-semibold flex items-center gap-2"
                onClick={handleGenrateResume}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Generate PDF
              </button>
              <div
                id="match-score-badge"
                className="flex flex-col items-center justify-center bg-green-500/10 border border-green-500/30 px-6 py-2 rounded-xl"
              >
                <span
                  id="score-label"
                  className="text-xs font-medium text-green-400/80 uppercase tracking-wider mb-0.5"
                >
                  Match Score
                </span>
                <span
                  id="score-value"
                  className="text-2xl font-bold text-green-400"
                >
                  {reportData.matchScore}%
                </span>
              </div>
            </div>
          </header>

          <div
            id="content-grid"
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            <div id="left-column" className="lg:col-span-2 flex flex-col gap-6">
              <section
                id="tech-questions-section"
                className="bg-[#1e2330] border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-lg"
              >
                <h2
                  id="tech-q-heading"
                  className="text-xl font-bold text-white mb-6 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  Technical Questions
                </h2>

                <div id="tech-q-list" className="space-y-6">
                  {reportData.technicalQuestions?.map((question, index) => (
                    <div
                      id="tech-q-1"
                      key={crypto.randomUUID()}
                      className="bg-[#131722] border border-slate-700 rounded-2xl p-5"
                    >
                      <p
                        id="tq1-text"
                        className="text-lg font-medium text-slate-200 mb-2"
                      >
                        {index + 1}. {question.question}
                      </p>
                      <p
                        id="tq1-intent"
                        className="text-xs text-slate-500 italic mb-4"
                      >
                        Intent: {question.intention}
                      </p>
                      <div
                        id="tq1-answer-box"
                        className="bg-blue-500/5 border-l-4 border-blue-500 p-4 rounded-r-lg"
                      >
                        <span className="block text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
                          Suggested Answer
                        </span>
                        <p
                          id="tq1-answer-text"
                          className="text-sm text-slate-300 leading-relaxed"
                        >
                          {question.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section
                id="behavioral-questions-section"
                className="bg-[#1e2330] border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-lg"
              >
                <h2
                  id="behavioral-q-heading"
                  className="text-xl font-bold text-white mb-6 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Behavioral Questions
                </h2>
                {reportData.behavioralQuestions?.map((question, index) => (
                  <div
                    id="beh-q-list"
                    key={crypto.randomUUID()}
                    className="space-y-6"
                  >
                    <div
                      id="beh-q-1"
                      className="bg-[#131722] border border-slate-700 rounded-2xl p-5"
                    >
                      <p
                        id="bq1-text"
                        className="text-lg font-medium text-slate-200 mb-2"
                      >
                        {index + 1}. {question.question}
                      </p>
                      <p
                        id="bq1-intent"
                        className="text-xs text-slate-500 italic mb-4"
                      >
                        Intent: {question.intention}
                      </p>
                      <div
                        id="bq1-answer-box"
                        className="mt-4 bg-purple-500/5 border-l-4 border-purple-500 p-4 rounded-r-lg"
                      >
                        <span className="block text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">
                          Approach
                        </span>
                        <p
                          id="bq1-answer-text"
                          className="text-sm text-slate-300 leading-relaxed"
                        >
                          {question.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            </div>

            <div id="right-column" className="flex flex-col gap-6">
              <section
                id="skill-gaps-section"
                className="bg-[#1e2330] border border-slate-700 rounded-3xl p-6 shadow-lg"
              >
                <h2
                  id="gaps-heading"
                  className="text-lg font-bold text-white mb-4 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  Identified Skill Gaps
                </h2>

                <div id="gaps-list" className="flex flex-col gap-3">
                  {reportData.skillGaps?.map((gap, index) => (
                    <div
                      key={crypto.randomUUID()}
                      id={`gap-${index + 1}`}
                      className="bg-[#131722] border border-orange-500/30 rounded-xl p-3 flex items-start gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-orange-400 mt-1.5"></div>
                      <div>
                        <p
                          id="gap-text-1"
                          className="text-sm font-medium text-slate-200"
                        >
                          {gap.skill}
                        </p>
                        <span
                          id="gap-severity-1"
                          className="text-xs text-orange-400 font-semibold"
                        >
                          {gap.severity} Priority
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section
                id="prep-plan-section"
                className="bg-[#1e2330] border border-slate-700 rounded-3xl p-6 shadow-lg flex-1"
              >
                <h2
                  id="plan-heading"
                  className="text-lg font-bold text-white mb-6 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                  Action Plan
                </h2>

                <div
                  id="timeline-container"
                  className="relative border-l-2 border-slate-700 ml-3 space-y-8"
                >
                  {reportData.preparationPlan?.map((day) => (
                    <div
                      id="day-1"
                      key={crypto.randomUUID()}
                      className="relative pl-6"
                    >
                      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#131722] border-2 border-green-500"></div>
                      <h3
                        id="day-1-title"
                        className="text-sm font-bold text-green-400 mb-1"
                      >
                        Day {day.day}: {day.focus}
                      </h3>
                      <ul
                        id="day-1-tasks"
                        className="list-disc list-outside ml-4 text-xs text-slate-400 space-y-1"
                      >
                        {day.tasks?.map((task) => (
                          <li key={crypto.randomUUID()}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ReportDetail;
