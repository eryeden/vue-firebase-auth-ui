<script>
import * as firebase from "firebase/app"
import * as firebase_auth from "firebase/auth"

export default {
    name: 'Dashboard',
    props: {
    },
    data: () => ({
        id: "",
        email: "",
        is_email_verified: "",
        name: "",
        photoURL: "",
    }),
    computed: {
    },
    methods: {
        signOut() {
            const auth = firebase_auth.getAuth();
            firebase_auth.signOut(auth).then(() => {
                // Sign-out successful.
                alert("Signed out")
                this.$router.push("/")
            }).catch((error) => {
                // An error happened.
                alert("Failed to sign out: " + error.message)
            });
        }
    },
    watch: {
    },
    mounted() {
        const auth = firebase_auth.getAuth();
        const user = auth.currentUser;
        if (user !== null) {
            // The user object has basic properties such as display name, email, etc.
            const displayName = user.displayName;
            const email = user.email;
            const photoURL = user.photoURL;
            const emailVerified = user.emailVerified;
            // The user's ID, unique to the Firebase project. Do NOT use
            // this value to authenticate with your backend server, if
            // you have one. Use User.getToken() instead.
            const uid = user.uid;
            this.id = uid;
            this.email = email;
            this.is_email_verified = emailVerified;
            this.name = displayName;
            this.photoURL = photoURL;
        }
    }
}
</script>

<template>
    <h2>Dashboard</h2>
    <h2>User dashboard</h2>
    <h3>Welcome</h3>
    <h3>Name: {{ name }}</h3>
    <h3>Photo: {{ photoURL }}</h3>
    <h3>UserID: {{ id }}</h3>
    <h3>Email: {{ email }}</h3>
    <h3>IsVerified: {{ is_email_verified }}</h3>
    <br />
    <br />
    <button @click="signOut">Sign out</button>
</template>