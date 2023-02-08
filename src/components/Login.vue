<template >
  <v-container>
    <v-card justify="center" class="text-center login-form">
      <v-card-text>
        <div class="subheading">
          <template v-if="isLogIn">Log in to task management</template>
          <template v-else-if="isRegister">Crate a new account</template>
        </div>
        <v-form class="box-style">
          <v-text-field
            v-if="isRegister"
            label="First Name"
            prepend-icon="mdi-account"
            v-model="firstName"
            :rules="name"
            required
          ></v-text-field>
          <v-text-field
            v-if="isRegister"
            label="Last Name"
            prepend-icon="mdi-account"
            v-model="lastName"
            :rules="lastname"
            required
          ></v-text-field>
          <v-text-field
            v-if="isRegister"
            label="Email"
            prepend-icon="mdi-email"
            v-model="email"
            :rules="emailrules"
            required
          >
          </v-text-field>
          <v-text-field
            label="Username"
            prepend-icon="mdi-account-check"
            v-model="userName"
            :rules="username"
            required
          >
          </v-text-field>
          <v-text-field
            label="Password"
            prepend-icon="mdi-lock"
            v-model="passWord"
            :rules="password"
            required
            :append-icon="showPassWord ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassWord ? 'text' : 'password'"
            @click:append="showPassWord = !showPassWord"
          >
          </v-text-field>
          <!-- <v-btn
            class="primary-btn"
            type="submit"
          >
            <v-icon left>mdi-login-variant</v-icon> Login
          </v-btn>
          <v-btn
            class="secondary-btn"
            type="button"
            mode="flat"
          > -->
          <v-btn
            v-if="isLogIn"
            class="primary-btn"
            type="submit"
            @click.prevent="userLogin()"
          >
            <v-icon left>mdi-login-variant</v-icon> Login
          </v-btn>
          <v-btn
            v-if="isRegister"
            class="secondary-btn"
            type="submit"
            @click.prevent="userRegister()"
          >
            <v-icon left>mdi-account-multiple-plus</v-icon> Register
          </v-btn>
          <p v-if="isRegister">Back to <a @click="isLoginFunc">Login</a></p>
          <p v-if="isLogIn">
            Didn't you register yet? Please
            <a @click="isRegisterFunc"> Register </a>
          </p>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      firstName: "",
      lastName: "",
      userName: "mor_2314",
      passWord: "83r5^_",
      email: "",
      showPassWord: false,
      isLogIn: true,
      isRegister: false,

      password: [
        (v) => !!v || "Password is required",
        (v) =>
          /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@_#\$%\^&\*])(?=.{6,})/.test(
            v
          ) ||
          "Min. 8 characters with at least one capital letter, a number and a special character.",
      ],
      name: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      username: [
        (v) => !!v || "Username is required",
        (v) => (v && v.length <= 10) || "User must be less than 10 characters",
      ],
      lastname: [
        (v) => !!v || "Last Name is required",
        (v) => (v && v.length <= 10) || "Last must be less than 10 characters",
      ],
      emailrules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },

  methods: {
    isLoginFunc() {
      this.isRegister = false;
      this.isLogIn = true;
    },
    isRegisterFunc() {
      (this.isLogIn = false), (this.isRegister = true);
    },
    userLogin() {
      axios({
        method: "post",
        url: "https://fakestoreapi.com/auth/login",
        data: {
          username: this.userName,
          password: this.passWord,
        },
      })
        .then((data) => {
          this.$store.dispatch("SendLoginInfo", data.data.token);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    userRegister() {
      axios({
        method: "post",
        url: "https://fakestoreapi.com/users",
        data: {
          email: this.email,
          username: this.userName,
          password: this.passWord,
          name: {
            firstname: this.firstName,
            lastname: this.lastName,
          },
          address: {
            city: "kilcoole",
            street: "7835 new road",
            number: 3,
            zipcode: "12926-3874",
            geolocation: {
              lat: "-37.3159",
              long: "81.1496",
            },
          },
          phone: "1-570-236-7033",
        },
      })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
   
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
