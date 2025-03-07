// Configura Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB4xMNETthUe7kaUuoht_39w5xBV-2d3aA",
        authDomain: "aunten-correo.firebaseapp.com",
        projectId: "aunten-correo",
        storageBucket: "aunten-correo.firebasestorage.app",
        messagingSenderId: "1082547298006",
        appId: "1:1082547298006:web:c25d9ba15435fb56487377",
        measurementId: "G-EWWL49PTJB"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Función de login
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            auth.signInWithEmailAndPassword(email, password)
                .then(() => {
                    window.location.href = "home.html";
                })
                .catch((error) => {
                    alert("Error: " + error.message);
                });
        });
    }

    // Verificar si el usuario está autenticado en home.html
    if (window.location.pathname.includes("home.html")) {
        auth.onAuthStateChanged((user) => {
            if (!user) {
                window.location.href = "index.html"; // Redirige si no está autenticado
            }
        });

        // Cerrar sesión
        const logoutBtn = document.getElementById("logout");
        if (logoutBtn) {
            logoutBtn.addEventListener("click", function () {
                auth.signOut().then(() => {
                    window.location.href = "index.html";
                });
            });
        }
    }
});
