class AppCard extends HTMLElement {
    _cardInfo;
    _cardEle;
    _cardHeaderEle;
    _cardImgEle;
    _cardTitleEle;
    _cardDescEle;

    set cardInfo(value) { this._cardInfo = value; this.render(); }
    get cardInfo() { return this._cardInfo; }

    constructor() { super(); }

    connectedCallback() {
        this.innerHTML = `
        <div class="card m-1">
            <div class="card-header d-none">
                <img class="card-img d-none">
            </div>
            <div class="card-body">
                <h5 class="card-title d-none text-nowrap"></h5>
                <p class="card-desc d-none"></p>
                <button type="button" class="btn btn-link ml-auto text-nowrap">Read more >></button>
            </div>
        </div>
        `;
        this._cardEle = this.getElementsByClassName('card')[0];
        this._cardHeaderEle = this.getElementsByClassName('card-header')[0];
        this._cardImgEle = this.getElementsByClassName('card-img')[0];
        this._cardTitleEle = this.getElementsByClassName('card-title')[0];
        this._cardDescEle = this.getElementsByClassName('card-desc')[0];
        this.dispatchEvent(new CustomEvent('initialized'));
    }

    render() {
        if (this._cardEle) {
            if (this.cardInfo['title']) {
                this._cardTitleEle.classList.remove('d-none');
                this._cardTitleEle.innerText = this.cardInfo['title'];
            }
            if (this.cardInfo['desc']) {
                this._cardDescEle.classList.remove('d-none');
                this._cardDescEle.innerText = this.cardInfo['desc'];
            }
            if (this.cardInfo['imgSrc']) {
                this._cardHeaderEle.classList.remove('d-none');
                this._cardImgEle.classList.remove('d-none');
                this._cardImgEle.src = this.cardInfo['imgSrc'];
            }
        }
    }
}

customElements.define('app-card', AppCard);
