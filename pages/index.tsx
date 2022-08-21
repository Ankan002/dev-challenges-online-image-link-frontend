import type { NextPage } from 'next';
import {CustomHead} from "components/elements";
import {UploadForm, Uploading, UploadedImage} from "components";
import {useActivityStateStore} from "store/activity-state-store";

const Home: NextPage = () => {
  const { activityState, updateState } = useActivityStateStore();

  const onBtnClick = () => {
      activityState === "pre-upload" ? updateState("uploading") : updateState("pre-upload");
  }

  return (
    <div>
      <CustomHead title="Online Image Link" />

      <main className="min-h-screen w-full flex flex-col bg-primary-light justify-center items-center font-poppins p-5">
          {
              activityState === "pre-upload" && (
                  <UploadForm />
              )
          }

          {
              activityState === "uploading" && (
                  <Uploading />
              )
          }

          {
              activityState === "post-upload" && (
                  <UploadedImage />
              )
          }
      </main>
    </div>
  );
};

export default Home;
