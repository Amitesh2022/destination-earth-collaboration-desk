<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { RouterLink, RouterView } from 'vue-router'
import { useDeliveryStore } from './store'
const store = useDeliveryStore()
const { approvedShare, offers, urgent } = storeToRefs(store)
onMounted(store.load)
</script>

<template><div class="shell"><aside><div class="brand">DestinationEarthEU<span>MODEL PARTNERSHIPS</span></div><nav><RouterLink to="/">Collaborations</RouterLink><RouterLink to="/insights">Modelling guidance</RouterLink></nav><div class="health"><i /> Java Earth collaboration service connected</div></aside><main><header><div><span class="eyebrow">Coordinate EU–Canada Earth-system models, data and public-interest outcomes</span><h1>Destination Earth Collaboration Desk</h1></div><button @click="store.addOffer">Add collaboration</button></header><section class="summary"><article><small>Models approved</small><strong>{{ approvedShare }}%</strong><div class="bar"><span :style="{ width: `${approvedShare}%` }" /></div></article><article><small>Collaborations tracked</small><strong>{{ offers.length }}</strong><p>Shared modelling view</p></article><article><small>Urgent models</small><strong>{{ urgent }}</strong><p>Needs attention</p></article></section><RouterView /></main></div></template>
