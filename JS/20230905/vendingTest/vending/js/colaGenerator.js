// 콜라를 생성하는 js 

class ColaGenerator {
    constructor() {
        // 콜라 객체를 초기화 
        this.itemList = document.querySelector('.cola-list'); //ul
    }

    async setup() {
        const response = await this.loadData();
        this.colaFactory(response);
    }

    async loadData() {
        try {
            const response = await fetch('./items.json');
            console.log(response);

            if (!response.ok) {
                throw new Error('HTTP ERROR: ', response.status);
            }
            return await response.json();

        } catch (error) {
            console.error('콜라데이터를 로딩하는 중에 문제가 발생했습니다. : ' + error);
        }
    }

    colaFactory(data) {
        const docFrag = new DocumentFragment();
        data.forEach((el) => {
            const item = document.createElement('li');
            const itemTemplate =
                `
            <button type = "button" class="btn-cola"
            data-item="${el.name}" data-count="${el.count}"
            data-img="${el.img}" data-price="${el.cost}">
            <img src="./img/${el.img}" alt="${el.name}" />
            <span class="cola-name">${el.name}</span>
            <strong class="cola-price">${el.cost}원</strong>
            </button>
            `
            item.innerHTML = itemTemplate;
            docFrag.append(item);
        });

        this.itemList.append(docFrag);
    }
}

export default ColaGenerator;