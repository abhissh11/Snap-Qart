import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function FooterComp() {
  return (
    <>
      <div className="">
        <Footer container className="border border-t-8 border-teal-500">
          <div className="w-full max-w-7xl mx-auto ">
            <div className="grid w-full  justify-between sm:flex md:grid-cols-1 ">
              <div className="mt-5 ">
                <Link
                  to={"/"}
                  className="self-center whitespace-nowrap text-lg  sm:text-xl font-semibold dark:text-white"
                >
                  Snap
                  <span className="px-2 py-1  bg-gradient-to-r from-pink-500 via-indigo-500 to-slate-500 rounded-lg text-white">
                    Qart
                  </span>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                  <Footer.Title title={"About"} />
                  <Footer.LinkGroup col>
                    <Footer.Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SnapQart
                    </Footer.Link>
                    <Footer.Link
                      href="https://github.com/dev-abhishekkr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Kolkata, India
                    </Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title={"Follow Us"} />
                  <Footer.LinkGroup col>
                    <Footer.Link
                      href="https://github.com/dev-abhishekkr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </Footer.Link>
                    <Footer.Link
                      href="https://www.linkedin.com/in/abhishek-kumar-0b6b1a211/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title={"Legal"} />
                  <Footer.LinkGroup col>
                    <Footer.Link
                      href="#r"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Policy
                    </Footer.Link>
                    <Footer.Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      copyright @snapqart
                    </Footer.Link>
                  </Footer.LinkGroup>
                </div>
              </div>
            </div>
            <Footer.Divider />
            <div>
              <Footer.Copyright
                href="#"
                by="SnapQart | All rights reserved."
                year={new Date().getFullYear()}
              />
            </div>
          </div>
        </Footer>
      </div>
    </>
  );
}
