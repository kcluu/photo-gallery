import React from "react";
import { Modal } from "./components/modal";
import { ImageMemeViewer } from "./components/image-meme-viewer";

const App = () => {
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [clickedImgIndex, setClickedImgIndex] = React.useState<number>(0);
  // Gets images 01-19
  const imageList = [];
  for (let i = 1; i < 20; i++) {
    imageList.push(
      `https://torchimages-dev.imgix.net/handson-images/${
        i < 10 ? `0${i}` : `${i}`
      }.jpg`
    );
  }
  return (
    <>
      <div className="flex justify-center mt-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0SxfLw0YwQjkXMntSp4jU-D6aO8OhN8O9a8kSEut&s"
          className="w-32"
        />
      </div>
      <div className="container mx-auto">
        <div className="w-full p-5 pb-10 mx-auto mb-10 gap-3 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 space-y-3">
          {imageList.map((imageUrl, index) => (
            <img
              className="cursor-pointer transition-all hover:scale-105 duration-500"
              key={index}
              src={imageUrl}
              onClick={(e) => {
                setOpenModal(true);
                setClickedImgIndex(index);
              }}
            ></img>
          ))}
        </div>
      </div>
      {openModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <ImageMemeViewer imgIndex={clickedImgIndex} />
        </Modal>
      )}
    </>
  );
};

export default App;
