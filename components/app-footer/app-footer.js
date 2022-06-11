class AppFooter extends HTMLElement {
    static get observedAttributes() {
        return [];
    }

    constructor() { super(); }

    connectedCallback() {
        this.innerHTML = `
        <section class="bg-dark text-light">
            <div class="container">
                <div class="row py-3">
                    <div class="col-3">
                        <img class="img img-fluid w-100" src="./img/company-logo.png">
                    </div>
                    <div class="col-9 pl-0">
                        <div class="row">
                            <div class="col">
                                <h4>Career Discover</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <i class="icofont-linkedin"></i>
                                <i class="icofont-facebook"></i>
                                <i class="icofont-twitter"></i>
                                <i class="icofont-instagram"></i>
                                <i class="icofont-youtube"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col text-light py-3">
                        <p>Copyright 2022 © <b><i>Career Discover</i></b></p>
                    </div>
                </div>
            </div>
        </section>
        `;
    }

    attributeChangedCallback(name, oldValue, newValue) { }
}

customElements.define('app-footer', AppFooter);
