import { GoogleButton, Logo } from "../../components";

import { type GoogleTokenResponseType } from "../../types";

const Authentication = () => {
    // TODO: Function to handle when clicking login button
    const handleClick = (res: GoogleTokenResponseType) => {
        console.log(res);
    };

    return (
        <main className="w-screen h-screen flex justify-center items-center">
            <div className="space-y-4 max-w-[24rem] p-4">
                <Logo />
                <h4 className="text-center text-[2rem] font-bold">
                    Log in or sign up
                </h4>
                <p className="text-center font-medium text-gray-500">
                    A shared space for your thoughts — collaborate, create, and
                    grow.
                </p>
                <GoogleButton onClick={handleClick} />
                <div className="flex gap-8 justify-center items-center">
                    <a href="#" className="text-sm font-light underline">
                        Terms of Use
                    </a>
                    <a href="#" className="text-sm font-light underline">
                        Privacy Policy
                    </a>
                </div>
            </div>
        </main>
    );
};

export default Authentication;
