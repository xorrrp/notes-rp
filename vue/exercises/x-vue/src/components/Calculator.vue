<template>
    <div class="container">
        <input v-model="calcDisplay" disabled>
        <div class="btn-container">
            <button @click="calcDisplay=''">C</button>
            <button @click="calculate">=</button>
            <button @click="backspace">&larr;</button>
            <button v-for="num in nums" @click="inputNum($event)">{{num}}</button>
            <button v-for="op in operators" @click="inputOp($event)">{{op}}</button>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            calcDisplay : '',
            nums : ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0'],
            operators : ['*', '+', '-', '/']
        }
    },
    methods: {
        inputNum(event) {
            this.calcDisplay += event.target.innerText;
        },
        inputOp(event) {
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

<style>
.container {
    width: 200px;
    border: solid 2px #fff;
    padding: 5px;
}
.container input {
    text-align: right;
    display: flex;
    justify-self: center;
    color: #000;
}
.btn-container {
    border: 1px solid #fff;
    margin: 5px;
    padding: 5px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
.btn-container button {
    cursor: pointer;
    border-radius: 5px;
}
.btn-container button:hover {
    background-color: beige;
}
</style>