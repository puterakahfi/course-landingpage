import Vue from 'vue';
import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(new AOS.init({ disable: "phone" })); 