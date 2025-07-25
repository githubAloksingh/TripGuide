import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';

function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    console.log(user)
  })

  const login = useGoogleLogin({
    onSuccess: (res) => GetUserProfile(res),
    onError: (error) => console.log(error)
  })

  const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo.access_token}`,
        Accept: 'application/json',
      },
    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDialog(false);
      window.location.reload();
    }).catch((error) => {
      console.error("Error fetching user profile: ", error);
    });
  }

  return (
  <div className="bg-[#f8f6f8] shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex justify-between items-center px-6 py-3">
  <div className="flex items-center gap-3">
    <img src="/logo.svg" alt="Logo" className="w-16 h-12" />
    <h1 className="text-3xl font-extrabold text-[#1a202c] tracking-wide">
      <span className="text-4xl text-[#4f46e5]">Trip</span>Guide
    </h1>
  </div>



    {/* Right Side */}
    <div>
      {user ? (
        <div className="flex items-center gap-3">
          <a href="/create-trip">
            <Button className="rounded-full px-4 py-2 bg-[#06b6d4] text-white font-semibold shadow hover:bg-[#0891b2] hover:shadow-md transition duration-300">
              + Create Trip
            </Button>
          </a>
          <a href="/my-trips">
            <Button className="rounded-full px-4 py-2 bg-[#4f46e5] text-white font-semibold shadow hover:bg-[#4338ca] hover:shadow-md transition duration-300">
              My Trips
            </Button>
          </a>
          <Popover>
            <PopoverTrigger>
              <img src={user?.picture} alt="User" className="h-[35px] w-[35px] rounded-full border border-gray-300 hover:scale-105 transition-transform" />
            </PopoverTrigger>
            <PopoverContent>
              <h2
                className="cursor-pointer text-red-600 font-medium hover:underline"
                onClick={() => {
                  googleLogout()
                  localStorage.clear()
                  window.location.reload()
                }}
              >
                Logout
              </h2>
            </PopoverContent>
          </Popover>
        </div>
      ) : (
        <Button
          onClick={() => setOpenDialog(true)}
          className="rounded-full px-5 py-2 bg-[#3b82f6] text-white font-semibold shadow hover:bg-[#2563eb] hover:shadow-lg transition-all"
        >
          Sign In
        </Button>
      )}
    </div>

    {/* Sign-In Dialog */}
    <Dialog open={openDialog}>
      <DialogContent className="max-w-sm rounded-xl shadow-xl border border-gray-200">
        <DialogHeader>
          <DialogDescription className="text-center space-y-4">
            <img src="/logo.svg" alt="logo" className="mx-auto w-16 mb-2" />
            <h2 className="font-bold text-xl text-gray-800">Sign In to Your Travel Dashboard</h2>
            <p className="text-sm text-gray-500">Sign in using Google for a secure experience</p>
            <Button
              onClick={login}
              className="w-full mt-4 flex gap-3 justify-center items-center border border-gray-300 shadow hover:shadow-md transition-all"
            >
              <FcGoogle className="h-6 w-6" /> Sign in With Google
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  </div>
)

}

export default Header