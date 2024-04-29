import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const handleChange = () => {};
  return (
    <>
      <div className="min-h-screen mt-20">
        <div className="flex gap-8 max-w-3xl flex-col md:flex-row md: items-center mx-auto">
          <div className="flex-1 px-10 ">
            <h1 className="text-xl font-semibold">
              Snap
              <span className="bg-teal-500 px-2 py-1 rounded-md  bg-gradient-to-tr from-pink-600  to-orange-400 text-white">
                Qart
              </span>
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed est
              optio ipsam sunt porro, similique alias voluptatem, voluptates
              necessitatibus illum, eius id doloribus dignissimos. Odio dolore
              veritatis nesciunt eius iusto iste. Sint nam quam quae dolore.
            </p>
          </div>
          <div className="flex-1">
            <h1 className="mb-5 text-center text-xl font-bold">Sign Up</h1>

            <div>
              <form className="flex flex-col gap-4">
                <div>
                  <Label value="Your Email" />
                  <TextInput
                    type="text"
                    id="username"
                    placeholder="username"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label value="Your Email" />
                  <TextInput
                    type="email"
                    placeholder="name@yourmail.com"
                    id="email"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label value="Password" />
                  <TextInput
                    type="password"
                    placeholder="ewff@3#"
                    id="password"
                    onChange={handleChange}
                  />
                </div>

                <Button gradientDuoTone={"purpleToBlue"}>Sign Up</Button>
              </form>
              <div className="flex gap-3 mt-5 text-sm ">
                <span>Have an Account?</span>
                <Link to={"/sign-in"} className="text-blue-500">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
