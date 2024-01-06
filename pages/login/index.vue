<template>
  <div
    class="position-fixed w-100 h-100 d-flex justify-content-center align-items-center"
  >
    <div class="mw-100 m-auto p-4 border overflow-hidden" style="width: 500px">
      <h1 class="text-center h3 mt-3">Welcome to our app</h1>
      <p class="text-center mb-5">Login to continue</p>
      <form autocomplete="off">
        <div class="mb-4">
          <label class="form-label">Username</label>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            autocomplete="off"
            id="username"
            name="username"
          />
        </div>
        <div class="mb-4">
          <label class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            autocomplete="off"
            id="password"
            name="password"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
