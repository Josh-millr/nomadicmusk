import { Button, FormInput, FormTextArea, FormFile } from "../../index";
export const ContentDescription = (props) => {
  const {
    proceedAction,
    getTitle,
    setTilte,
    getDescription,
    setDescription,
    getThumbnail,
    setThumbnail,
    getMediaType,
    setMediaType,
  } = props;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault;
        proceedAction();
      }}
      className="grid-row-1 grid w-full grid-cols-1 justify-items-center sm:w-[420px]"
    >
      {/* title */}
      <div className="mb-4 w-full">
        <FormInput
          type="text"
          label="Title"
          placeholder="title"
          setValue={setTilte}
          getValue={(value) => getTitle(value)}
        />
      </div>
      {/* description - textarea */}
      <div className="mb-4 w-full">
        <FormTextArea
          label="Description"
          id="contentDescription"
          placeholder="write your content description here..."
          setValue={setDescription}
          getValue={(value) => getDescription(value)}
          required={true}
        />
      </div>
      {/* thumbnail */}
      <div className="mb-4 w-full">
        <FormFile label="Thumbnail" />
      </div>
      {/* media type - dropdown button */}
      <div className="mb-4 grid w-full grid-cols-1 grid-rows-1 gap-y-2">
        <p className="block whitespace-nowrap text-sm font-medium">
          Media Type
        </p>
        <div className="flex w-full gap-x-4">
          <div className="flex w-full items-center rounded border border-gray-200 pl-4 dark:border-gray-700">
            <input
              id="bordered-radio-1"
              type="radio"
              value=""
              name="bordered-radio"
              className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            />
            <label
              for="bordered-radio-1"
              className="ml-2 w-full py-4 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Video
            </label>
          </div>
          <div className="flex w-full items-center rounded border border-gray-200 pl-4 dark:border-gray-700">
            <input
              checked
              id="bordered-radio-2"
              type="radio"
              value=""
              name="bordered-radio"
              className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            />
            <label
              for="bordered-radio-2"
              className="ml-2 w-full py-4 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Audio
            </label>
          </div>
        </div>
      </div>
      {/* button */}
      <div className="w-full pt-8 flex justify-center">
        <Button.Default type="primary" label="Proceed" />
      </div>
    </form>
  );
};
