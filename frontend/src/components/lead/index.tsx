import { useState, useEffect } from "react";
import axios from "axios";
import LeadModel from "../../models/lead";
// import {LeadData} from "../../../types/leadData";
export interface LeadData {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  personalizationLine: string;
  status: string;
  feedback?: string;
}

const Lead = () => {
  const [leads, setLeads] = useState<LeadData[]>([]);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await axios.get<LeadData[]>(`https://aristotleassignment-production.up.railway.app/leads/`);
        setLeads(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLeads();
  }, []);

  const handleRowClick = (row: any) => {
    console.log(row);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
      <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
        <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Company
            </th>
            <th scope="col" className="px-6 py-3">
              Designation
            </th>
            <th scope="col" className="px-6 py-3">
              Personalization Line
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500 " onClick={() => handleRowClick(lead._id)}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {lead?.firstName + " " + lead?.lastName}
              </th>
              <td className="px-6 py-4">
                {lead?.company}
              </td>
              <td className="px-6 py-4">
                {lead?.jobTitle}
              </td>
              <td className="px-6 py-4">
                {lead?.personalizationLine}
              </td>
              <td className="px-6 py-4 ">
                <LeadModel lead={lead} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lead;
