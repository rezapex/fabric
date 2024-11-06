const API_BASE_URL = "http://localhost:8080";

const fetchPatterns = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/patterns/names`);
        if (!response.ok) {
            throw new Error("Failed to fetch patterns");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching patterns:", error);
        return [];
    }
};

const fetchContexts = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/contexts/names`);
        if (!response.ok) {
            throw new Error("Failed to fetch contexts");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching contexts:", error);
        return [];
    }
};

const fetchSessions = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/sessions/names`);
        if (!response.ok) {
            throw new Error("Failed to fetch sessions");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching sessions:", error);
        return [];
    }
};

export { fetchPatterns, fetchContexts, fetchSessions };
