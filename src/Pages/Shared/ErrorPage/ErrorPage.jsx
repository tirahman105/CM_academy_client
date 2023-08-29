import React from 'react';
import ErrorLottie from "../../../assets/error.json"
import Lottie from "lottie-react";
import "./Error.css"
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError();



    return (
        <div className="hero min-h-screen bg-[#ABCDEF]">
            <div className="hero-content text-center flex flex-col lg:flex-row">
                <div className='error lg:w-1/2'>
                    <h1 className='code '>404</h1>
                    <h2 className='desc'>Ops... There is something wrong. {error?.message}</h2>
                </div>
                <div className='lg:w-1/2 '>
                    <Lottie className='w-full ' animationData={ErrorLottie} loop={true} />
                    <Link to="/">
                        <button className='btn bg-[#20293F]
                         text-[#ABCDEF] hover:text-[#20293F] border-0'>Back to homepage</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;