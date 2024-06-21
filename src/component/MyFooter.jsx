// eslint-disable-next-line no-unused-vars
import React from "react";
import { Footer } from "flowbite-react";
import {
  // eslint-disable-next-line no-unused-vars
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const MyFooter = () => {
  return (
    <Footer bgDark>
      <div className="w-full text-white">
        <div className="text-white grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div className="text-white">
            <h2 className="md:cursor-pointer font-semibold font-serif text-2xl md:text-3xl h-15">
              Warld<span className="text-[gold]">Effect</span>
            </h2>
          </div>
          <div>
            <Footer.Title title="help center" className="text-white" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-white">
                Discord Server
              </Footer.Link>
              <Footer.Link href="#" className="text-white">
                Twitter
              </Footer.Link>
              <Footer.Link href="#" className="text-white">
                Facebook
              </Footer.Link>
              <Footer.Link href="#" className="text-white">
                Contact Us
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" className="text-white" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-white">
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="#" className="text-white">
                Licensing
              </Footer.Link>
              <Footer.Link href="#" className="text-white">
                Terms &amp; Conditions
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" className="text-white" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-white">
                iOS
              </Footer.Link>
              <Footer.Link href="#" className="text-white">
                Android
              </Footer.Link>
              <Footer.Link href="#" className="text-white">
                Windows
              </Footer.Link>
              <Footer.Link href="#" className="text-white">
                MacOS
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full text-white bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="WarldEffect™"
            year={2024}
            className="text-white"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="text-white" />
            <Footer.Icon href="#" icon={BsInstagram} className="text-white" />
            <Footer.Icon href="#" icon={BsTwitter} className="text-white" />
            <Footer.Icon href="#" icon={BsGithub} className="text-white" />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
