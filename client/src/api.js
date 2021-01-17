export const getAllBooks = async () => {
    const url = `${process.env.REACT_APP_API_SERVER}/books`;
    const response = await fetch(url);

    console.log("url: ", url);

    if (!response.ok) {
        throw new Error("Error fetching getAllBooks");
    }

    return response.json();
};

export const getBook = async ({ queryKey }) => {
    // eslint disable no-unused-vars
    const [_key, { id }] = queryKey;
    const url = `${process.env.REACT_APP_API_SERVER}/books/${id}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return response.json();
};

export const removeBook = async (id) => {
    const url = `${process.env.REACT_APP_API_SERVER}/books/${id}`;
    const response = await fetch(url, { method: "DELETE" });

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return true;
};

export const updateBook = async ({ id, ...data }) => {
    const url = `${process.env.REACT_APP_API_SERVER}/books/${id}`;
    const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return response.json();
};

export const createBook = async (data) => {
    const url = `${process.env.REACT_APP_API_SERVER}/books/`;
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return response.json();
};
