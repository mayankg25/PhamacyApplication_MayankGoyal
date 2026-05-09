import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "../styles/Dashboard.css";
import { getMedicines, deleteMedicine } from "../api/medicineService";

export default function Dashboard() {
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        loadMedicines();
    }, []);

    const loadMedicines = async () => {
        try {
            const data = await getMedicines();
            setMedicines(data);
        } catch (error) {
            console.error("Error fetching medicines:", error);
        }
    };

    const getRowClass = (medicine) => {
        const expiryDate = new Date(medicine.expiryDate);
        const today = new Date();
        const diffDays = (expiryDate - today) / (1000 * 60 * 60 * 24);

        if (diffDays < 30) {
            return "expiry-warning";
        }

        if (medicine.quantity < 10) {
            return "quantity-warning";
        }

        return "";
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
    };

    const handleEdit = (id) => {
        console.log("Edit medicine:", id);
    };

    const handleDelete = async (id) => {
        const confirmDelete =
            window.confirm(
                "Are you sure you want to delete this medicine?"
            );
        if (!confirmDelete) {
            return;
        }

        try {
            await deleteMedicine(id);
            loadMedicines();
        } catch (error) {
            console.error("Error deleting medicine:", error);
        }
    };

    return (
        <div className="dashboard-container">
            <h2 className="dashboard-title">
                Medicine Dashboard
            </h2>

            <table className="medicine-table">
                <thead>
                    <tr>
                        <th>Medicine Name</th>
                        <th>Expiry Date</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {medicines.length > 0 ? (
                        medicines.map((medicine) => (
                            <tr
                                key={medicine.id}
                                className={getRowClass(medicine)}
                            >
                                <td>{medicine.name}</td>
                                <td>{formatDate(medicine.expiryDate)}</td>
                                <td>{medicine.quantity}</td>
                                <td>
                                    ₹ {Number(medicine.price).toFixed(2)}
                                </td>
                                <td>{medicine.brand}</td>
                                <td>
                                    <FaEdit className="edit-icon"
                                        onClick={() =>
                                            handleEdit(medicine.id)
                                        }
                                    />
                                    <FaTrash className="delete-icon"
                                        onClick={() =>
                                            handleDelete(medicine.id)
                                        }
                                    />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="no-data">
                                No medicines found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    );
}