//There's no admin view yet, so use this if you plan to add equipment
import React, { useState, useContext } from 'react';
import { EquipmentContext } from '../CONTEXT/EquipmentContext';
import { FaPlusCircle } from 'react-icons/fa';

const EquipmentForm = () => {
    const { equipmentList, addEquipment } = useContext(EquipmentContext);

    const [formData, setFormData] = useState({
        equipmentID: '',
        equipmentName: '',
        quantity: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check for empty fields
        if (!formData.equipmentID || !formData.equipmentName || formData.quantity === '') {
            alert('All fields must be filled out.');
            return;
        }

        // Check for valid quantity
        if (!Number.isInteger(Number(formData.quantity)) || Number(formData.quantity) < 0) {
            alert('Quantity must be a non-negative integer.');
            return;
        }

        // Check for duplicate equipmentID
        const duplicate = equipmentList.some(
            (equipment) => equipment.equipmentID === formData.equipmentID
        );
        if (duplicate) {
            alert('Equipment ID must be unique.');
            return;
        }

        // Create new equipment object
        const newEquipment = {
            ...formData,
            quantity: Number(formData.quantity),
            status: 'Available',
        };

        // Add equipment to the list
        addEquipment(newEquipment);

        // Reset form
        setFormData({ equipmentID: '', equipmentName: '', quantity: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
            <div className="mb-3">
                <label className="form-label">Equipment ID</label>
                <input
                    type="text"
                    name="equipmentID"
                    className="form-control"
                    value={formData.equipmentID}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Equipment Name</label>
                <input
                    type="text"
                    name="equipmentName"
                    className="form-control"
                    value={formData.equipmentName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Quantity</label>
                <input
                    type="number"
                    name="quantity"
                    className="form-control"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                />
            </div>
            <button
                type="submit"
                className="btn btn-success d-flex align-items-center gap-2"
                onMouseOver={(e) => (e.target.style.backgroundColor = '#006400')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '')}
            >
                <FaPlusCircle />
                Add Equipment
            </button>
        </form>
    );
};

export default EquipmentForm;
