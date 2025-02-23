<template>
    <title>Home Page</title>

    <body>
        <div class="container">
            <button class="button" @click="submit()">Click Me</button>
        </div>
    </body>
</template>

<script setup>
async function submit() {
    await $fetch('/api/users', {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        method: 'POST',
        body: {
            firstName: 'dadxdx',
            lastName: 'dd',
            email: 'asdsads',
            password: 'asxxsax'
        }
    })
}
</script>
