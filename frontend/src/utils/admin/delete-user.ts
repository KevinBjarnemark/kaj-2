import { API_BASE_HEADERS, API_ENDPOINTS } from "../constants/api";

const deleteUser = async (id: number): Promise<Response> => {
    const response = await fetch(`${API_ENDPOINTS.users}/${id}`, {
        method: "DELETE",
        headers: API_BASE_HEADERS,
    });

    return response;
};

export default deleteUser;
