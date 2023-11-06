const items = document.querySelectorAll('.item');

const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return;
    it.clicked = false;
  });
  gsap.to(items, {
    width: item.clicked ? '15vw' : '8vw',
    duration: 2,
    ease: 'elastic(1, .6)' });


  item.clicked = !item.clicked;
  gsap.to(item, {
    width: item.clicked ? '42vw' : '15vw',
    duration: 2.5,
    ease: 'elastic(1, .3)' });

};

items.forEach((item, i) => {
  item.clicked = false;
  item.addEventListener('click', () => expand(item, i));
});

const links = document.querySelectorAll('a.delayed');

links.forEach((link) => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    var href = this.getAttribute('href');
    setTimeout(function() {
      window.location.href = href;
    }, 1100);
  });
});
