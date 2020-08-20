const btn = document.getQuerySelector('button');

const clickHandler = (e) => {
  console.log(e.target);
};

btn.addEventListener('click', clickHandler);
