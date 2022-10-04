<script setup>

</script>

<template>
    <footer class="footer">
         <div class="content">
            <div class="socials">
                <h1>Socials</h1>
                <div class="social-links">
                    <a href="#">
                        <img src="@/assets/svg/facebook.svg" alt="facebook" />
                    </a>
                    <a href="#">
                        <img src="@/assets/svg/instagram.svg" alt="instagram" />
                    </a>
                    <a href="#">
                        <img src="@/assets/svg/mail.svg" alt="mail" />
                    </a>
                </div>
            </div>
            <div class="sitemap">
                <h1>Sitemap</h1>
                <router-link to="/">Home</router-link>
                <router-link to="/shop">Shop</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/contact">Contact</router-link>
            </div>
            <div class="terms">
                <router-link to="/terms-and-conditions">Terms & conditions</router-link>
                <router-link to="/privacy-policy">Privacy policy</router-link>
            </div>
         </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer{
    background:#000000;
    padding: 1rem 0;
        h1{
            color:white;
            font-size:1.2rem;
        }
        .socials{
            display:flex;
            flex-direction: column;
            align-items:center;
            .social-links{
                display:flex;
                justify-content: center;
                a{
                    margin: 0 1rem;
                    img{
                        height:25px;
                        filter:invert(1);
                    }
                }
            }
        }
    .sitemap{
        display:flex;
        flex-direction: column;
        align-items:center;
        margin-top:1rem;
        a{
            color:white;
            margin: 0.25rem 0;
            font-size:0.9rem;
        }
    }
    .terms{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top:2rem;
        a{
            color:white;
            margin:0.25rem 0;
            font-size: 0.7rem;
        }
        
    }
}
</style>