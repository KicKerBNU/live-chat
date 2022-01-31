<template>
<div class="container center-align">
    <div class="row">
        <div class="col s4"></div>
        <div class="col s4 center-align">
            <form @submit.prevent="handleSubmit">
                <h5>Sign Up</h5>
                <div class="field label border">
                    <input type="text" required v-model="displayName">
                    <label>Display Name</label>
                </div>
                <div class="field label border">
                    <input type="email" required v-model="email">
                    <label>Email</label>
                </div>
                <div class="field label border">
                    <input type="password" required v-model="password">
                    <label>Password</label>
                </div>
                <div class="red-text">{{error}}</div>
                <button>Sign up</button>
            </form>
        </div>
        <div class="col s4"></div>
        
    </div>
</div>

</template>

<script>
import { ref } from "vue";
import useSignup from "../composables/useSignup";
export default {
    setup(props, context) {
        const { error, signup } = useSignup()
        
        const displayName = ref('');
        const email = ref('');
        const password = ref('');

        const handleSubmit = async () => { 
            await signup(email.value, password.value, displayName.value);
            if(!error.value) {
                //this.$emit wont work setup function dont have access to the this
                context.emit('signup');
            }
        }
        
        return { displayName, email, password, handleSubmit, error}
    },
    mounted () {
        ui();
    },
}
</script>

<style>

</style>