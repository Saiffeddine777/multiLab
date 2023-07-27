import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { fetchTeamMember } from "./TeamMember-api-slice";
import { useLocation } from "react-router-dom";

export default function TeamMember() {
  const location = useLocation();
  const id = location.state;
  console.log("oneTeamMember", id);
  const teamMember = useAppSelector((state) => state.oneTeamMember);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchTeamMember(id));
  }, [id, dispatch]);
  return (
    <div className="p-4 bg-blue-500 text-white mt-10 rounded-lg">
      <div className="bg-white p-4 rounded-lg shadow-md flex">
        <div className="flex-shrink-0 mr-6 bg-gray-200 rounded-lg w-1/3 flex items-center justify-center">
          <img
            src={`data:image/type;base64,${teamMember.teamMember.teamMemberPhotoUrl}`}
            alt="Team Member"
            className="w-50 h-50 rounded-lg"
          />
        </div>

        <div className="flex-grow bg-gray-200 rounded-lg w-1/2 flex flex-col items-center">
          <p className="text-blue-500 text-3xl font-semibold mb-2 greycliffcf-extrabold mt-5  ">
            {teamMember.teamMember.teamMember}
          </p>
          <p className="text-blue-500 mb-2 greycliffcf-bold">
            Working As:{" "}    
            <span className="text-gray-600 greycliffcf-bold">
              {teamMember.teamMember.teamMemberRole}
            </span>
          </p>
          <div className="w-2/3">
            <p className="text-blue-500 mb-2 greycliffcf-bold">
              Description:{" "}
              <span className="text-gray-600 greycliffcf-bold">
                {teamMember.teamMember.teamMemberDescription}
              </span>
            </p>
          </div>
          <p className="text-blue-500 mb-2 greycliffcf-bold">
            Company Email:{" "}
            <span className="greycliffcf-lightoblique text-gray-600">
              {teamMember.teamMember.teamMemberEmail}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
