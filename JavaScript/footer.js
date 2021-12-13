class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <p class="footer__copyright">
                    &copy 2021 Polina Tceneva
                </p>
            </footer>
        `
    }
}

customElements.define('ptceneva__footer', MyFooter)