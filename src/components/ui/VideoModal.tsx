import React, { useState } from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";
import { FaPlay } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

// modal styles
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
    zIndex: 10000,
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 9999,
  },
};

const customStylesMobile = {
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
    width: "90%",
    maxWidth: "100%",
    border: "none",
    zIndex: 10000, // high z-index to ensure it's above other elements
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 9999, //high z-index to ensure it's above other elements
  },
};

Modal.setAppElement("#root");

export const VideoModal = ({
  videoId,
  classNameModal,
  classNameBtn,
  text,
  title,
}: {
  videoId: string;
  classNameModal?: string;
  classNameBtn: string;
  text?: string;
  title: string;
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
    height: isMobile ? "250" : "390",
    width: isMobile ? "100%" : "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className={`${classNameModal} bg-none`}>
      <button className={`${classNameBtn} flex gap-3`} onClick={openModal}>
        <FaPlay />
        {text}
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={isMobile ? customStylesMobile : customStyles}
        contentLabel="YouTube Video"
      >
        <YouTube videoId={videoId} opts={opts} />
        <p className="p-3 font-bold md:text-3xl">{title}</p>
      </Modal>
    </div>
  );
};
