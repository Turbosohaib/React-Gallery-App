import React from "react";


function Navbar() {
    return (
        <nav class="relative flex w-full flex-wrap items-center justify-between bg-neutral-900 py-3 text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start" data-te-navbar-ref="">
            <div class="flex w-full flex-wrap items-center justify-between px-6">
                <button aria-controls="navbarSupportedContent4" aria-expanded="false" aria-label="Toggle navigation" class="block border-0 bg-transparent py-2 px-2.5 text-neutral-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden" data-te-collapse-init="" data-te-target="#navbarSupportedContent4" type="button"><span class="[&&gt;svg]:w-7"><svg class="h-7 w-7" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" fill-rule="evenodd"></path></svg></span></button>
                <div class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto" data-te-collapse-item="" id="navbarSupportedContent4">
                    <a class="pr-2 text-xl font-semibold text-white" href="#"><h1>Image Galley</h1></a>
                </div>
                <div class="relative flex items-center">
                    <a class="mr-4 text-white opacity-60 hover:opacity-80 focus:opacity-80" href="#"><span class="[&&gt;svg]:w-5"><svg class="h-5 w-5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path></svg></span></a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;