import { apiClient } from "../../../api/apiClient";
export const getAllReports = async () => {
  try {
    const res = await apiClient.get("/interview");
    return res.data.interviewReports;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const genrateReport = async (data) => {
  try {
    const res = await apiClient.post("/interview", data);
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getReportDetailById = async (id) => {
  try {
    const res = await apiClient.get(`/interview/report/${id}`);
    return res.data.interviewReport;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const genrateResume = async (id) => {
  try {
    const res = await apiClient.post(
      `interview/resume/pdf/${id}`,
      {},
      {
        responseType: "blob",
      },
    );
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
