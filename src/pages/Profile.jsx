import { getAuth, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { db } from "../firebase";
import {
  doc,
  updateDoc,
} from "firebase/firestore";
export const Profile = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [FormData, setFormData] = useState({
      name: auth.currentUser.displayName,
      email: auth.currentUser.email,
    });
    const { name, email } = FormData;
    function onLogout() {
      auth.signOut();
      navigate("/");
    }
  
    const [changeDetail, setChangeDetail] = useState(false);
  
    function onChange(e) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    }
    async function onSubmit() {
      try {
        if (auth.currentUser.displayName !== name) {
          //update the name in the firebase auth
          await updateProfile(auth.currentUser, {
            displayName: name,
          });
          //update the name in the firestore
          const docRef = doc(db,"users",auth.currentUser.uid);
          await updateDoc(docRef,{
            name,
          });
        }
        toast.success("profile updated successfully");
      } catch (error) {
        toast.error("could not update the details");
        console.log(error);
      }
    }
  
  return (
   <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl  text-center mt-6 font-bold ">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            {/*name input*/}
            <input
              disabled={!changeDetail}
              onChange={onChange}
              id="name"
              type="text"
              value={name}
              className={`w-full px-4 py-6 text-xl text-gray-700 bg-white  border-gray-300 rounded transition ease-in-out mb-6 ${
                changeDetail && "bg-red-200 focus:bg-red-200"
              }`}
            />
            {/*email input*/}

            <input
              disabled={!changeDetail}
              id="email"
              type="text"
              value={email}
              className="w-full px-4 py-6 text-xl text-gray-700 bg-white  border-gray-300 rounded transition ease-in-out mb-6"
            />

            <div className="flex justify-between whitespace-nowrap text-sm  sm:text-lg">
              <p className="flex items-center">
                Do you want to change your name
                <span
                  onClick={() => {
                    changeDetail && onSubmit();
                    setChangeDetail((prevState) => !prevState);
                  }}
                  className="text-red-600 hover:text-red-700 cursor-pointer transition ease-in-out duration-200 ml-1"
                >
                  {changeDetail ? "Apply changes" : " Edit"}
                </span>
              </p>
              <p
                onClick={onLogout}
                className="text-blue-600 hover:to-blue-700 transition duration-200 ease-in-out cursor-pointer"
              >
                Sign Out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
