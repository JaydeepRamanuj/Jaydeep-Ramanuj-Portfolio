import React from "react";

type QualificationsCardType = {
  collageName: string;
  passingYear: string;
  CGPA: number;
  courseName: string;
};

function QualificationsCard({
  collageName,
  passingYear,
  CGPA,
  courseName,
}: QualificationsCardType) {
  return (
    <div className="mt-3 p-3 sm:p-6 rounded-md bg-slate-700/20 flex justify-between shadow-2xl text-gray-300 font-semibold text-center">
      <span className="flex-1">{collageName}</span>
      <span className="flex-1">{courseName}</span>
      <span className="flex-1">{CGPA}</span>
      <span className="flex-1">{passingYear}</span>
    </div>
  );
}

export default QualificationsCard;
