import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
    return (
        <div className="px-12 pt-6 pb-12 max-w-96 relative mx-auto mt-40 bg-red-500 shadow-md shadow-zinc-400 text-white rounded-md text-center">
            <h1 className="font-bold text-3xl p-5">404 - Not Found!</h1>
            <Link to='/' className="text-xl underline underline-offset-4 hover:animate-bounce block w-min min-w-24 relative mx-auto">Go Home</Link>
        </div>
    )
}

export default ErrorPage;