const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart', (e) => {
    console.log("Dragstart");
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
})

imgBox.addEventListener('dragend', (e) => {
    console.log("Dragend");
    e.target.className = 'imgBox';
})

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log("Dragover");
    })

    whiteBox.addEventListener('dragenter', (e) => {
        console.log("Dragenter");
        e.target.className += ' dashed';
    })

    whiteBox.addEventListener('dragleave', (e) => {
        console.log("Dragleave");
        e.target.className = 'whiteBox';
    })

    whiteBox.addEventListener('drop', (e) => {
        console.log("drop");
        e.target.append(imgBox);
    })
}