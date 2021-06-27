import React, { useState, useEffect, useRef } from "react";
import propTypes from "prop-types";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

export default function Modal() {
    //state local
  const [Ready, setReady] = useState(() => false);
  const [Display, setDisplay] = useState(() => false);
  const [Allow, setAllow] = useState(() => true);

  const ModalRef = useRef(null);

    //setup function toogle allow
  function toogleAllow() {
    setAllow(!Allow);
  }

    //function toogle pengecekan (on/off)
  function toogle() {
    if (props.toogleModal) props.toogleModal();
    else setDisplay(!Display);
    }
    
    //function utk capture ketika diclick di luar
  function handleClickOutside(event) {
    if (ModalRef?.current.contains?.(event.target) && Allow) toogle();
  }

    //capture event dari document
    //useEffect 1
  useEffect(() => {
    const idModal = "modal";
    const rootContainer = document.createElement("div");
    rootContainer.setAttribute("id", idModal);
      setReady(true);
      
      //cek misalkan document tidak punya getElementById(idModal)
      //maka munculkan rootContainer
    if (!document.getElementById(idModal))
      document.body.appendChild(rootContainer);
  }, []);

    //useEffect 2
    //capture event 
    useEffect(() => {
      //ketika di click maka jalankan handleClickOutside
        document.addEventListener("mousedown", handleClickOutside);
        
        //ketika keluar dari modal maka remove function diatas
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    });
    
    //useEffect 3
    //akan mejalankan
    useEffect(() => {
      //jika value display atau props.in(cek muncul atau tidak)
        if (Display || props.in) {
        
      document.querySelector("body").classList.add("modal-open");
    }
    return () => {
      document.querySelector("body").classList.remove("modal-open");
    };
  }, [Display, props.in])
    
    if (!Ready) return null;

  return <div></div>;
}
