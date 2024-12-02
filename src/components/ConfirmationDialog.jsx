import React from 'react';

const ConfirmationDialog = ({ confirmText, onConfirm, onCancel }) => {
  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirmation</h5>
          </div>
          <div className="modal-body">
            <p>Are you sure you {confirmText}?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" onClick={onConfirm}>Yes</button>
            <button type="button" className="btn btn-secondary" onClick={onCancel}>No</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
