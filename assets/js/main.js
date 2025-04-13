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