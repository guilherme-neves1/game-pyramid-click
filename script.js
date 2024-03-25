const pupil = document.getElementById("pupil");

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + "%";
  const y = (event.clientY * 100) / window.innerHeight + "%";

  pupil.style.left = x;
  pupil.style.top = y;

  pupil.style.transform = `translate( -${x}, -${y}`;
};
