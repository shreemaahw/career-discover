class AppCarousel extends HTMLElement {
    static get observedAttributes() {
        return [];
    }

    constructor() { super(); }

    connectedCallback() {
        this.innerHTML = `
        <div class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100 img img-fluid" src="./img/img-0.jpg">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 img img-fluid" src="./img/img-1.png">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 img img-fluid" src="./img/img-2.jpg">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 img img-fluid" src="./img/nursing.jpg">
                </div>
            </div>
        </div>
        `;
    }

    attributeChangedCallback(name, oldValue, newValue) { }
}

customElements.define('app-carousel', AppCarousel);
