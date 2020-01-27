<template>
  <div>
    <header class="p-2">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h1>Shop.com</h1>
          <router-link :to="{name: 'cart'}" tag="div" class="minicart">
            <span class="minicart__count">{{cartCnt}}</span>
            <img class="minicart__icon" src="../assets/img/cart-icon.svg" alt="Cart">
          </router-link>
        </div>
      </div>
      <hr>
    </header>
    <section id="page-content" :style="contentHeight" ref="pageContent">
      <div class="container">
        <div class="row">
          <div class="col col-sm-3 menu">
            <ul class="list-group">
              <router-link v-for="(item, index) in menuList"
                           :key="index"
                           :to="item.url"
                           tag="li"
                           class="list-group-item"
                           active-class="active"
              >
                <a>{{item.text}}</a>
              </router-link>
            </ul>
          </div>

          <div class="col col-sm-9">
            <transition name="slide" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>

        </div>
      </div>
    </section>

    <app-quiz></app-quiz>

    <footer id="sticky-footer" class="py-4 bg-dark text-white-50 mt-5">
      <div class="container text-center footer__nav">
        <router-link v-for="(item, index) in menuList"
                     :key="index"
                     :to="item.url"
                     active-class="active"
        >{{item.text}}
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import AppQuiz from './components/quiz/Quiz'

function getAbsoluteHeight (el) {
  el = (typeof el === 'string') ? document.querySelector(el) : el
  const styles = window.getComputedStyle(el)
  const margin = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom)
  return Math.ceil(el.offsetHeight + margin)
}

export default {
  components: {
    AppQuiz
  },
  data () {
    return {
      contentHeight: '0px'
    }
  },
  computed: {
    ...mapGetters('menu', {
      menuList: 'items'
    }),
    ...mapGetters('cart', {
      cartCnt: 'cartCnt'
    })

  },
  mounted () {
    const headerH = getAbsoluteHeight('header')
    const footerH = getAbsoluteHeight('footer')
    this.contentHeight = `min-height: calc(100vh - ${headerH + footerH}px);`
  }
}
</script>

<style>
  .row {
    padding-left: 15px;
  }

  .menu {
    border-right: 1px solid #ddd;
  }

  .list-group-item {
    transition: background 0.3s, color 0.3s;
  }

  .list-group-item a {
    text-decoration: none;
  }

  .list-group-item.active a {
    color: inherit;
  }

  .minicart {
    cursor: pointer;
    position: relative;
  }

  .minicart .minicart__icon {
    width: 50px;
  }

  .minicart .minicart__count {
    position: absolute;
    z-index: 1;
    width: 24px;
    line-height: 20px;
    border-radius: 50%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    border: 2px solid darkblue;
    background: #ffffff;
    left: -4px;
  }

  .footer__nav a {
    position: relative;
    color: #ffffff;
    margin: 0 10px;
    font-size: 20px;
    text-decoration: none;
  }

  .footer__nav a:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #fff;
    transform: scaleX(0);
    transition: transform .5s ease;
  }

  .footer__nav a:hover:before {
    transform: scaleX(1);
  }

  .footer__nav a.active {
    color: #f8d7da;
  }
  .footer__nav a.active:before {
    content: none;
  }
  .slide-enter-active {
    animation: slideIn 0.5s;
  }

  .slide-leave-active {
    animation: slideOut 0.5s;
  }

  @keyframes slideIn {
    from {
      transform: rotateY(90deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }

  @keyframes slideOut {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(90deg);
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
  {
    opacity: 0;
  }
</style>
