"use client";

import { Modal } from "flowbite-react";
import { Share } from "lucide-react";
import { useState } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import {ShareSocial} from 'react-share-social' 

export function ProductShare({urlToShare}) {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      <button onClick={() => setOpenModal(true)}><IoShareSocialOutline/></button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Share</Modal.Header>
        <Modal.Body>
        <ShareSocial url ={urlToShare} socialTypes={['facebook','twitter','whatsapp','telegram','email']}/>
        </Modal.Body>
      </Modal>
    </>
  );
}
