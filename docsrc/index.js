import "./style.css";
import * as fata from "../src/index";

function bind(id, callback) {
  const el = document.querySelector("#" + id);
  callback(el);
  const button = document.querySelector("#" + id + "-btn");
  button.addEventListener("click", () => callback(el));
}

// string
bind("fata-string", function(el) {
  el.value = fata.string({ min: 1, max: 30 });
});

// integer
bind("fata-integer", function(el) {
  el.value = String(fata.integer({ min: -100, max: 100 }));
});

// float
bind("fata-float", function(el) {
  el.value = fata.float({ min: -1, max: 1 }).toFixed(2);
});

// boolean
bind("fata-boolean", function(el) {
  el.value = String(fata.boolean());
});

// image
bind("fata-image", function(el) {
  el.src = fata.image();
});

// array
bind("fata-array", function(el) {
  const value = fata.array(() => {
    return {
      name: fata.string({ min: 1, max: 3 }),
      value: fata.integer({ min: -10, max: 10 })
    };
  });

  el.value = JSON.stringify(value, null, 2);
});

// datetime
bind("fata-datetime", function(el) {
  el.value = fata.datetime();
});
