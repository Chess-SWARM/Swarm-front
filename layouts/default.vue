<template>
  <v-app>
    <div>
      <ApplicationNavbar/>
      <div class="content">
        <slot/>
      </div>
    </div>
  </v-app>
</template>

<style>
.content {
  margin-top: 4rem;
}
</style>