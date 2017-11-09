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
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearSelectedOption}>Okay</button>
  </Modal>
);

export default OptionModal;