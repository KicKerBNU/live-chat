<template>
    <div class="container">
        <div class="field textarea label prefix border">
            <i>search</i>
            <textarea v-model="message" @keypress.enter.prevent="handleSubmit"></textarea>
            <label>Type a message and hit enter to send...</label>
        </div>
        <div class="error">{{error}}</div>
    </div>
</template>

<script>
import { ref } from 'vue'
import getUser from '../composables/getUser'
import useCollection from '../composables/useCollection'
import { timestamp } from "../firebase/config"

export default {
    mounted () {
        ui();
    },
    setup() {
        const { user } = getUser()
        const { addDoc, error } = useCollection('messages')

        const message = ref('')

        const handleSubmit = async() => {
            const chat = {
                name: user.value.displayName,
                message: message.value,
                createdAt: timestamp()
            }
            console.log(chat)
            await addDoc(chat)
            if(!error.value)
                message.value = '';
        }

        return {message, handleSubmit, error}
    }

}
</script>

<style>

</style>