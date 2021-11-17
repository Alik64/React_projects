import React, { useState } from "react";
import "./Slider.css";
import dataSlider from "./dataSlider";

export default function Slider(props) {
  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false,
  });

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideAnim.index === index + 1 ? "slide active-anim" : "slide"
            }
          >
            <img src={`/Imgs/img${index + 1}.jpg`} alt="photo de slide" />
          </div>
        );
      })}
    </div>
  );
}
