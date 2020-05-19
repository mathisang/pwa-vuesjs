<template>
    <div id="footer">
        <div class="social-medias">
            <a href="">
                <div class="social">
                    <img src="../assets/pictos/instagram.svg" width="20px"/>
                    Baz'art
                </div>
            </a>
            <a href="">
                <div class="social">
                    <img src="../assets/pictos/facebook.svg" width="20px"/>
                    Baz'art
                </div>
            </a>
            <a href="">
                <div class="social">
                    <img src="../assets/pictos/twitter.svg" width="20px"/>
                    Baz'art
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer.vue"
    }
</script>

<style scoped>
    #footer {
        background: #FFD800;
        height: 3.5rem;
        margin-top: 2.5rem;
    }

    #footer .social-medias {
        height: 3.5rem;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #footer .social {
        margin: 0 1.5rem;
        display: flex;
        align-items: center;
    }

    #footer a {
        font-weight: 500;
        text-decoration: none;
        color: black;
    }

    #footer .social img {
        margin-right: .5rem;
    }
</style>