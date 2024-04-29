import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCart } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const path = useLocation().pathname;
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <Navbar className=" shadow-md">
      <Navbar.Toggle />
      <Link
        to={"/"}
        className="self-center whitespace-nowrap text-lg  sm:text-xl font-semibold dark:text-white"
      >
        Snap
        <span className="px-2 py-1  bg-gradient-to-r from-pink-500 via-indigo-500 to-slate-500 rounded-lg text-white">
          Qart
        </span>
      </Link>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to={"/"} className="font-bold">
            Home
          </Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/all-products"} as={"div"}>
          <Link to={"/all-products"} className="font-bold">
            All Products
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to={"/about"} className="font-bold  ">
            About
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
      <form>
        <TextInput
          type="text"
          placeholder="search..."
          className=" hidden lg:inline"
          rightIcon={AiOutlineSearch}
        />
      </form>
      <Button pill className="lg:hidden">
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:gap-5 pr-3">
        <BiCart className="size-10" />
        {isSignedIn ? (
          <>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Abhishek Kr</span>
                <span className="block truncate text-sm font-medium">
                  name@snapqart.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </>
        ) : (
          <>
            <Button gradientDuoTone={"purpleToPink"} outline>
              <Link to={"/sign-in"}>Sign In</Link>
            </Button>
          </>
        )}
      </div>
    </Navbar>
  );
}
