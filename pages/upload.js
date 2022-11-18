import React, { useState } from "react";
import { ContentDescription, MediaUpload, Button } from "../components/index";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState({});
  const [mediaType, setMediaType] = useState("");
  const [tags, setTags] = useState([]);
  const [step, setStep] = useState(0);

  const stepManager = {
    nextStep: 1,
    goNextStep() {
      setStep(this.nextStep);
    },
  };
  const components = [
    <ContentDescription
      key={0}
      proceedAction={() => stepManager.goNextStep()}
      //   Title
      getTitle={setTitle}
      setTilte={title}
      //   Description
      getDescription={setDescription}
      setDescription={description}
      //   Thumbnail
      getThumbnail={setThumbnail}
      setThumbnail={thumbnail}
      // MediaType
      getMediaType={setMediaType}
      setMediaType={mediaType}
      //   tags
      getTags={setTags}
      setTags={tags}
    />,
    <MediaUpload key={1} />,
  ];

  return (
    <div className="grid w-full grid-cols-1 grid-rows-1 gap-y-12 pt-12 justify-items-center px-6 sm:px-8">
      <h1 className="text-2xl font-bold text-neutral-900">Upload New Content</h1>
      {/* Mount Components */}
      {step === stepManager.nextStep ? components[step] : components[step]}

      {/* proceed button */}
    </div>
  );
};

export default Upload;
