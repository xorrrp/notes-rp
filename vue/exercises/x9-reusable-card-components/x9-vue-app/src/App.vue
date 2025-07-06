<script setup>
import UserCard from "@/components/UserCard.vue"
</script>

<template>
    <user-card name="Luke" email="luke@gmail.com"/>
    <user-card name="John" email="john@hotmail.com"/>
    <user-card name="Mark" email="mark@outlook.com"/>
</template>

<style>
#app > div {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: #a700a7;
    color: #fff;
}
</style>