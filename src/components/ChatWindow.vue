<template>
<div class="container">
    <div class="error" v-if="error">{{error}}</div>
    <div v-if="documents" class="messages card" ref="messages">
        <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
            <div class="row">
                <div class="col s2">
                    <span class="italic">{{doc.createdAt}}</span>
                </div>
                <div class="col s2">
                    <span class="name small-padding"><b>{{doc.name}}</b> </span>
                </div>
                <div class="col s8">
                    <span class="message">{{doc.message}}</span>
                </div>
            </div>
        </div>
    </div>
</div>
  
</template>

<script>
import getCollection from "../composables/getCollection"
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated, ref } from '@vue/runtime-core';


export default {
    setup(){
        const { error, documents } = getCollection('messages')
        const formattedDocuments = computed(() => {
            if(documents.value)
                return documents.value.map(doc =>{
                    let time = formatDistanceToNow(doc.createdAt.toDate())
                    return { ...doc, createdAt: time }
                })
        })

        const messages = ref(null)

        onUpdated(() => {
            messages.value.scrollTop = messages.value.scrollHeight
        })

        return { error, documents, formattedDocuments, messages}
    }
}
</script>

<style scoped>
.card{
    max-height: 460px;
    overflow-y: auto;
}

</style>