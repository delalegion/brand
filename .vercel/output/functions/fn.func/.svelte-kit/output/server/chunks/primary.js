import { c as create_ssr_component, e as escape, a as add_attribute } from "./ssr.js";
const Primary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "large" } = $$props;
  let { type = "default" } = $$props;
  let { link = "#" } = $$props;
  let { submit = "false" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.submit === void 0 && $$bindings.submit && submit !== void 0)
    $$bindings.submit(submit);
  return `${submit === "true" ? `<input type="submit" class="${"text-dark-950 bg-dark-200 text-center hover:translate-y-0.5 duration-200 ease-primary hover:bg-dark-300 active:scale-95 focus:outline-none font-semibold text-button rounded-full text-base " + escape(
    size === "large" ? "px-8 py-5" : size === "medium" ? "px-7 py-4" : "px-5 py-3",
    true
  )}" value="Wyślij zapytanie">` : `<a${add_attribute("href", link, 0)} type="button" class="${"text-dark-950 bg-dark-200 text-center hover:translate-y-0.5 duration-200 ease-primary hover:bg-dark-300 active:scale-95 focus:outline-none font-semibold text-button rounded-full text-base " + escape(
    size === "large" ? "px-8 py-5" : size === "medium" ? "px-7 py-4" : "px-5 py-3",
    true
  )}">${slots.default ? slots.default({}) : ``}</a>`}`;
});
export {
  Primary as P
};
