import React, {ChangeEvent, useEffect, useState} from 'react';
import {useActivityStateStore} from "store/activity-state-store";
import {useUploadLinkStore} from "store/uploaded-link-store";
import {uploadImage} from "helpers/upload-image";
import toast from "react-hot-toast";
import {Accept, useDropzone} from "react-dropzone";
import {BsImage} from "react-icons/bs";

const UploadForm = () => {

    const [file, setFile] = useState<File>();

    const onChooseFileClick = () => {
        document.getElementById("select-file-btn")?.click()
    }

    const onSelectedFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        (e.target.files?.length && e.target.files?.length > 0) && setFile(e.target.files[0]);
    }

    const { updateState } = useActivityStateStore();
    const { updateUploadedLink } = useUploadLinkStore();

    const onFileUpload = async() => {
        if(!file) return;
        updateState("uploading");

        const response = await uploadImage(file);

        if(!response.success){
            updateState("pre-upload");
            toast.error(`${response.error}`);
            return
        }

        updateUploadedLink(response.url);
        toast.success("Image Uploaded successfully");
        updateState("post-upload");
    }

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            setFile(acceptedFiles[0])
        },
        onError: (e) => {
           toast.error(e.message);
        }
    })

    useEffect(() => {
        if(file) {
            onFileUpload()
                .catch(e => console.log(e))
        }
    }, [file]);

    return (
        <div className="lg:w-1/3 md:w=2/4 w-full p-5 bg-secondary-light rounded-md shadow-[0_1px_12px_2px_rgba(0,0,0,0.1)] flex flex-col items-center">
            <h1 className="mb-3 text-2xl font-medium">
                Upload your image
            </h1>

            <p className="my-2 text-[13px] font-thin text-dark-grey">
                File should be .jpeg, .jpg, .png
            </p>

            <div
                className="w-full h-60 border-[1px] border-primary-blue bg-medium-grey rounded-md border-dashed flex flex-col items-center justify-center"
                {...getRootProps()}
            >
                <BsImage size={80} className="text-dark-grey" />
                <p className="font-thin text-[15px] text-dark-grey mt-5">
                    Drag & Drop your image here
                </p>
                <input
                    className="hidden"
                    type="file"
                    onChange={onSelectedFileChange}
                    {...getInputProps()}
                    id="select-file-btn"
                    accept="image/*"
                />
            </div>

            <p className="my-2 text-[13px] font-thin text-dark-grey">
                or
            </p>

            <button className="px-5 py-2 bg-primary-blue text-primary-light font-light text-[13px] rounded-md" onClick={onChooseFileClick}>
                Choose a file
            </button>
        </div>
    );
};

export default UploadForm;
