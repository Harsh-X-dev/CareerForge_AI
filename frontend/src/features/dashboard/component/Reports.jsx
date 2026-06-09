import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDash } from "../hooks/useDash";

export const Reports = () => {
  const [reports, setReports] = useState([]);
  const navigate = useNavigate();
  const { handleGetAllReports } = useDash();

  useEffect(() => {
    const getallReports = async () => {
      const data = await handleGetAllReports();
      setReports(data);
    };
    getallReports();
  }, [handleGetAllReports]);

  console.log(reports);
  return (
    <div
      id="reports-list-component"
      className="w-full h-full p-6 flex flex-col"
    >
      <div
        id="reports-scrollable-container"
        className="overflow-y-auto pr-2 focus:outline-none grid content-start gap-4"
      >
        {reports?.map((reports) => {
          return (
            <div
              key={reports?._id}
              id={reports?._id}
              className="bg-[#131722] border border-slate-700 rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] items-center gap-4 transition-all hover:border-slate-500"
            >
              <div id="report-info-group-1" className="grid gap-1">
                <h3
                  id="report-title-text-1"
                  className="text-xl font-bold text-slate-200 tracking-wide"
                >
                  {reports?.title}
                </h3>
                <span
                  id="report-date-text-1"
                  className="text-xs text-slate-500"
                >
                  {new Date(reports?.updatedAt).toLocaleString()}
                </span>
              </div>

              <div
                id="report-match-group-1"
                className="grid justify-start sm:justify-center text-left sm:text-center content-center"
              >
                <span
                  id="report-match-label-1"
                  className="text-xs font-medium text-slate-400 uppercase tracking-wider"
                >
                  Match
                </span>
                <span
                  id="report-match-percentage-1"
                  className="text-lg font-bold text-green-400"
                >
                  {reports.matchScore}%
                </span>
              </div>

              <div
                id="report-action-group-1"
                className="grid justify-stretch sm:justify-end"
              >
                <button
                  id="report-view-btn-1"
                  type="button"
                  onClick={() => {
                    navigate(`/reports/${reports?._id}`);
                  }}
                  className="px-6 py-2 bg-transparent border border-slate-500 text-slate-300 rounded-xl hover:bg-slate-700 hover:text-white transition-all text-sm font-semibold tracking-wider"
                >
                  VIEW
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
