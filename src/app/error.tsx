"use client";

import { FC } from "react";

interface errorProps {
    error: Error;
    reset: () => void;
}

const error: FC<errorProps> = ({ error, reset }) => {
    return (
        <div className="flex flex-col gap-6 items-center justify-center h-screen text-2xl">
            <h2>Something went Wrong⚡</h2>
            <button
                onClick={() => reset}
                className="btn btn-outline"
            >
                Try Again</button>
        </div>
    );
};

export default error;
