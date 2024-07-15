import { useState } from 'react';
import {image} from "../public/images";
import { IoClose } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";


const Signup = ({onClose}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    city: '',
    mobileNumber: '',
    dob: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="absolute inset-0 bg-black opacity-50"></div>
      <form className="w-full max-w-lg bg-white p-9 border border-gray-200 rounded-lg shadow-md relative">
        <button className="absolute top-4 right-4 text-gray-700 hover:text-gray-700" onClick={onClose}>
          <IoClose className="h-8 w-8" />
        </button>
        <img src={image} height={100} width={100}/>
        <div className="px-4">
          <div className='w-full flex items-center justify-start ml-4'>
          <h1 className="text-3xl text-start mb-3"><span className="font-bold">WE WOULD LOVE</span><br />TO KNOW ABOUT YOU!</h1>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              className="mb-2 w-full p-2 border border-gray-300 rounded-full"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Enter your city name"
              className="mb-2 w-full p-2 border border-gray-300 rounded-full"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
              Mobile Number
            </label>
            <div className="flex">
              <span className="inline-flex h-11 items-center px-3 rounded-l-full border border-r-0 border-gray-300 bg-gray-50 text-black text-sm">
                +91|
              </span>
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Enter your mobile number"
                className="mb-2 w-full p-2 h-11 border border-gray-300 rounded-r-full outline-none"
                value={formData.mobileNumber}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
              Date of Birth
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                id="dob"
                name="dob"
                placeholder="DD/MM/YYYY"
                className="mb-2 w-full p-2 border border-gray-300 rounded-full"
                value={formData.dob}
                onChange={handleInputChange}
              />
              <span className="absolute right-3 bottom-1 flex items-center cursor-pointer h-full ">
                <MdOutlineCalendarMonth className="text-black" size={30}/>
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 font-bold text-sm py-2 px-4 rounded-full"
          >
            Let the conversation begin!
          </button>
          <div className="w-full">
            <div className="w-full flex text-sm gap-1 mt-5 items-center justify-center">
              <p>By logging in, you agree to our <span className="font-bold underline">Terms of Use</span> and <span className="font-bold underline">Privacy Policy</span></p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;