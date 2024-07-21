import React, { useState } from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";
import { FaPlay } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

// Define custom styles for the modal in desktop and mobile configurations
const customStyles = {
  content: {
    color: "white",
    backgroundColor: "transparent",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: "0px",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "640px",
    border: "none",
    zIndex: 10000, // Ensure modal content is above other elements
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)", // Semi-transparent overlay
    zIndex: 9999, // Ensure overlay is below modal content
  },
};

const customStylesMobile = {
  ...customStyles.content, // Inherit desktop styles and override as necessary
  width: "90%",
  maxWidth: "100%",
};

// Set the app element to hide from accessibility tools when modal is open
Modal.setAppElement("#root");

interface VideoModalProps {
  videoId: string;
  classNameModal?: string;
  classNameBtn: string;
  text?: string;
  title: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  videoId,
  classNameModal,
  classNameBtn,
  text,
  title,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const opts = {
    height: isMobile ? "250" : "390", // Adjust player height based on device
    width: isMobile ? "100%" : "640", // Adjust player width based on device
    playerVars: {
      autoplay: 1, // Auto-play the video when modal is opened
    },
  };

  return (
    <div className={classNameModal}>
      <button
        className={`${classNameBtn} flex items-center gap-3`}
        onClick={openModal}
      >
        <FaPlay /> {text}
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: isMobile ? customStylesMobile : customStyles.content,
          overlay: customStyles.overlay,
        }}
        contentLabel={`${title} Video Modal`} // Accessible label for screen readers
      >
        <YouTube videoId={videoId} opts={opts} />
        {/* Provide an explicit close button */}
        <p className="p-3 font-bold text-3xl">{title}</p>
      </Modal>
    </div>
  );
};
