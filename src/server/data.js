import React, { useState } from 'react';
import { createContext, useContext } from 'react';

// Note: this file does not demonstrate a real data fetching strategy.
// We only use this to simulate data fetching happening on the server
// while the cache is populated on the client. In a real app, you would
// instead use a data fetching library or Server Components for this.

const DataContext = createContext(null);

export function DataProvider({ children, data }) {
    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

// In a real implementation the data would be streamed with the HTML.
// We haven't integrated this part yet, so we'll just use fake data.
const fakeData = [
    "Wait, it doesn't wait for React to load?",
    'How does this even work?',
    'I like marshmallows',
];


export function useData(name, repo) {
    const ctx = useContext(DataContext);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await repo()?.then((res) => res)
            ctx[name] = response?.data
            // Update the data in the context or handle it in your application logic
            // ctx.read();
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    if (ctx && !ctx[name]) {
        throw fetchData(); // Trigger the suspense
    }

    return {
        data: ctx[name] ?? fakeData,
        isLoading,
        error,
    };
}