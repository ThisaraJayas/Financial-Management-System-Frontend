import React from "react";
import logiimg from '../assets/images/loginimg3.png'
import Header from "../components/common/Header";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
        <Header/>
      <section class="bg-white">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div class="flex items-center justify-center px-4 py-4 bg-white sm:px-4 lg:px-4 sm:py-4 lg:py-0">
            <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
               Login
              </h2>
              <p class="mt-2 text-base text-gray-600">
                Don't have an account?{" "}
                <Link to={"/register"}><a
                  class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
                >
                  Sign-Up
                </a></Link>
              </p>

              <form class="mt-4">
                <div class="space-y-5">
                  <div>
                    <label for="" class="text-base font-medium text-gray-900">
                      {" "}
                      Email address{" "}
                    </label>
                    <div class="mt-2">
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Enter email to get started"
                        class="block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="" class="text-base font-medium text-gray-900">
                      {" "}
                      Password{" "}
                    </label>
                    <div class="mt-2">
                      <input
                        type="password"
                        name=""
                        id=""
                        placeholder="Enter your password"
                        class="block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      name="agree"
                      id="agree"
                      class="w-4 h-4 text-blue-600 bg-white border-gray-200 rounded"
                    />

                    <label
                      for="agree"
                      class="ml-3 text-sm font-medium text-gray-500"
                    >
                      I agree to Postcraft’s{" "}
                      <a
                        href="#"
                        title=""
                        class="text-blue-600 hover:text-blue-700 hover:underline"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        title=""
                        class="text-blue-600 hover:text-blue-700 hover:underline"
                      >
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      class="inline-flex items-center justify-center w-full px-3 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                    >
                      Create free account
                    </button>
                  </div>
                </div>
              </form>

              <div class="mt-3 space-y-3">
                <button
                  type="button"
                  class="relative inline-flex items-center justify-center w-full px-3 py-3 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                >
                  <div class="absolute inset-y-0 left-0 p-4">
                    <svg
                      class="w-6 h-6 text-rose-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                    </svg>
                  </div>
                  Sign up with Google
                </button>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center px-4 py-4 sm:py-4 lg:py-0 bg-gray-50 sm:px-4 lg:px-0">
            <div>
              <img class="w-full mx-auto" src={logiimg} alt="" />

              <div class="w-full max-w-md mx-auto xl:max-w-xl">
                <h3 class="text-4xl font-bold text-center text-black">
                  Maintain Your Potfolio
                </h3>
                <p class="leading-relaxed text-center text-gray-500 mt-2.5">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
