import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen = {!!props.selectedOption}
        onRequestClose={props.disableOptionModel}
        contentLabel = "selected option"
        closeTimeoutMS={300}
        className="modal">
        <h3 className="modal__title">Selected Option</h3>
        { props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="small-button__modal" onClick={props.disableOptionModel}>Okay</button>
    </Modal>
)

export default OptionModal;