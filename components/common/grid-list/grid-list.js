class GridList extends HTMLElement {
    _itemList;
    itemListEle;
    set itemList(value) { this._itemList = value; this.render(); }
    get itemList() { return this._itemList; }
    constructor() { super(); }

    connectedCallback() {
        this.innerHTML = `
            <div class="d-flex overflow-auto item-list my-3"></div>
        `;
        this.itemListEle = this.getElementsByClassName('item-list')[0];
        this.dispatchEvent(new CustomEvent('initialized'));
    }

    render() {
        this.itemListEle.innerHTML = '';
        if (this.itemList.length > 0) {
            this.itemList.forEach(item => {
                const card = document.createElement('app-card');
                card.addEventListener('initialized', () => {
                    card.cardInfo = item;
                });
                this.itemListEle.appendChild(card);
            });
        }
    }
}

customElements.define('grid-list', GridList);
