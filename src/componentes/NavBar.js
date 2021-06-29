import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header class="bg-red-500 w-screen">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div class="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div class="flex items-center">
            <Link to="/">
              <span class="sr-only">Workflow</span>
              <img
                class="h-10 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt=""
              />
            </Link>
            <div class="hidden ml-10 space-x-8 lg:block">
              <Link
                to="/"
                class="text-base font-medium text-white hover:text-indigo-50"
                key="Solutions"
              >
                Home
              </Link>
            </div>
          </div>
          <div class="ml-10 space-x-4">
            <Link
              to="/Sign-in"
              class="inline-block bg-blue-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </Link>
            <Link
              to="/Sign-up"
              class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Sign up
            </Link>
          </div>
        </div>
        <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          <Link
            to="/"
            class="text-base font-medium text-white hover:text-indigo-50"
            key="Solutions"
          >
            Solutions
          </Link>

          <Link
            to="/"
            class="text-base font-medium text-white hover:text-indigo-50"
            key="Pricing"
          >
            Pricing
          </Link>

          <Link
            to="/"
            class="text-base font-medium text-white hover:text-indigo-50"
            key="Docs"
          >
            Docs
          </Link>

          <Link
            to="#"
            class="text-base font-medium text-white hover:text-indigo-50"
            key="Company"
          >
            Company
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
