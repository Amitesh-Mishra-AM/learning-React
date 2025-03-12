import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/VITLogoEmblem.png";
import UserImg from "../private/my_passport_size_photo.jpg"

function Hostel_page() {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedOption = location.state?.option || "No option selected";

    useEffect(() => {
        if (!location.state) {
            navigate("/"); // Redirect if no state is found
        }
    }, [location, navigate]);

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-[#2455a3] text-white flex items-center justify-between p-2">
                <div className="flex items-center">
                    <button className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div className="flex items-center">
                        <img src={Logo} alt="VIT Logo" className="w-[120px] h-[40px]" />
                        {/* <span className="font-bold text-lg">VIT<sup>®</sup> BHOPAL</span> */}
                    </div>
                </div>
                <div className="flex items-center">
                    <img className="h-[40px] rounded-[50%]" src={UserImg} alt="UserImg" />
                    <button className="px-2 py-1 rounded flex items-center">
                        22BAI10038 (STUDENT)
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Sidebar */}
            <div className="flex flex-1 overflow-hidden">
                <div className="w-12 bg-white shadow-md flex flex-col items-center py-2">
                    <div className="p-2 hover:bg-gray-200 rounded cursor-pointer">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg> */}
                        <div className="fa fa-phone-square iconSpace"></div>
                    </div>
                    <div className="p-2 hover:bg-gray-200 rounded cursor-pointer">
                        <div className="fa fa-briefcase iconSpace"></div>
                    </div>
                    <div className="p-2 hover:bg-gray-200 rounded cursor-pointer">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> */}
                        <div className="fa fa-info-circle iconSpace"></div>
                    </div>
                    <div className="p-2 hover:bg-gray-200 rounded cursor-pointer">
                        <div className="fa fa-paw iconSpace"></div>
                    </div>

                    <div className="p-2 hover:bg-gray-200 rounded cursor-pointer">
                        <div className="fa fa-graduation-cap iconSpace"></div>
                    </div>
                    <div className="p-2 hover:bg-gray-200 rounded cursor-pointer">
                        <div className="fa fa-bank iconSpace"></div>
                    </div>
                    <div className="p-2 hover:bg-gray-200 rounded cursor-pointer">
                        <div className="fa fa-space-shuttle iconSpace"></div>
                    </div>
                    <div className="p-2 hover:bg-gray-200 rounded cursor-pointer">
                        <div className="fa fa-certificate iconSpace"></div>
                    </div>
                    <div className="p-2 hover:bg-gray-200 rounded cursor-pointer">
                        <div className="fa fa-money iconSpace"></div>
                    </div>
                    <div className="p-2 hover:bg-gray-200 rounded cursor-pointer">
                        <div className="fa fa-home iconSpace"></div>
                    </div>
                    <div className="p-2 hover:bg-gray-200 rounded cursor-pointer">
                        <div className="fa fa-lock iconSpace"></div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4 overflow-auto">
                    {/* Navigation tabs */}
                    <div className="flex mb-2">
                        <button className="px-4 py-2 text-blue-600 border-b-2 border-transparent hover:border-blue-600">Personal Information</button>
                        <button className="px-4 py-2 text-blue-600 border-b-2 border-transparent hover:border-blue-600">Educational Information</button>
                        <button className="px-4 py-2 text-blue-600 border-b-2 border-transparent hover:border-blue-600">Family Information</button>
                        <button className="px-4 py-2 text-blue-600 border-b-2 border-transparent hover:border-blue-600">Proctor Details</button>
                        <button className="px-4 py-2 bg-[#337ab7] text-white rounded-t">Hostel Details</button>
                    </div>
                    {/* Hostel Details Section */}
                    <div className="bg-[#afbadc] p-2 font-bold text-center">
                        Hostel Details
                    </div>

                    {/* Table */}
                    <div className="bg-gray-200 w-full flex">
                        <div className="flex-1">
                            <div className="flex border-b border-gray-300">
                                <div className="bg-[#d4d3d3] w-1/3 p-3 font-semibold">Application Number</div>
                                <div className="bg-[#f2dede] w-2/3 p-3 ">2022070754</div>
                            </div>
                            <div className="flex border-b border-gray-300">
                                <div className="bg-[#d4d3d3] w-1/3 p-3 font-semibold">Register Number</div>
                                <div className=" bg-[#f2dede] w-2/3 p-3 ">22BAI10038</div>
                            </div>
                            <div className="flex border-b border-gray-300">
                                <div className="bg-[#d4d3d3] w-1/3 p-3 font-semibold">Block Name</div>
                                <div className="bg-[#f2dede] w-2/3 p-3">{selectedOption}</div>
                            </div>
                            <div className="flex border-b border-gray-300">
                                <div className="bg-[#d4d3d3] w-1/3 p-3 font-semibold">Room No.</div>
                                <div className="bg-[#f2dede] w-2/3 p-3 ">205</div>
                            </div>
                            <div className="flex border-b border-gray-300">
                                <div className="bg-[#d4d3d3] w-1/3 p-3 font-semibold">Bed Type</div>
                                <div className="bg-[#f2dede] w-2/3 p-3 ">4- BED -NACPB</div>
                            </div>
                            <div className="flex border-b border-gray-300">
                                <div className="bg-[#d4d3d3] w-1/3 p-3 font-semibold">Mess Information</div>
                                <div className="bg-[#f2dede] w-2/3 p-3">Mess Data Not Found</div>
                            </div>
                        </div>
                        <div className="p-2 bg-[#f2dede] flex items-start justify-center">
                            <div className="p-[7px] rounded-[4px]  bg-gray-300 border-gray-400 flex items-center justify-center overflow-hidden">
                                <img className="h-[130px] w-[120px] rounded-[14px]  border-2 border-[#3c8dbc]" src={UserImg} alt="UserImg" />
                            </div>
                        </div>
                    </div>

                    {/* Empty space at bottom */}
                    <div className="h-64 bg-gray-50 mt-4"></div>
                </div>
            </div>
        </div>
    );
};

export default Hostel_page;