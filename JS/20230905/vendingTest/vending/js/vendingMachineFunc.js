class VendingMachineFunc {
    constructor() {
        // section 1 
        const vMachine = document.querySelector('.section1');
        this.balance = vMachine.querySelector('.bg-box p');;
        this.itemList = vMachine.querySelector('.cola-list');
        this.inputCostEl = vMachine.querySelector('#input-money');
        this.btnPut = vMachine.querySelector('#input-money+.btn')
        this.btnReturn = vMachine.querySelector('.bg-box+.btn')
        this.btnGet = vMachine.querySelector('.btn-get')
        this.stagedList = vMachine.querySelector('.get-list')

        // section 2
        const myInfo = document.querySelector('.section2')
        this.myMoney = myInfo.querySelector('.bg-box p')

        // section 3
        const getInfo = document.querySelector('.section3')
        this.getList = getInfo.querySelector('.get-list');
        this.txtTotal = getInfo.querySelector('.total-price')
    }

    setup() {
        this.bindEvents();
    }

    stagedItemGenerator(target) {
        const stagedItem = document.createElement('li');
        stagedItem.dataset.item = target.dataset.item;
        stagedItem.dataset.img = target.dataset.img;
        stagedItem.dataset.price = target.dataset.price;
        stagedItem.innerHTML =
            `
            <img src="./img/${target.dataset.img}" alt ="">
            ${target.dataset.item}
            <strong>
                1
                <span class="a11y-hidden">개</span>
            </strong>  
            `;
        this.stagedList.append(stagedItem);
    }

    bindEvents() {
        /**
         * 1. 입금 버튼 기능 
         * 소지금 === 소지금 - 입금액
         * 잔액 === 기존의 잔액 + 입금액 
         * 입금액이 소지금ㅇ보다 많으면 '소지금이 부족합니다' 경고창 출력
         * 입금액 인풋창은 초기화 
         */

        this.btnPut.addEventListener('click', () => {
            // 사용자 입력값(입금액)
            const inputCost = parseInt(this.inputCostEl.value);
            // 현재 사용자의 돈(소지금)
            const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',', ''));
            // 현재 자판기의 잔액
            const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));

            if (inputCost) {
                if (inputCost <= myMoneyVal && inputCost > 0) {
                    this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost) + ' 원';

                    this.balance.textContent = new Intl.NumberFormat().format
                        ((balanceVal ? balanceVal : 0) + inputCost) + ' 원';

                } else {
                    alert('소지금이 부족합니다.');
                }

                this.inputCostEl.value = null;
            }
        });

        /**
         * 2. 거스름돈 반환 기능 만들기 
         * 반환 버튼을 누르면 소지금 === 소지금 + 잔액
         * 잔액창은 초기화된다. 
         */

        this.btnReturn.addEventListener('click', () => {
            const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',', ''));
            const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));

            if (balanceVal) {
                this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - balanceVal) + ' 원';
                this.balance.textContent = null;
            }
        });

        /**
         * 3. 자판기 메뉴 기능
         * 콜라를 누르면 잔액 === 잔액 - 콜라 가격
         * 콜라 가격보다 잔액이 적다면 '잔액이 부족합니다' 경고창 출력
         * 콜라를 장바구니에 등록
         * 콜라의 data-count 값을 -1
         * 만약 data-count 값이 0이라면 button 요소에 disabled 속성이 추가되고 콜라 템플릿에 strong 태그를 추가 
         */

        const colaBtns = this.itemList.querySelectorAll('button');
        colaBtns.forEach((colaBtn) => {
            colaBtn.addEventListener('click', (event) => {
                const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));

                const targetElPrice = parseInt(colaBtn.dataset.price);
                const stagedListItem = this.stagedList.querySelectorAll('li');
                let isStaged = false;

                if (balanceVal >= targetElPrice) {
                    this.balance.textContent = new Intl.NumberFormat().format(balanceVal - targetElPrice) + ' 원';

                    for (const item of stagedListItem) {
                        if (item.dataset.item === colaBtn.dataset.item) {
                            const itemTxt = item.querySelector('strong');
                            itemTxt.firstChild.textContent = parseInt(itemTxt.firstChild.textContent) + 1;
                            isStaged = true;
                            break;
                        }
                    }

                    if (!isStaged) {
                        this.stagedItemGenerator(colaBtn);
                    }
                    colaBtn.dataset.count--;

                    if (parseInt(colaBtn.dataset.count) === 0) {
                        colaBtn.disabled = true;
                        colaBtn.insertAdjacentHTML('afterbegin',
                            '<strong class="soldout">품절</strong>')
                    }
                } else {
                    alert('잔액이 부족합니다. 돈을 더 입금해주세요.')
                }

            });
        })

        this.btnGet.addEventListener('click', () => {
            const itemStagedList = this.stagedList.querySelectorAll('li');
            const itemGetList = this.getList.querySelectorAll('li');
            let totalPrice = 0;


            for (const itemStaged of itemStagedList) {
                let isStaged = false;
                for (const itemGet of itemGetList) {
                    if (itemStaged.dataset.item === itemGet.dataset.item) {
                        const itemTxt = itemGet.querySelector('strong');
                        itemTxt.firstChild.textContent = parseInt(itemTxt.firstChild.textContent) + parseInt(itemStaged.querySelector('strong').firstChild.textContent);

                        isStaged = true;
                    }
                }

                if (!isStaged) {
                    this.getList.append(itemStaged);
                }
            }

            this.stagedList.innerHTML = null;

            this.getList.querySelectorAll('li').forEach((itemGet) => {
                totalPrice += parseInt(itemGet.dataset.price) *
                    parseInt(itemGet.querySelector('strong').firstChild.textContent);
            });

            this.txtTotal.textContent = `총 금액: ${new Intl.NumberFormat().format(totalPrice)}`;
        })
    }
}

export default VendingMachineFunc;