const pupil = document.getElementById("pupil");

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + "%";
  const y = (event.clientY * 100) / window.innerHeight + "%";

  pupil.style.left = x;
  pupil.style.top = y;

  pupil.style.transform = `translate( -${x}, -${y}`;
};

function handleClick(event) {
  const x = (event.clientX * 100) / window.innerWidth;
  const y = (event.clientY * 100) / window.innerHeight;

  console.log(`Clique na Posição: ${x}, ${y}`);
}

window.addEventListener("click", handleClick);
