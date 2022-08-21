import create from "zustand";

interface UploadedLinkStore {
    uploadedLink: string;
    updateUploadedLink: (link: string) => void;
}

export const useUploadLinkStore = create<UploadedLinkStore>()(
    (set) => ({
        uploadedLink: "",
        updateUploadedLink: (link) => set(() => ({
            uploadedLink: link
        }))
    })
);