import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDash } from "../hooks/useDash";
import { Briefcase, ArrowRight } from "lucide-react";

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
  }, []);

  return (
    <div
      id="reports-list-component"
      className="w-full h-full p-8 flex flex-col bg-[#f8fafc] overflow-y-auto"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">All Reports</h2>
          <p className="text-sm text-gray-500">View and access all your generated interview reports.</p>
        </div>
        
      </div>

      <div
        id="reports-scrollable-container"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 pb-8"
      >
        {reports?.map((report) => {
          return (
            <div
              key={report?._id}
              id={report?._id}
              className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {report?.title || "Role Title Missing"}
                    </h3>
                    <span className="text-xs text-gray-500">
                      {new Date(report?.updatedAt).toLocaleString("en-US", {
                         month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute:"2-digit"
                      })}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 block">
                    Match Score
                 </span>
                 <span className="text-3xl font-extrabold text-green-500">
                    {report?.matchScore || 0}%
                 </span>
              </div>

              <div className="mt-auto">
                <button
                  onClick={() => navigate(`/reports/${report?._id}`)}
                  className="w-max px-5 py-2.5 bg-indigo-50 text-indigo-600 rounded-lg font-semibold text-sm hover:bg-indigo-100 transition-colors flex items-center gap-2"
                >
                  View Report
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};