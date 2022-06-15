

  const scrollDemo = document.querySelector("#bodys");
  const output = document.querySelector(".output");

  window.addEventListener(screenX).addEventListener("scroll", event => {
      let top= `scrollTop: ${scrollDemo.scrollTop} <br>
                          scrollLeft: ${scrollDemo.scrollLeft} `;
                          console.log(top);
  }, { passive: true });







