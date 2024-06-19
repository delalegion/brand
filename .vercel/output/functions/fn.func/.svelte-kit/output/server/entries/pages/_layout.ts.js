import { r as registerLocaleLoader, i as init } from "../../chunks/runtime.js";
const defaultLocale = "pl";
registerLocaleLoader("en", () => import("../../chunks/en.js"));
registerLocaleLoader("pl", () => import("../../chunks/pl.js"));
init({
  fallbackLocale: defaultLocale,
  initialLocale: defaultLocale
});
const load = async () => {
};
export {
  load
};
