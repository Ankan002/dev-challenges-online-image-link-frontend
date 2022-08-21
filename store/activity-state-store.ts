import create from "zustand";

interface ActivityStateStore {
    activityState: "pre-upload" | "uploading" | "post-upload";
    updateState: (newState: "pre-upload" | "uploading" | "post-upload") => void;
}

export const useActivityStateStore = create<ActivityStateStore>()((set) => ({
    activityState: "pre-upload",
    updateState: (newState) => set(() => ({
        activityState: newState
    }))
}));