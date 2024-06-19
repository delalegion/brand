import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { P as Primary } from "../../chunks/primary.js";
import gsap from "gsap";
const app = "";
const Logo = "/_app/immutable/assets/logo.2cdf076a.svg";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  gsap.timeline({ paused: true });
  return `<nav><div class="max-w-[1920px] px-4 md:px-8 flex flex-wrap justify-between mx-auto p-4 z-30"><a href="/" class="flex items-center z-30 relative"><img${add_attribute("src", Logo, 0)} class="h-14 mr-3" alt="Logo of Hubert Kruk"></a> <button data-collapse-toggle="navbar-default" type="button" id="btn-menu" class="z-30 relative inline-flex bg-dark-800 items-center p-4 w-16 h-16 justify-center text-sm text-gray-50 rounded-full md:hidden active:scale-95 hover:translate-y-0.5 duration-200 focus:outline-none dark:text-gray-50 dark:hover:bg-dark-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" data-svelte-h="svelte-18hm9ow"><span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button> <div class="w-full md:w-auto" id="navbar-default"><ul id="menu-desktop" class="z-40 hidden py-2 relative md:flex flex-col p-4 gap-4 mt-4 rounded-lg md:flex-row md:space-x-4 xl:space-x-8 md:mt-0 items-start md:justify-center md:items-center" data-svelte-h="svelte-kr2whg"><li><a href="#projects" class="link block px-4 xl:px-7 text-dark-200 rounded font-primary text-h5 md:text-p1 font-medium flex flex-row gap-0 group-hover:text-dark-100 ease-primary group overflow-hidden h-6"><span class="text-caption text-dark-400 mr-2 transition duration-300 ease group-hover:text-dark-200 mt-0.5 font-semibold">01</span> <div class="flex flex-col group-hover:translate-y-[-24px] transition duration-500 ease"><p>Portfolio</p><p>Portfolio</p></div></a></li> <span class="font-regular text-[14px] text-dark-400 flex items-center select-none hidden md:flex">//</span> <li><a href="#offer" class="link block px-4 xl:px-7 text-dark-200 rounded font-primary text-h5 md:text-p1 font-medium flex flex-row gap-0 group-hover:text-dark-100 ease-primary group overflow-hidden h-6"><span class="text-caption text-dark-400 mr-2 transition duration-300 ease group-hover:text-dark-200 mt-0.5 font-semibold">02</span> <div class="flex flex-col group-hover:translate-y-[-24px] transition duration-500 ease"><p>Oferta</p><p>Oferta</p></div></a></li> <span class="font-regular text-[14px] text-dark-400 flex items-center select-none hidden md:flex">//</span> <li><a href="/contact" class="link block px-4 xl:px-7 text-dark-200 rounded font-primary text-h5 md:text-p1 font-medium flex flex-row gap-0 group-hover:text-dark-100 ease-primary group overflow-hidden h-6"><span class="text-caption text-dark-400 mr-2 transition duration-300 ease group-hover:text-dark-200 mt-0.5 font-semibold">03</span> <div class="flex flex-col group-hover:translate-y-[-24px] transition duration-500 ease"><p>Kontakt</p><p>Kontakt</p></div></a></li></ul> <ul id="menu" class="z-20 md:hidden absolute md:right-0 top-20 left-0 md:top-0 md:relative flex flex-col p-4 gap-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-4 xl:space-x-8 md:mt-0 items-start md:justify-center md:items-center"><li class="group"><a href="/contact" id="menu-item" class="opacity-0 md:opacity-100 relative top-3.5 block py-2 px-4 xl:px-7 text-dark-200 rounded font-primary text-h5 md:text-p1 font-medium flex flex-row gap-0 group-hover:text-dark-100 transition-colors duration-200 ease-primary" data-svelte-h="svelte-1owghel"><span class="text-caption text-dark-400 mr-2 mt-0.5 font-semibold">01</span> Oferta</a></li> <span class="font-regular text-[14px] text-dark-400 flex items-center select-none hidden md:flex" data-svelte-h="svelte-caltbp">//</span> <li class="group"><a href="/" id="menu-item" class="opacity-0 md:opacity-100 relative top-3.5 block py-2 px-4 xl:px-7 text-dark-200 rounded font-primary text-h5 md:text-p1 font-medium flex flex-row gap-0 group-hover:text-dark-100 transition-colors duration-200 ease-primary" data-svelte-h="svelte-4iki2l"><span class="text-caption text-dark-400 mr-2 mt-0.5 font-semibold">02</span> Portfolio</a></li> <span class="font-regular text-[14px] text-dark-400 flex items-center select-none hidden md:flex" data-svelte-h="svelte-caltbp">//</span> <li class="group"><a href="/contact" id="menu-item" class="opacity-0 md:opacity-100 relative top-3.5 block py-2 px-4 xl:px-7 text-dark-200 rounded font-primary text-h5 md:text-p1 font-medium flex flex-row gap-0 group-hover:text-dark-100 transition-colors duration-200 ease-primary" data-svelte-h="svelte-w62gac"><span class="text-caption text-dark-400 mr-2 mt-0.5 font-semibold">03</span> Kontakt</a></li> <li class="group flex flex-row gap-6 mt-4" data-svelte-h="svelte-1o2b2n"><a href="#" id="menu-item" class="opacity-0 md:opacity-100 relative top-3.5 block py-2 px-4 xl:px-7 text-dark-200 rounded font-primary text-h5 md:text-p1 font-medium flex flex-row gap-0 group-hover:text-dark-100 transition-colors duration-200 ease-primary">PL</a> <a href="#" id="menu-item" class="opacity-0 md:opacity-100 relative top-3.5 block py-2 px-4 xl:px-7 text-dark-200 rounded font-primary text-h5 md:text-p1 font-medium flex flex-row gap-0 group-hover:text-dark-100 transition-colors duration-200 ease-primary">EN</a></li></ul> <div id="menu-bg" class="bg-dark-900 absolute h-0 top-0 left-0 right-0 z-10"></div></div> <div class="hidden w-full lg:block md:w-auto" id="navbar-default" data-svelte-h="svelte-19p9srp"><ul class="flex flex-col py-2 mt-4 rounded-lg md:flex-row space-x-2 md:space-x-4 xl:space-x-8 md:mt-0 justify-center items-center"><li><a href="/contact" class="link block px-4 xl:px-7 text-dark-200 rounded font-primary text-h5 md:text-p1 font-medium flex flex-row gap-0 group-hover:text-dark-100 ease-primary group overflow-hidden h-6"><div class="flex flex-col group-hover:translate-y-[-24px] transition duration-500 ease"><p>PL</p><p>PL</p></div></a></li> <li><a href="/contact" class="link block px-4 xl:px-7 text-dark-400 rounded font-primary text-h5 md:text-p1 font-medium flex flex-row gap-0 group-hover:text-dark-100 ease-primary group overflow-hidden h-6"><div class="flex flex-col group-hover:translate-y-[-24px] transition duration-500 ease"><p>EN</p><p>EN</p></div></a></li></ul></div> <div class="hidden w-full lg:block md:w-auto" id="navbar-default">${validate_component(Primary, "ButtonPrimary").$$render($$result, { size: "medium", link: "/contact" }, {}, {
    default: () => {
      return `Zrealizujmy projekt`;
    }
  })}</div></div></nav>`;
});
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const onNavigate = /* @__PURE__ */ client_method("on_navigate");
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  onNavigate((navigation) => {
    if (!document.startViewTransition)
      return;
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
  return ` ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main data-barba="wrapper">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
