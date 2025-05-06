<script setup>
import { ref } from 'vue'
import { ConfirmModal } from '@modrinth/ui'
import { DownloadIcon, RestartIcon } from '@modrinth/assets'
import { invoke } from '@tauri-apps/api/core'
import { restartApp } from '@/helpers/utils.js'
import { show_ads_window, hide_ads_window } from '@/helpers/ads.js'
import { useTheming } from '@/store/theme.ts'

const themeStore = useTheming()
const modal = ref(null)
const waitNextLaunch = ref(false)

defineExpose({
  show: () => {
    hide_ads_window()
    modal.value.show()
  },
  hide: () => {
    onModalHide()
    modal.value.hide()
  },
})

function onModalHide() {
  show_ads_window()
}

async function restartNow() {
  modal.value.hide()
  await restartApp()
}

async function restartLater() {
  modal.value.hide()
  await invoke('plugin:updater|set_restart_preference', { preference: true })
}
</script>

<template>
  <ConfirmModal
    ref="modal"
    title="Update Ready to Install"
    description="An update for the Modrinth App has been downloaded and is ready to install. Would you like to restart now to complete the installation?"
    :proceed-icon="RestartIcon"
    proceed-label="Restart Now"
    :on-hide="onModalHide"
    :noblur="!themeStore.advancedRendering"
    :danger="false"
    @proceed="restartNow"
  >
    <div class="flex items-center mb-4">
      <input
        id="wait-next-launch"
        v-model="waitNextLaunch"
        type="checkbox"
        class="mr-2"
      />
      <label for="wait-next-launch">Remember my choice</label>
    </div>
    <div class="flex gap-2 mt-2">
      <button
        class="btn bg-button-bg text-contrast px-4 py-2 rounded flex items-center gap-2"
        @click="restartLater"
      >
        <DownloadIcon />
        Restart on Next Launch
      </button>
    </div>
  </ConfirmModal>
</template>
