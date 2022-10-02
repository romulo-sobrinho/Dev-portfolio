// Init-hidden
const observer = new IntersectionObserver( entries => {
  Array.from(entries).forEach( entry => {
    if (entry.intersectionRatio >= 1) {
      entry.target.classList.add('init-hidden-off');
    }
  })
}, {
  threshold: 1
})

Array.from(document.querySelectorAll('.init-hidden')).forEach( element => {
  observer.observe(element)
})