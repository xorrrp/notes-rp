<template>
    <div>
        <input v-model="calcDisplay" disabled>
        <button v-for="num in nums" @click="inputNum($event)">{{num}}</button>
        <button v-for="op in operators" @click="inputOp($event)">{{op}}</button>
        <button @click="calculate">=</button>
        <button @click="calcDisplay=''">C</button>
        <button @click="backspace">&larr;</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            calcDisplay : '',
            nums : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
            operators : ['+', '-', '*', '/']
        }
    },
    computed: {
    },
    methods: {
        inputNum(event) {
            this.calcDisplay += event.target.innerText;
        },
        inputOp(event) {
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

