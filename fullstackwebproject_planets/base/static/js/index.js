function manipulation() {


        // active Menu (BurgerBar)
        const burgerMenu = document.querySelector('.burger-bar')

        burgerMenu.addEventListener('click', () => {
            document.querySelector('.menubar').classList.toggle('active');
            if(burgerMenu.src.includes('Group.png')) {
                burgerMenu.src = '/static/images/dasdw.png';
            } else {
            burgerMenu.src = '/static/images/Group.png';
        }
        });

    
    
    
        // buttons manipulation with Colors pc / Ipad version

    const tx1 = document.querySelector('.tx1');
    const tx2 = document.querySelector('.tx2');
    const tx3 = document.querySelector('.tx3');
    let lastclicked = null;

    tx1.style.display = 'block';
    tx2.style.display = 'none';
    tx3.style.display = 'none';

    const allButtons = document.querySelectorAll('.anotherbutton2');

    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', () => {

            if (lastclicked) {
                lastclicked.style.backgroundColor = 'rgba(7, 7, 36, 1)';
            }
            allButtons[i].style.backgroundColor = allButtons[i].dataset.color
            lastclicked = allButtons[i];

            tx1.style.display = i === 0 ? 'block' : 'none';
            tx2.style.display = i === 1 ? 'block' : 'none';
            tx3.style.display = i === 2 ? 'block' : 'none';

            if(i === 0) {
            document.querySelector('.planet-2').classList.remove('active2')
            document.querySelector('.planet-3').classList.remove('active3')
            } else if(i === 1) {
            document.querySelector('.planet-2').classList.add('active2')
            document.querySelector('.planet-3').classList.remove('active3')
            } else if(i === 2) {
            document.querySelector('.planet-2').classList.remove('active2')
            document.querySelector('.planet-3').classList.add('active3')
            }
        });
    }
        
        
        // buttons manipulation with Colors phone version
        let lastclicked2 = null;
        const anotherbuttons = document.querySelectorAll('.anotherbutton');
        anotherbuttons.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            if (lastclicked2) {
                lastclicked2.style.borderBottom = `3px solid rgba(7, 7, 36, 1)`;
            }
            btn.style.borderBottom = `3px solid ${btn.dataset.color}`;
            lastclicked2 = btn;

            tx1.style.display = i === 0 ? 'block' : 'none';
            tx2.style.display = i === 1 ? 'block' : 'none';
            tx3.style.display = i === 2 ? 'block' : 'none';

            document.querySelector('.planet-2').classList.toggle('active2', i === 1);
            document.querySelector('.planet-3').classList.toggle('active3', i === 2);
    });
});
allButtons[0].click();
anotherbuttons[0].click();



        // navbar color manipulation
        const allNavButtons = document.querySelectorAll('.planet-links');

        allNavButtons.forEach(btn => {
            const color = btn.dataset.color;

            btn.addEventListener('mouseenter', () => {
                btn.classList.add('hovered');
                btn.style.setProperty('--underline-color', color);
            });

            btn.addEventListener('mouseleave', () => {
                btn.classList.remove('hovered');
            });
        });

        // menubar planets color
        const allPlanetCircles = document.querySelectorAll('.divplanet');
        for(let i = 0; i < allPlanetCircles.length; i++) {
            allPlanetCircles[i].style.backgroundColor = allPlanetCircles[i].dataset.color;
        }

    
}

// fixing images on load and fixing that widths
window.addEventListener('load', () => {

    const imagesfix = document.querySelectorAll('.invisible');
    const planet2Fixer = document.querySelector('.planet-2')

    imagesfix.forEach(img => {
        if(img.naturalWidth > 500) {
        img.style.width = '500px';
        img.style.height = 'auto';
        }
        if(img.naturalWidth === 668) {
            planet2Fixer.style.height = '66%';
            planet2Fixer.style.transform = 'translateX(-85px)';
            if(window.innerWidth < 1200) {
                planet2Fixer.style.height = '66%';
                planet2Fixer.style.transform = 'translateX(-20px)';
        }
            if(window.innerWidth > 1000 && window.innerWidth < 1200) {
                planet2Fixer.style.height = '66%';
                planet2Fixer.style.transform = 'translateX(-45px)';
        }
        }
  });

})

document.addEventListener('DOMContentLoaded', () => {
    manipulation();
});