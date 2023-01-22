<template >
  <v-container>
    <v-card class="text-center login-form">
      <v-card-text>
                <div class="subheading">
                  <template v-if="isLogIn">Log in to task management</template>
                  <template v-else-if="isRegister">Crate a new account</template>
                </div>
      <v-form class="box-style">
        <v-text-field
          label="Username"
          prepend-icon="mdi-account"
          v-model="userName"
          required
        >
        </v-text-field>
        <v-text-field
        v-if="isRegister"
          label="Email"
          prepend-icon="mdi-email"
          v-model="email"
          required
        >
        </v-text-field>
        <v-text-field
          label="Password"
          prepend-icon="mdi-lock"
          v-model="passWord"
          type="password"
          required
        >
        </v-text-field>
        <v-btn class="primary-btn" type="submit" @click.prevent=isLoginFunc()>
          <v-icon left>mdi-login-variant</v-icon> Login
        </v-btn>
        <v-btn class="secondary-btn"  type="submit" @click.prevent=isRegisterFunc()>
          <v-icon left>mdi-account-multiple-plus</v-icon> Register
        </v-btn>
      </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      email:"",
      passWord: "",
      isLogIn: true,
      isRegister: false
    };
  },

  methods: {
    isLoginFunc() {
      this.isRegister= false
      this.isLogIn= true
    },
    isRegisterFunc() {
      this.isLogIn = false,
      this.isRegister = true
    }
  },
};
</script>
<style scoped lang="scss">
@import "../assets/scss/_style.scss";
.login-form {
  margin: 20px auto;
  max-width: 500px;
}
</style>
