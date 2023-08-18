import logo from "../../../../assets/logo.png"
const InstructorNav = () => {
    const route = <>
        <li><a className='font-semibold'>Home</a></li>

        <li><a className='text-[#0AAE8D] font-semibold'>Course Categories</a></li>
    </>

    return (
        <div className="navbar bg-gray-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {route}
                    </ul>
                </div>
                <div className='flex gap-2 items-center'>
                    <img className='w-10' src={logo} alt="" />
                    <h1 className='font-bold text-xl'>CM Academy</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-8 px-1">
                    {route}
                </ul>
            </div>
            <div className="navbar-end px-3" >
                <div className="avatar">
                    <div className="w-10 rounded-full ring ring-[#0AAE8D] ring-offset-base-100 ring-offset-2">
                        <img src="https://scontent.fdac145-1.fna.fbcdn.net/v/t1.6435-9/186503160_10219069026867086_5494482271146422387_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGEtML6gFd0IzUkNqP6OxA0kd7bN-9PZ56R3ts3709nnj4onSXurStXcE4kAUA_b8ao75Xf_fbfNf3LB5EWcP2C&_nc_ohc=9O980-vhb1QAX-Zo82J&_nc_ht=scontent.fdac145-1.fna&oh=00_AfAKQeP89af9ktSX83ath7_ZwK2eSoXKN-WQ4tedW787qw&oe=6504E069" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InstructorNav;