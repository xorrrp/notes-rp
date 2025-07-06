<template>
    <div>
        <input v-model="calcDisplay" disabled>
        <button @click="inputNum($event)">1</button>
        <button @click="inputNum($event)">2</button>
        <button @click="inputNum($event)">3</button>
        <button @click="inputNum($event)">4</button>
        <button @click="inputNum($event)">5</button>
        <button @click="inputNum($event)">6</button>
        <button @click="inputNum($event)">7</button>
        <button @click="inputNum($event)">8</button>
        <button @click="inputNum($event)">9</button>
        <button @click="inputNum($event)">0</button>
        <button @click="inputSymbol($event)">+</button>
        <button @click="inputSymbol($event)">-</button>
        <button @click="inputSymbol($event)">*</button>
        <button @click="inputSymbol($event)">/</button>
        <button @click="calculate">=</button>
        <button @click="calcDisplay=''">C</button>
        <button @click="backspace">&larr;</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            calcDisplay : ''
        }
    },
    computed: {
    },
    methods: {
        inputNum(event) {
            this.calcDisplay += event.target.innerText;
        },
        inputSymbol(event) {
            let operation = event.target.innerText;
            this.calcDisplay += event.target.innerText;
        },
        calculate() {
            this.calcDisplay = eval(this.calcDisplay);
        },
        backspace() {
            this.calcDisplay = this.calcDisplay.slice(0, -1);
        }
    }
}
</script>

