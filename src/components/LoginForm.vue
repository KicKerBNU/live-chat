<template>
<div class="container center-align">
    <div class="row">
        <div class="col s4"></div>
        <div class="col s4 center-align">
            <form @submit.prevent="handleSubmit">
                <h5>Log in</h5>
                
                <div class="field label border">
                    <input type="email" required v-model="email">
                    <label>Email</label>
                </div>
                <div class="field label border">
                    <input type="password" required v-model="password">
                    <label>Password</label>
                </div>
                <div class="red-text">{{error}}</div>
                <button>Log in</button>
            </form>
        </div>
        <div class="col s4"></div>
    </div>
</div>

</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";
export default {
    setup(props, context) {
        const email = ref('');
        const password = ref('');

        const { error, login} = useLogin();

        const handleSubmit = async () => { 
            await login(email.value, password.value)
            if(!error.value) {
                //this.$emit wont work setup function dont have access to the this
                context.emit('login');
            }

        }
        
        return { email, password, handleSubmit, error}
    },
    mounted () {
        ui();
    },
    
}
</script>

<style>

</style>