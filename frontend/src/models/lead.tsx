import React from "react";
import axios from "axios";
import { useEffect } from "react";

const LeadModel = (props: any) => {
  const [showModal, setShowModal] = React.useState(false);
  const [showFeedback, setShowFeedback] = React.useState(false);
  const [status, setStatus] = React.useState(props.lead.status);
  const [feedback, setFeedback] = React.useState(props.lead.feedback || "");

  const validateEmail = async (email: string) => {
    try {
      const response = await axios.post(`https://aristotleassignment-production.up.railway.app/email/`, {
        email,
      });
      return response.data;
    } catch (error) {
      console.error("Error validating email:", error);
    }
  };
  const handleAccept = async () => {
    try {
      const response = await axios.patch(`https://aristotleassignment-production.up.railway.app/leads/${props.lead._id}`, {
        status: 'Accepted',
      }).then(() => { window.location.href = '/' });
    } catch (error) {
      console.error("Error updating lead:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.patch(`https://aristotleassignment-production.up.railway.app/leads/${props.lead._id}`, {
        status: 'Rejected',
        feedback,
      }).then(() => {
        window.location.href = '/'
      });
    } catch (error) {
      console.error("Error updating lead:", error);
    }
  };

  useEffect(() => {
    validateEmail(props.lead.email).then((data) => {
      setStatus(data);
    });
  }, [props.lead.email]);

  return (
    <>
      <button
        className="bg-gray-600 text-white active:bg-gray-900 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        View More
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">

                  <figcaption className="flex items-center justify-center space-x-3">
                    <img alt="image" className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" />
                    <div className="font-medium dark:text-black text-left text-lg">
                      <div>{props.lead.firstName + " " + props.lead.lastName}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{props.lead.jobTitle} at {props.lead.company}</div>
                    </div>
                  </figcaption>
                  <button
                    className="bg-red-600 rounded-full text-sm hover:bg-white hover:text-black text-white  py-2 px-4  hover:border border-red-600"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
                {/*body*/}
                <div className="pt-5">
                  <div className="items-start space-x-4 pb-2">
                    <h1 className=" text-left ps-4  mb-2 text-sm font-bold text-gray-900 dark:text-gray-900 md:text-md lg:text-lg">WHY WE MATCHED YOU</h1>
                    <p className="text-left text-lg font-normal text-black dark:text-black">B2B startup founder</p>
                    <p className="text-left text-lg font-normal text-black dark:text-black">YC(W23) Batch</p>
                  </div>
                </div>
                <div className="relative p-6 flex-auto bg-gray-300 mx-10 rounded-lg">
                  <h1 className=" text-center ps-4  mb-2 text-sm font-bold text-gray-900 dark:text-gray-900 md:text-md lg:text-lg">SUGGESTED EMAIL PERSONALIZATION LINE</h1>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {props.lead.personalizationLine}
                  </p>
                </div>

                <div className="relative p-6 flex-auto ">
                  <h1 className=" text-start mb-2 text-sm font-bold text-gray-900 dark:text-gray-900 md:text-md lg:text-lg">REASON FOR CHOOSING THIS PERSONALIZATION</h1>
                  <p className="text-start my-4 text-slate-500 text-lg leading-relaxed">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  </p>
                </div>
                {showFeedback && (
                  <div className="relative px-6 flex-auto ">

                    <form onSubmit={handleSubmit}>
                      <div className="w-full mb-4  border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                        <     div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                          <label className="sr-only">Your Feedback</label>
                          <textarea id="comment" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a feedback" required
                            onChange={(e) => setFeedback(e.target.value)}></textarea>
                        </div>
                        <div className=" items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                          <button type="submit" className="bg-white text-md hover:bg-black hover:text-white text-black font-bold py-2 px-4 mx-3 rounded-full">
                            Add feedback
                          </button>
                          <button
                            type="submit"
                            className="bg-transparent text-md hover:bg-black hover:text-white text-white font-bold py-2 px-4 mx-3 rounded-full"
                            onClick={() => setShowFeedback(false)}>
                            Cancel
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
                {/*footer*/}
                {status ? (
                  <div>
                    {!showFeedback && (
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button className="bg-transparent border border-black text-lg hover:bg-black hover:text-white text-black font-bold py-2 px-4 mx-3 rounded-full"
                          type="button"
                          onClick={() => setShowFeedback(true)}
                        >
                          Not A Good Fit
                        </button>
                        <button className="bg-black text-lg hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-full hover:border border-black"
                          type="button"
                          onClick={handleAccept}>
                          All Good!
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <h1 className=" text-center ps-4 px-2 mb-2 text-sm font-bold text-red-600 dark:text-red-600 md:text-md lg:text-lg">You can't accept or reject this lead because provided Email in Invalid</h1>
                  </div>
                )
                }
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default LeadModel;