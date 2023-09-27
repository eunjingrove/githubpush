class TextManager {
    constructor() {
        this.value = { data: 'Hello world' }
    }

    getValue() {
        return this.value.data;
    }

    setValue(newValue) {
        this.value = newValue
    }
}