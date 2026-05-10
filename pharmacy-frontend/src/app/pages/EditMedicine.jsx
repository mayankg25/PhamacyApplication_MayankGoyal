import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMedicineById, updateMedicine } from "../api/medicineService";
import "../styles/AddMedicine.css";

export default function EditMedicine() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [medicine, setMedicine] = useState({
        name: "",
        notes: "",
        expiryDate: "",
        quantity: "",
        price: "",
        brand: ""
    });

    useEffect(() => {
        loadMedicine();
    }, []);

    const loadMedicine = async () => {
        try {
            const data =  await getMedicineById(id);
            setMedicine({
                ...data,
                expiryDate: data.expiryDate.split("T")[0]
            });
        } catch (error) {
            console.error("Error loading medicine:", error);
        }
    };

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
            const payload = {
                ...medicine,
                quantity: Number(medicine.quantity),
                price: Number(medicine.price)
            };
            await updateMedicine(id, payload);
            alert("Medicine updated successfully!");
            navigate("/", { replace: true });
        } catch (error) {
            console.error("Error updating medicine:", error);
            alert("Failed to update medicine.");
        }
    };

    return (
        <div className="add-medicine-container">
            <h2>Edit Medicine</h2>
            <form className="medicine-form" onSubmit={handleSubmit}>
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
                    Update Medicine
                </button>
            </form>
        </div>
    );
}