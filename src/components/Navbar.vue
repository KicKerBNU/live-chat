<template>
<menu v-if="user">
    <div class="absolute left middle padding">
        <p>LIVE-CHAT</p>
    </div>
    <div class="absolute center center-align middle">
        <p>Hey there... {{user.displayName}}</p>
        <label>logged as {{user.email}}</label>
    </div>

    <div class="absolute right middle padding">
        <button @click="handleClick">Logout</button>
    </div>
</menu>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser"
export default {
    setup() {
        const { user } = getUser()
        const {logout, error} = useLogout()
        
        const handleClick = async () => {
            await logout()
            if (!error.value) console.log("User logout");
        }
        return { handleClick, user}
    }
}
</script>

<style>
menu {
    background-color: var(--surface-variant);
    box-shadow: var(--shadow2);
    margin: 0%;
    height: 60px;

}
</style>