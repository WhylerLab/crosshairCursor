// create const for zone where the cursor needs to be shown and for cursor data
const zone = document.querySelector('.otherCursor');
const pig = document.querySelector('.pigcursor');

// cursor is initial display: "none"; if cursor enters zone, cursor will be apperererere
zone.addEventListener('mouseenter', () => {
    pig.style.display = "block";
})

//zone leave = cursor gone :(
zone.addEventListener('mouseleave', () => {
    pig.style.display = "none";
})

// track x/y coordinates from the cursor and transforms the style to the maching px from the pig
// NICE TO KNOW translate3d uses the GPU for rendering, save this info for later
//nevermind css will-change: transform; <- better way & official switch back to translate (2D)
zone.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;
    pig.style.transform = `translate(${x}px, ${y}px)`;
})
