export function initProjectImageFallback(image) {
  image.addEventListener(
    "error",
    () => {
      image.hidden = true;
    },
    { once: true },
  );
}
