// const API_URL = "http://localhost:5107/api/pharmacy";
const API_URL = "https://urban-goldfish-vqvpqrq7jx5fxq7v-5107.app.github.dev/api/pharmacy";

export const getMedicines = async () => {

    const response = await fetch(API_URL);

    return await response.json();
};

export const deleteMedicine = async (id) => {

    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });
};