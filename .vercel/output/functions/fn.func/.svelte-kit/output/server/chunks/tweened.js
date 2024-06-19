import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "./ssr.js";
import { P as Primary } from "./primary.js";
import { w as writable } from "./index2.js";
import { n as noop, c as assign, d as identity } from "./utils.js";
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
const Outline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "large" } = $$props;
  let { type = "default" } = $$props;
  let { link = "#" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  return `<a${add_attribute("href", link, 0)} type="button" class="${"text-dark-200 bg-transparent outline-dark-900 outline-2 justify-center outline text-center hover:translate-y-0.5 duration-200 ease-primary inline-flex hover:outline-dark-600 active:scale-95 font-semibold text-button rounded-full text-base " + escape(
    size === "large" ? "px-8 py-5" : size === "medium" ? "px-7 py-4" : "px-5 py-3",
    true
  )}">${slots.default ? slots.default({}) : ``}</a>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer id="footer" class="max-w-screen-2xl py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 place-content-center px-4 sm:px-8 mx-auto"><h2 class="font-primary font-semibold text-h5 sm:text-h4 md:text-h3 lg:text-h2 text-dark-200" data-svelte-h="svelte-zr7vq5">Chętny na współpracę?<br>Napisz do mnie!</h2> <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 mt-12 gap-8 md:gap-2"><div class="col-span-4 sm:col-span-6 md:col-span-8 lg:col-span-10"><a href="#" class="text-h6 md:text-h5 lg:text-h4 text-dark-200 pb-3 border-b-2 border-dark-200 font-semibold inline-flex items-center gap-2 md:gap-4" data-svelte-h="svelte-uh06j4"><span class="md:mt-1"><svg width="32" height="32" viewBox="0 0 32 32" class="w-4 md:w-6 lg:w-8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.25 3C14.5596 3 14 3.55964 14 4.25C14 4.94036 14.5596 5.5 15.25 5.5L24.7322 5.5L3.36612 26.866C2.87796 27.3542 2.87796 28.1457 3.36612 28.6338C3.85427 29.122 4.64573 29.122 5.13388 28.6338L26.5 7.26769L26.5 16.75C26.5 17.4404 27.0596 18 27.75 18C28.4404 18 29 17.4404 29 16.75L29 4.25C29 3.55964 28.4404 3 27.75 3L15.25 3Z" fill="#D1D1D1"></path></svg></span>
            kontakt@hubertkruk.pl</a> <div><div class="flex flex-col md:flex-row gap-4 mt-10 md:mt-14">${validate_component(Outline, "ButtonOutline").$$render($$result, { size: "small", link: "/contact#contact" }, {}, {
    default: () => {
      return `Formularz kontaktowy`;
    }
  })} ${validate_component(Primary, "ButtonPrimary").$$render($$result, { size: "small" }, {}, {
    default: () => {
      return `Oferta`;
    }
  })}</div></div></div> <div class="col-span-4 sm:col-span-6 md:col-span-4 lg:col-span-2" data-svelte-h="svelte-pu4b2n"><p class="text-p2 text-dark-400 font-semibold">Zaobserwuj mnie</p> <ul class="flex gap-6 flex-col mt-4"><li class="group"><a href="/contact" class="text-dark-200 rounded font-primary text-h6 font-semibold flex flex-row gap-0 group-hover:text-dark-50 ease-primary group overflow-hidden h-7"><div class="flex flex-col group-hover:translate-y-[-25px] transition duration-500 ease"><p>Behance</p><p>Behance</p></div></a></li> <li class="group"><a href="/contact" class="text-dark-200 rounded font-primary text-h6 font-semibold flex flex-row gap-0 group-hover:text-dark-50 ease-primary group overflow-hidden h-7"><div class="flex flex-col group-hover:translate-y-[-25px] transition duration-500 ease"><p>Dribbble</p><p>Dribbble</p></div></a></li> <li class="group"><a href="/contact" class="text-dark-200 rounded font-primary text-h6 font-semibold flex flex-row gap-0 group-hover:text-dark-50 ease-primary group overflow-hidden h-7"><div class="flex flex-col group-hover:translate-y-[-25px] transition duration-500 ease"><p>Instagram</p><p>Instagram</p></div></a></li> <li class="group"><a href="/contact" class="text-dark-200 rounded font-primary text-h6 font-semibold flex flex-row gap-0 group-hover:text-dark-50 ease-primary group overflow-hidden h-7"><div class="flex flex-col group-hover:translate-y-[-25px] transition duration-500 ease"><p>Github</p><p>Github</p></div></a></li> <li class="group"><a href="/contact" class="text-dark-200 rounded font-primary text-h6 font-semibold flex flex-row gap-0 group-hover:text-dark-50 ease-primary group overflow-hidden h-7"><div class="flex flex-col group-hover:translate-y-[-25px] transition duration-500 ease"><p>Linkedin</p><p>Linkedin</p></div></a></li></ul></div></div> <div class="flex items-center flex-row gap-10 pt-16 md:pt-10" data-svelte-h="svelte-4mdvrb"><svg width="73" height="46" viewBox="0 0 73 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M66.2138 31.2739L62.9465 35.8074C62.1732 36.8847 60.9203 37.5263 59.6014 37.5263C58.2825 37.5263 57.0296 36.8847 56.2562 35.8074L44.9798 20.1371L50.1234 8.47368H62.0233V0H51.2325V0.0121053L43.3492 17.8795L39.4105 26.8192L33.5775 40.0503V0H25.1846V32.9626L8.39287 9.64184V0H0V46H8.39287V13.7576L25.1786 37.0845V46H33.5715V45.9879L41.0351 29.0708L49.464 40.7826C51.814 44.045 55.6028 45.9939 59.6014 45.9939C63.6 45.9939 67.3888 44.045 69.7388 40.7826L73 36.2492L66.2138 31.2679V31.2739Z" fill="#B535FF"></path></svg> <p class="text-dark-400 text-caption font-semibold">Hubert Kruk 2024 @ Wszelkie prawa zastrzeżone</p></div></footer>`;
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function sineInOut(t) {
  return -0.5 * (Math.cos(Math.PI * t) - 1);
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = identity,
      interpolate = get_interpolator
    } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
export {
  Footer as F,
  Outline as O,
  sineInOut as s,
  tweened as t
};
