const absencesData = require("../json_files/absences.json");
const membersData = require("../json_files/members.json");

const getAllAbsences = (req, res) => {
  const populatedAbsenceData = absencesData.payload.map((absence) => {
    //absences'in users idsinden members'i bulucaz.
    const memberInfo = membersData.payload.find(
      (member) => member.userId === absence.userId
    );
    const period = absence.startDate? `${absence.startDate} - ${absence.endDate}` : '-'
    const status = absence.confirmedAt
      ? "Confirmed"
      : absence.rejectedAt
      ? "Rejected"
      : "Requested";
    return {
      ...absence,
      userName: memberInfo.name,
      status, period
    };
  
  });
  res.json({
    status: "success",
    payload: populatedAbsenceData
  });
};

module.exports = {
  getAllAbsences,
};
