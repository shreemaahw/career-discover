class AppHeader extends HTMLElement {
    constructor() { super(); }
    connectedCallback() {
        this.innerHTML = `
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md px-0 px-md-3">
                        <app-carousel></app-carousel>
                    </div>
                    <div class="col-sm-12 col-md d-flex flex-column justify-content-center py-3">
                        <h4 class="text-dark-primary">Where incredible careers begin</h4>
                        <p>Student engagement and recruiting, reimagined.</p>
                        <button class="btn-info btn-sm btn ml-auto">Get in touch</button>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('app-header', AppHeader);
