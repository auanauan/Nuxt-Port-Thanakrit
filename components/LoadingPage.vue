<template>
  <div class="h-screen w-full flex items-center justify-center">
    <h2 class="spinner-container">
      <span class="loader"></span>
    </h2>
  </div>
</template>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: auto;
}

.loader {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
  margin: 15px auto;
  position: relative;
  color: hsl(37, 90%, 51%);
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;
}

@keyframes animloader {
  0% {
    box-shadow: -38px -6px, -14px 6px, 14px -6px;
  }

  33% {
    box-shadow: -38px 6px, -14px -6px, 14px 6px;
  }

  66% {
    box-shadow: -38px -6px, -14px 6px, 14px -6px;
  }

  100% {
    box-shadow: -38px 6px, -14px -6px, 14px 6px;
  }
}
</style>
