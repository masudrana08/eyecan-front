import React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <div className="heroContainer">
      <div className="item">
          <h1>On A Mission To Go Beyond Sight</h1>
          <p className="pt-2">
            <span style={{fontWeight:"bold"}}>Eyecan –</span> An App that makes it easier for visually challenged people
            to go with their everyday tasks.
          </p>
      </div>
    </div>
  );
}
