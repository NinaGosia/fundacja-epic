var app = new Vue({
    el: "#app",
    data: {
        projektyIsCollapsed: false,
        cookiesConsentIsAccepted: false,
    },
    created() {
        this.cookiesConsentIsAccepted = (localStorage.cookiesConsent === 'true');
    },
    methods: {
        acceptCookie() {
            this.cookiesConsentIsAccepted = localStorage.cookiesConsent = true;
        }
    }
})
