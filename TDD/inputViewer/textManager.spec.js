describe('텍스트 관리자입니다.', () => {
    // 텍스트 값을 가져오는 상황을 연출하기 위해 인스턴스를 만들어줘야 한다. 
    const textManager = new TextManager();

    if ('텍스트 값을 가져옵니다.', () => {
        const initValue = textManager.getValue();
        expect(textManager.getValue()).toBe(initValue);
        // 나는 textManager.getValue()의 값이 initValue와 같길 기대합니다 ~! 
    })
})