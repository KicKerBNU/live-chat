<template>
  <div class="container center-align">
      <article class="round">
        <h5>Welcome</h5>
        <div v-if="showLogin">
            <h2>Login to the chatroom</h2>
            <LoginForm @login="enterChat" />
            <p>No account yet ?
                <a class="link underline" @click="showLogin = false">Register now</a>
            </p>
        </div>
        <div v-else>
            <h2>Sign up to the chatroom</h2>
            <SignupForm  @signup="enterChat" />
            <p>Already registered ?
                <a class="link underline" @click="showLogin = true">Login in</a>
            </p>
        </div>
      </article>
  </div>
</template>

<script>
import { ref } from 'vue';
import SignupForm from "../components/SignupForm.vue"
import LoginForm from "../components/LoginForm.vue"
import { useRouter } from 'vue-router';
export default {
    setup() {
        const showLogin = ref(true)
        const router = useRouter()
        const enterChat = () => {
            router.push({name: 'Chatroom'})
        }

        return { showLogin, enterChat }
    },
    components: {
        SignupForm, 
        LoginForm
    },

}
</script>

<style scoped>
.link{
    display: contents;
    text-decoration: underline;
}

</style>