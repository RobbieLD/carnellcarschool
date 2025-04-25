/* This is the source of the events */
/* Update this to add events */

// const announcements = [
//     {
//         name: 'Track Day',
//         date:  

//     }
// ]

/* dont change anything down here */

const setup = () => {
    setCopyrightYear();
}

const setCopyrightYear = () => {
    const el = document.getElementById("copyright");
    const year = new Date().getFullYear();
    el.innerHTML = year;
}

// Setup everything
setup();