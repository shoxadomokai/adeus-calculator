<template>
  <aside class="results">
    <div class="savings mb-4">
      <small class="subtitle">Your Savings</small>
      <h1 class="display-1">£{{ animatedSavings }}</h1>
    </div>
    <p class="results__header mb-4 d-none d-lg-block">
      How it works in three easy steps
    </p>
    <ol class="steps d-none d-lg-block">
      <li class="step">
        <p class="step__header">Enter your details</p>
        <p class="step__description">
          Answer a few quick questions and then we can find you some great
          energy deals based on your location and usage.
        </p>
      </li>
      <li class="step">
        <p class="step__header">See your savings</p>
        <p class="step__description">
          See savings in your area to see why A-deus is the best choice for you.
        </p>
      </li>
      <li class="step">
        <p class="step__header">Complete your switch</p>
        <p class="step__description">
          We’ll contact your old supplier and handle the switchover on your
          behalf.
        </p>
      </li>
    </ol>
  </aside>
</template>

<script>
export default {
  props: {
    savings: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      tweenedNumber: 0
    };
  },
  computed: {
    animatedSavings: function() {
      return this.tweenedNumber.toFixed(0);
    }
  },
  watch: {
    savings(newValue) {
      /* eslint-disable */
      gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
    }
  }
};
</script>

<style lang="scss" scoped>
.results {
  .results__header,
  .step__header {
    font-weight: bold;
  }

  .steps {
    padding-left: 0;
    font-size: 14px;

    .step {
      list-style-type: none;
      counter-increment: item;
      display: inline-block;

      &::before {
        padding-right: 0.5rem;
        font-weight: bold;
        float: left;
        text-align: right;
        content: counter(item) ".";
      }
    }

    .step__header {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
