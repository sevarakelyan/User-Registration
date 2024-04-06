let boolean = true;
document.querySelectorAll(".change").forEach(item => {
    item.addEventListener("click", function () {
        document.getElementById("signIn").classList.remove("noAnim");
        document.getElementById("signUp").classList.remove("non");
        if (boolean) {
            document.getElementById('signUp').classList.add("active");
            document.getElementById('signUp').classList.remove("hiden");
            setTimeout(() => {
                document.getElementById('signIn').classList.remove("active");
                document.getElementById('signIn').classList.add("hiden");
            }, 20)

            boolean = false
        } else {
            document.getElementById('signIn').classList.add("active");
            document.getElementById('signIn').classList.remove("hiden");

            setTimeout(() => {
                document.getElementById('signUp').classList.remove("active");
                document.getElementById('signUp').classList.add("hiden");
            }, 20)

            boolean = true
        }


    })
})

