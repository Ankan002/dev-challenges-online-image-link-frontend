import React from 'react';
import { IoCheckmarkSharp } from "react-icons/io5";
import {useUploadLinkStore} from "store/uploaded-link-store";
import toast from "react-hot-toast";

const UploadedImage = () => {
    const { uploadedLink } = useUploadLinkStore();

    const onCopyLinkClick = async() => {
        await window.navigator.clipboard.writeText(uploadedLink);
        toast.success("Text copied successfully");
    }

    return (
        <div className="lg:w-1/3 md:w-2/3 w-full p-5 bg-secondary-light rounded-md shadow-[0_1px_12px_2px_rgba(0,0,0,0.1)] flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary-green flex justify-center items-center mt-5">
                <IoCheckmarkSharp size={25} className="text-primary-light" />
            </div>
            <h1 className="my-3 text-xl">
                Uploaded Successfully
            </h1>

            <div className="w-full h-60 my-3">
                <img
                    src={uploadedLink}
                    className="h-full w-full object-contain rounded-md"
                />
            </div>

            <div className="w-full h-10 bg-medium-grey border-2 rounded-lg p-1 flex items-center">
                <h1 className="text-base whitespace-nowrap overflow-hidden overflow-ellipsis font-light flex-1">
                    {uploadedLink}
                </h1>

                <button className="px-5 py-2 bg-primary-blue text-primary-light font-light text-[13px] rounded-md mr-0" onClick={onCopyLinkClick}>
                    Copy Link
                </button>
            </div>
        </div>
    );
};

export default UploadedImage;
