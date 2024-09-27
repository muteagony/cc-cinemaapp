import React from "react";
import Popup from "reactjs-popup";

export default () => (
  <Popup modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Title of the movie </div>
        <div className="content">
          If you want to reserve this movie accept form.
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Accept </button>}
            position="top center"
            closeOnDocumentClick
          >
            <span>Great, your movie is reserved.</span>
          </Popup>
        </div>
      </div>
    )}
  </Popup>
);
