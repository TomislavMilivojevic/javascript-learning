const createJob = async (req, res) => {
  res.send("Create Job");
};
const deleteJob = async (req, res) => {
  res.send("Delete Job");
};
const getAllJobs = async (req, res) => {
  res.send("Get all jobs");
};
const updateJob = async (req, res) => {
  res.send("Update job");
};
const showStats = async (req, res) => {
  res.send("Show stats");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
