// 콜라를 만들어서 뿌려주는 js
// 객체 지향 코드로 만들어보자.

class ColaGenerator {
    constructor() {
        // 콜라 객체를 초기화
        this.itemList = document.querySelector('.cola-list');
    }

    async setup() {
        const response = await this.loadData(); // 이 this가 가리키는 것은 인스턴스 
        this.colaFactory(response);
    }

    async loadData() {
        // 콜라 관련 데이터를 로드
        try {
            const response = await fetch('./items.json');
            console.log(response);

            if (!response.ok) {
                throw new Error('HTTP ERROR!!! : ' + response.status);
            }
            return await response.json();

        } catch (error) {
            console.error('콜라데이터를 로딩하는 중에 문제가 발생했습니다. : ' + error);
        }
    }

    // <li>
    //   <button type="button" class="btn-cola">
    //     <img src="./img/cola-cool.png" alt="" />
    //     <span class="cola-name">Cool_Cola</span>
    //     <strong class="cola-price">1000원</strong>
    //   </button>
    // </li>

    // 콜라의 템플릿 코드 
    colaFactory(data) {
        const docFrag = new DocumentFragment();
        data.forEach((el) => {
            const item = document.createElement('li');
            const itemTemplate = `<button type="button" class="btn-cola" data-item="${el.name}" 
            data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
            <img src="./img/${el.img}" alt="${el.name}" />
            <span class="cola-name">${el.name}</span>
            <strong class="cola-price">${el.cost}원</strong>
          </button>`
            item.innerHTML = itemTemplate;
            docFrag.append(item);
        });

        this.itemList.append(docFrag);
    }

}

// 여기서 딱 하나의 모듈만 내보낼거다.
export default ColaGenerator;