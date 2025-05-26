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
    <div className="w-full mt-4 p-2 md:p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg text-white font-medium flex items-center text-sm sm:text-base text-center gap-4 sm:gap-0 sm:justify-between">
      <span className="flex-1">{collageName}</span>
      <span className="flex-1">{courseName}</span>
      <span className="flex-1">{CGPA.toFixed(2)}</span>
      <span className="flex-1">{passingYear}</span>
    </div>
  );
}

export default QualificationsCard;
