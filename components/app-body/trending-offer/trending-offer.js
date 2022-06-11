class TrendingOffer extends HTMLElement {
    constructor() { super(); }
    connectedCallback() {
        this.innerHTML = `
        <div class="container">
            <div class="row py-5">
                <div class="col py-3 text-light">
                    <img class="img img-fluid w-100" src="./img/trendingoffer/img-0.png">
                    <h4 class="d-flex justify-content-center pt-5">Super Career Fairs</h4>
                    <p>Super Fairs are a new initiative of <b><i>Career Discover</i></b> to help students, employers and universities connect and interact virtually through a series of ultra relevant events. Super Fairs are <b><i>completely free</i></b> to students, employers and universities.</p>
                    <button class="btn btn-warning">Learn more</button>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('trending-offer', TrendingOffer);
