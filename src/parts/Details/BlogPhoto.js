import React from "react";
import Preview from "public/images/icon-preview.svg";
import Modal from "src/components/Modal";

export default function BlogPhoto({ data }) {
  console.log(data);
  return (
    <div className="w-1/3 px-4">
      <figure className="item-image">
        <Preview></Preview>
        <img src={data} alt={data} className="object-cover h-32 w-full" />
      </figure>
      <Modal content={(toogle) => <img src={data} alt={data} />}>
        {(toogle) => <span onClick={toogle} className="link-wrapped"></span>}
      </Modal>
    </div>
  );
}
