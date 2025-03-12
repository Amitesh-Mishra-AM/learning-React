import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Block_page() {
    const [selectedOption, setSelectedOption] = useState("");
    const navigate = useNavigate();

    const handleSelection = (option) => {
        setSelectedOption(option);
        navigate("/Hostel_page", { state: { option } }); // Corrected
    };

    return (
        <>
            <div className="flex flex-col justify-center">
                <h1 className="flex justify-center">Choose a block</h1>
                <button className="cursor-pointer" onClick={() => handleSelection("Large Dining-2 (BOYS HOSTEL)")}>
                    Large Dining-2 (BOYS HOSTEL)
                </button>
                <button className="cursor-pointer" onClick={() => handleSelection("MENS HOSTEL BLOCK-2 (BOYS HOSTEL - Block )")}>
                    MENS HOSTEL BLOCK-2 (BOYS HOSTEL - Block )
                </button>
            </div>
        </>
    );
}

export default Block_page;
