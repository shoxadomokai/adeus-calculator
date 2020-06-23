<template>
  <form>
    <h6><strong>Select a service plan:</strong></h6>
    <div class="checkbox service-plans">
      <div
        class="card"
        @click="choosePlan(plan)"
        :class="{ active: selectedPlan === plan.name }"
        v-for="plan in plans"
        :key="plan.name"
      >
        <img :src="getImage(plan)" class="card-img-top mx-auto mt-4" alt="" />
        <div class="card-body text-center">
          <p class="card-text mb-0">
            {{ plan.name }}
          </p>
          <small
            >Save as much <strong>£{{ plan.savings }}/year</strong>
          </small>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    plans: {
      type: Array
    }
  },
  data() {
    return {
      selectedPlan: null,
      prevSavings: null
    };
  },
  methods: {
    choosePlan(plan) {
      if (this.selectedPlan == plan.name) {
        this.selectedPlan = null;
        this.$emit("planSelected", { name: null, savings: -this.prevSavings });
        this.prevSavings = 0;
      } else {
        this.selectedPlan = plan.name;
        const newPlan = { ...plan };
        newPlan.savings = plan.savings - this.prevSavings;
        this.$emit("planSelected", newPlan);
        this.prevSavings = plan.savings;
      }
    },
    getImage(plan) {
      let imageName = plan.name.toLowerCase();
      const src = require(`@/assets/plans/${imageName}.svg`);
      return src;
    }
  }
};
</script>

<style lang="scss" scoped>
.checkbox {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;

  .card {
    cursor: pointer;
    transition: 0.5s all ease;
    border-color: #9f4fff;

    img {
      width: 20%;
    }

    &:hover,
    &.active {
      box-shadow: 1px 3px 10px rgba(#9f4fff, 0.2);
    }

    &.active {
      background-color: rgba(#9f4fff, 0.5);
    }
  }
}

.fade-down-enter,
.fade-down-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}

.fade-down-enter-active,
.fade-down-leave-active {
  transform: translateY(0);
  opacity: 1;
}
</style>
