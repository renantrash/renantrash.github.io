function random_bgcolors() {
    setInterval( () => {
        let colors = [
        'blue',
        'red',
        'green',
    ];
    document.body.style.backgroundColor = colors[
        Math.floor(Math.random() * colors.length)];
    }, 1000)
}
window.onload = () => {
    random_bgcolors()
};
