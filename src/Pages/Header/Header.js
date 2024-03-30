import { Button, IconButton, MobileNav, Navbar, Typography } from '@material-tailwind/react';
import logo from '../../logos/Group 1329.png'
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const [user, loading, error] = useAuthState(auth);
    const [signOut, loading1, error1] = useSignOut(auth);
    // console.log(user.displayName)
   
    const navList = (
      
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
         <Link  to={'/'}>Home</Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link to="donation">Donation</Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link to="event">Event</Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link to="blog">Blog</Link>
        </Typography>
      </ul>
    );
    
    return (
        <div className=" max-h-[768px] w-full sticky top-0 z-10 bg-white px-2">
        <Navbar className="  h-max max-w-full rounded-none px-4 py-2 lg:px-0 lg:py-0">
          <div className="flex items-center justify-between text-blue-gray-900">
            <img className='max-w-40' src={logo} alt="" />
            <div className="flex items-center gap-4 ">
              <div className="mr-4 hidden   lg:block text-black">{navList}</div>
              {
                user?.uid? <div className="flex items-center gap-x-1">
                  <Button
                  variant="text"
                  size="sm"
                  className="hidden lg:inline-block rounded-lg  text-black"
                >
                  {user.displayName}
                </Button>
                <Button
                onClick={async () => {
                  const success = await signOut();
                  if (success) {
                    alert('You are sign out');
                  }
                }}
                  variant="text"
                  size="sm"
                  className="hidden lg:inline-block rounded-lg bg-red-600 text-white"
                >
                  Singout
                </Button>
                
                
              </div>

              :
              <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                color='red'
                className="hidden lg:inline-block rounded-lg bg-blue-700 text-white"
              >
                <Link to="register">Register</Link>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block rounded-lg bg-emerald-800 text-white"
              >
                <Link to="login">Login</Link>
              </Button>
            </div>

              }
              
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6  text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav className='text-black' open={openNav}>
            {navList}
            {
              user?.uid ? <div className="flex items-center gap-x-1">
              <Button fullWidth variant="text" size="sm" className="rounded-lg bg-blue-700 text-white">
              {user.displayName}
              </Button>
              <Button
              onClick={async () => {
                const success = await signOut();
                if (success) {
                  alert('You are sign out');
                }
              }}
              fullWidth variant="gradient" size="sm" className="rounded-lg bg-emerald-800 text-white">
              Sing out
              </Button>
            </div>
            :
            <div className="flex items-center gap-x-1">
              <Button fullWidth variant="text" size="sm" className="rounded-lg bg-blue-700 text-white">
              <Link to="register">Register</Link>
              </Button>
              <Button fullWidth variant="gradient" size="sm" className="rounded-lg bg-emerald-800 text-white">
              <Link to="login">Login</Link>
              </Button>
            </div>
            }
          </MobileNav>
        </Navbar>
      </div>
    );
    
};

export default Header;