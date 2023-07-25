const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      const container = entry.target.querySelector('content-container-2')

      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('container-animation-left');
        return;
      }
    });
  });
  
  observer.observe(document.querySelector('.content-container-2'));



  const bannerEl = document.querySelector(".animation-banner");

bannerEl.addEventListener("mouseover", (event)=>{
const x = (event.pageX - bannerEl.offsetLeft); 
const y = (event.pageY - bannerEl.offsetTop);

bannerEl.style.setProperty("--xPos", x + "px")
bannerEl.style.setProperty("--yPos", y + "px")

})