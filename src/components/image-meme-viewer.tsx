import React from "react";

interface ModalContentsProps {
  imgIndex: number;
}

export const ImageMemeViewer = ({ imgIndex }: ModalContentsProps) => {
  const [currImageIndex, setCurrImageIndex] = React.useState<number>(imgIndex);
  const [topText, setTopText] = React.useState<string>("");
  const [caption, setCaption] = React.useState<string>("");

  const onNextImage = () => {
    setCurrImageIndex(currImageIndex + 1);
  };
  const onPrevImage = () => {
    setCurrImageIndex(currImageIndex - 1);
  };
  const isFirstImage = () => {
    return currImageIndex === 0;
  };
  const isLastImage = () => {
    return currImageIndex === 18;
  };

  const prevButton = () => {
    return (
      <button
        className="mr-4"
        disabled={isFirstImage()}
        onClick={(e) => {
          e.stopPropagation();
          setTopText("");
          setCaption("");
          onPrevImage();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 ${isFirstImage() ? "text-stone-300" : ""}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
    );
  };

  const nextButton = () => {
    return (
      <button
        className="ml-4"
        disabled={isLastImage()}
        onClick={(e) => {
          e.stopPropagation();
          setTopText("");
          setCaption("");
          onNextImage();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 ${isLastImage() ? "text-stone-300" : ""}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    );
  };

  const imageInputs = () => {
    return (
      <div className="w-2/5">
        <h1 className="mb-4 font-bold text-xl">Meme Live Preview</h1>
        <div className="mb-6">
          <label
            id="text_overlay"
            aria-label="Text Overlay Label"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Text Overlay
          </label>
          <input
            type="text"
            id="text_overlay"
            aria-label="Text Overlay Input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add top text"
            onChange={(e) => {
              setTopText(e.target.value);
            }}
            value={topText}
          />
        </div>
        <div>
          <label
            id="caption"
            className="block mb-2 text-sm font-medium text-gray-900"
            aria-label="Caption Label"
          >
            Caption
          </label>
          <input
            type="text"
            id="caption"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add photo caption"
            aria-label="Caption Input"
            onChange={(e) => {
              setCaption(e.target.value);
            }}
            value={caption}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex w-full h-full">
      {imageInputs()}
      <div className="flex w-3/5 h-full">
        {prevButton()}
        <div className="mb-4 relative">
          <div className="overflow-hidden h-full">
            <img
              src={`https://torchimages-dev.imgix.net/handson-images/${
                currImageIndex + 1 < 10
                  ? `0${currImageIndex + 1}`
                  : `${currImageIndex + 1}`
              }.jpg?fit=fillmax&fill-color=FFFFFF&w=700&h=700`}
              className="object-scale-down w-full h-full border-4 border-black mb-8"
            />
          </div>
          <div className="absolute top-0 mt-2 ml-4 meme-text text-center">
            <h1 className="uppercase">{topText}</h1>
          </div>
          <p className="w-full text-center italic">{caption}</p>
        </div>
        {nextButton()}
      </div>
    </div>
  );
};
