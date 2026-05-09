import { useState } from "react";
import "../styles/AddMedicine.css";
import { addMedicine } from "../api/medicineService";
import { useNavigate } from "react-router-dom";

export default function AddMedicine() {
    const navigate = useNavigate();
    const [medicine, setMedicine] = useState({
        name: "",
        notes: "",
        expiryDate: "",
        quantity: "",
        price: "",
        brand: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMedicine((prevMedicine) => ({
            ...prevMedicine,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const medicinePayload = {
                ...medicine,
                quantity: Number(medicine.quantity),
                price: Number(medicine.price)
            };

            await addMedicine(medicinePayload);
            alert("Medicine added successfully!");

            // setMedicine({
            //     name: "",
            //     notes: "",
            //     expiryDate: "",
            //     quantity: "",
            //     price: "",
            //     brand: ""
            // });
            navigate("/", { replace: true });
        } catch (error) {
            console.error("Error adding medicine:", error);
            alert("Failed to add medicine.");
        }
    };

    return (
        <div className="add-medicine-container">
            <h2>Add Medicine</h2>
            <form className="medicine-form" onSubmit={handleSubmit} >
                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={medicine.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Notes</label>
                    <textarea
                        name="notes"
                        value={medicine.notes}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Expiry Date</label>
                    <input
                        type="date"
                        name="expiryDate"
                        value={medicine.expiryDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        value={medicine.quantity}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Price</label>
                    <input
                        type="number"
                        step="0.01"
                        name="price"
                        value={medicine.price}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Brand</label>
                    <input
                        type="text"
                        name="brand"
                        value={medicine.brand}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="submit-btn">
                    Add Medicine
                </button>
            </form>
        </div>
    );
}