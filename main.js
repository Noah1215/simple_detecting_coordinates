const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

addEventListener("load", () => {
  const targetRect = target.getBoundingClientRect();
  const tartgetHalfWidth = targetRect.width / 2;
  const tartgetHalfHeight = targetRect.height / 2;

  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // vertical.style.left = `${x}px`;
    // horizontal.style.top = `${y}px`;
    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;

    // target.style.left = `${x}px`;
    // target.style.top = `${y}px`;
    const newX = x - tartgetHalfWidth;
    const newY = y - tartgetHalfHeight;
    target.style.transform = `translate(${newX}px, ${newY}px)`;

    //   tag.style.left = `${x}px`;
    //   tag.style.top = `${y}px`;
    tag.style.transform = `translate(${x}px, ${y}px)`;

    tag.innerHTML = `${x}px ,${y}px`;
  });
});
