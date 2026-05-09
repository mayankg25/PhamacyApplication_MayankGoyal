// const API_URL = "http://localhost:5107/api/pharmacy";
const API_URL = "https://urban-goldfish-vqvpqrq7jx5fxq7v-5107.app.github.dev/api/pharmacy";

// GET all medicines
export const getMedicines = async () => {
    const response = await fetch(API_URL);
    return await response.json();
};

// DELETE medicine
export const deleteMedicine = async (id) => {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });
};

// ADD medicine
export const addMedicine = async (medicine) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(medicine)
    });

    if (!response.ok) {
        throw new Error("Failed to add medicine");
    }
    return await response;
};