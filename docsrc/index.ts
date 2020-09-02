import "./style.css";
import * as fata from "../src/index";

function connect(id: string, callback: (el: HTMLElement) => void) {
  const el = document.querySelector(`#${id}`) as HTMLElement;
  callback(el);
  const button = document.querySelector(`#${id}-btn`) as HTMLButtonElement;
  button.addEventListener("click", () => callback(el));
}

// string
connect("fata-string", function(el) {
  (el as HTMLInputElement).value = fata.string({ min: 1, max: 20 });
});

// integer
connect("fata-integer", function(el) {
  (el as HTMLInputElement).value = String(
    fata.integer({ min: -100, max: 100 })
  );
});

// float
connect("fata-float", function(el) {
  (el as HTMLInputElement).value = fata.float({ min: -1, max: 1 }).toFixed(2);
});

// boolean
connect("fata-boolean", function(el) {
  (el as HTMLInputElement).value = String(fata.boolean());
});

// image
connect("fata-image", function(el) {
  (el as HTMLImageElement).src = fata.image();
});

// array
connect("fata-array", function(el) {
  const value = fata.array(() => {
    return {
      name: fata.string({ min: 1, max: 3 }),
      value: fata.integer({ min: -10, max: 10 })
    };
  });

  (el as HTMLTextAreaElement).value = JSON.stringify(value, null, 2);
});

// datetime
connect("fata-datetime", function(el) {
  (el as HTMLInputElement).value = fata.datetime();
});
