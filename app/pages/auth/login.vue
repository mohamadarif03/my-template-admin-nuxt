<template>
  <div class="bg-gradient-to-br from-blue-500 to-blue-700 min-h-screen flex items-center justify-center p-4">

    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-5xl flex overflow-hidden lg:h-[600px]">
      <div class="bg-gradient-to-br from-blue-700 to-blue-900 text-white w-1/2 p-10 relative flex flex-col justify-center items-start lg:block hidden">
        <h2 class="text-6xl font-extrabold mb-2 leading-tight">WELCOME</h2>
        <p class="text-lg font-semibold mb-6">YOUR HEADLINE NAME</p>
        <p class="mt-4 text-sm leading-relaxed text-blue-200 max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </p>

        <div class="absolute bottom-[-100px] left-[-100px] w-64 h-64 bg-gradient-to-br from-blue-800 to-blue-600 rounded-full opacity-70 blur-sm"/>
        <div class="absolute bottom-10 left-32 w-48 h-48 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full opacity-80 blur-sm"/>
        <div class="absolute top-[-50px] right-[-50px] w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full opacity-40 blur-sm"/>
      </div>

      <div class="w-full lg:w-1/2 p-10 flex flex-col justify-center">
        <h2 class="text-4xl font-bold mb-2 text-gray-800">Sign in</h2>
        <p class="text-sm text-gray-500 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

        <form class="space-y-6" @submit.prevent="handleLogin">
          <div>
            <label for="username" class="sr-only">Username</label>
            <div class="relative flex items-center border border-gray-300 rounded-xl px-4 py-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill mr-3" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
              </svg>
              <input id="username" type="text" v-model="username" class="w-full outline-none text-gray-800 placeholder-gray-400" placeholder="Username">
            </div>
          </div>

          <div>
            <label for="password" class="sr-only">Password</label>
            <div class="relative flex items-center border border-gray-300 rounded-xl px-4 py-3">
                <svg v-if="!showPassword" @click="togglePasswordVisibility" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye mr-3 text-gray-400 cursor-pointer" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                </svg>
                <svg  v-else @click="togglePasswordVisibility" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash mr-3 text-gray-400 cursor-pointer" viewBox="0 0 16 16">
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                </svg>
                <input
                    id="password"
                    :type="showPassword ? 'text' : 'password'"
                    v-model="password"
                    class="w-full outline-none text-gray-800 placeholder-gray-400"
                    placeholder="Password"
                >
              <button type="button" @click="togglePasswordVisibility" class="text-blue-500 text-xs font-semibold ml-2 cursor-pointer hover:text-blue-600">
                {{ showPassword ? 'HIDE' : 'SHOW' }}
              </button>
            </div>
          </div>

          <div class="flex items-center justify-between text-sm text-gray-600">
            <label class="flex items-center cursor-pointer">
              <input type="checkbox" v-model="rememberMe" class="mr-2 accent-blue-600 w-4 h-4 rounded">
              Remember me
            </label>
            <a href="#" class="text-blue-500 hover:underline font-semibold">Forgot Password?</a>
          </div>

          <button type="submit" class="w-full bg-blue-700 cursor-pointer text-white py-3 rounded-xl hover:bg-blue-800 transition-colors duration-300 font-semibold text-lg shadow-md">Sign in</button>
          <div class="text-center text-gray-400 text-sm font-medium">or</div>
           <button type="button" class="w-full border cursor-pointer border-gray-300 py-3 rounded-xl hover:bg-gray-50 transition-colors duration-300 font-semibold text-gray-700 text-lg shadow-sm flex items-center justify-center">
            <svg class="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25C22.56 11.45 22.49 10.74 22.36 10.08H12.25V14.15H18.73C18.43 15.69 17.52 16.94 16.27 17.84L16.29 17.86L19.42 20.35L19.46 20.39C21.46 18.59 22.56 15.82 22.56 12.25Z" fill="#4285F4"/>
              <path d="M12.25 23C15.42 23 18.06 21.93 20.06 19.93L16.27 17.84C15.22 18.54 13.88 18.99 12.25 18.99C9.17 18.99 6.55 16.89 5.62 13.91L5.59 13.94L2.45 16.33L2.41 16.37C4.38 20.21 8.01 23 12.25 23Z" fill="#34A853"/>
              <path d="M5.62 13.91C5.35 13.16 5.2 12.38 5.2 11.5C5.2 10.62 5.35 9.84 5.62 9.09L5.61 9.07L2.45 6.68L2.41 6.72C1.47 8.52 0.99 10.45 0.99 12.5C0.99 14.55 1.47 16.48 2.41 18.28L5.62 13.91Z" fill="#FBBC05"/>
              <path d="M12.25 4.01C13.92 4.01 15.29 4.62 16.25 5.56L20.18 1.63C18.06 0.61 15.42 0 12.25 0C8.01 0 4.38 2.79 2.41 6.72L5.61 9.07C6.55 6.09 9.17 4.01 12.25 4.01Z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>
          
          <p class="text-sm text-center mt-6 text-gray-600">Don't have an account? <a href="/auth/register" class="text-blue-500 hover:underline font-semibold">Sign Up</a></p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const rememberMe = ref(false);
const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const handleLogin = () => {
  alert(`Login attempt with: ${username.value} and ${password.value}. Remember me: ${rememberMe.value}`);
};

definePageMeta({
  layout: false,
});
</script>

<style scoped>
</style>