import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (

  <Modal
    isOpen={!!props.selectedOption}
    // built in to react-modal - this makes it so clicking the background or hitting the escape key
    // closes it or runs the command you want to run
    onRequestClose={props.handleClearSelectedOption}
    // this shows for users with accessibility enabled - does not show in browser
    contentLabel="Selected Option"
    // How long should the modal wait before it closes?
    closeTimeoutMS={200}
    // className is another prop on ReactModal where we can override the modal styles
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
  </Modal>
);

export default OptionModal;