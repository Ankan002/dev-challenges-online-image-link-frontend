import React from 'react';
import { BarLoader } from "react-spinners";

const Uploading = () => {
    return (
        <div className="lg:w-1/3 md:w-2/3 w-full p-5 bg-secondary-light rounded-md shadow-[0_1px_12px_2px_rgba(0,0,0,0.1)] flex flex-col">
            <h1 className="mb-3 text-xl">
                Uploading...
            </h1>

            <BarLoader width="100%" height={5} color="#2F80ED" cssOverride={{backgroundColor: "#F2F2F2"}} />
        </div>
    );
};

export default Uploading;
