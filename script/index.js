var watchTrailler = document.getElementById('watchTrailler')

const myPopup = new Popup({
    id: "my-popup",
    title:"",
    css: `
    .popup {
        height:200px !important;
        width:300px !important;
        padding:0px !important;
        margin:0px !important;
    }`,
    content: `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/L6P3nI6VnlY?si=7u-u8EOJFWLvqxBa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
});

watchTrailler.addEventListener('click', () => {
    myPopup.show()
})
