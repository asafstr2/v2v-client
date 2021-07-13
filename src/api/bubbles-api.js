function bubblesApi() {
    const getAll = async () => {
        return [
            {
                id: 123,
                type: "My Bubble Type",
                key: "1",
            },
            {
                id: 1555,
                type: "Type2",
                key: "2",
            },
            {
                id: 2123,
                type: "My Bubble Type",
                key: "1",
            },
            {
                id: 3555,
                type: "Type2",
                key: "2",
            },
            {
                id: 4123,
                type: "My Bubble Type",
                key: "1",
            },
            {
                id: 5555,
                type: "Type2",
                key: "2",
            },
            {
                id: 6123,
                type: "My Bubble Type",
                key: "1",
            },
            {
                id: 7555,
                type: "Type2",
                key: "2",
            },
            {
                id: 8123,
                type: "My Bubble Type",
                key: "1",
            },
            {
                id: 9555,
                type: "Type2",
                key: "2",
            },

        ]
    };

    const getById = async () => {
        return {
            id: 123,
            type: "My Bubble Type",
            key: "1",
        }
    };


    return {
        getAll,
        getById,
    }
}

export default bubblesApi;