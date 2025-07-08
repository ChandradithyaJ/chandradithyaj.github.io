import React, { useEffect, useState } from 'react';

export const HierGraphs: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Just for error handling in case the iframe fails to load
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-lg">Loading demo...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-red-500">Error: {error}</div>
            </div>
        );
    }

    return (
        <div className="w-full h-screen">
            <iframe
                src="/assets/gnnexp261.html"
                className="w-full h-full border-0"
                title="HierGraphs Demo"
                onLoad={() => setLoading(false)}
                onError={() => setError("Failed to load HTML file")}
            />
        </div>
    );
};