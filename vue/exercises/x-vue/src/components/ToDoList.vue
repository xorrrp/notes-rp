<template>
    <div class="container">
        <input v-model="newTask.title" placeholder="Wash the dishes...">
        <select v-model="newTask.category">
            <option>Work</option>
            <option>Personal</option>
            <option>Other</option>
        </select>
        <button @click="addTask">Add</button>
        <ul>
            <li v-for="(task, index) in tasks" :key="index">
                <span :style="{ textDecoration: task.completed ? 'line-through' : 'none'}">
                    {{task.title}} [{{task.category}}]
                </span>
                <button @click="toggleTask(index)">✔️</button>
                <button @click="removeTask(index)">🗑️</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTask: {
                title: '',
                category: 'Work',
                completed: false
            },
            tasks: []
        }
    },
    mounted() {
        const savedTasks = localStorage.getItem('tasks')
        if (savedTasks) {
            this.tasks = JSON.parse(savedTasks)
        }
    },
    watch: {
        tasks: {
            handler(newTasks) {
                localStorage.setItem('tasks', JSON.stringify(newTasks))
            },
            deep: true
        }
    },
    methods: {
        addTask() {
            if (this.newTask.title.trim()) {
                this.tasks.push({...this.newTask})
                this.newTask.title = ''
                this.newTask.completed = false
            }
        },
        toggleTask(index) {
            this.tasks[index].completed = !this.tasks[index].completed
        },
        removeTask(index) {
            this.tasks.splice(index, 1)
        }
    }
}
</script>

<style>
    .container {
        color: royalblue;
    }
</style>