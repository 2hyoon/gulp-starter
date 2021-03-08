const activateButton = () => {
  if (!document.querySelector("button")) {
    return;
  }

  const btn = document.querySelector("button");

  const clickHandler = (e) => {
    console.log(e.target.innerText);
  };

  btn.addEventListener('click', clickHandler);
}

export default activateButton;
activateButton();

