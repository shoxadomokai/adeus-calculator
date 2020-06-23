<template>
  <section class="home container">
    <div class="row">
      <div class="col-lg-7 order-2 order-lg-1">
        <Calculator
          :plan="plan"
          :userDetails="userDetails"
          :size="houseSize"
          :savings="savings"
          @planSelected="planSelected"
          @locationSubmitted="locationSubmitted"
          @sizeSelected="sizeSelected"
          @occupantsSelected="occupantsSelected"
        />
      </div>
      <div class="offset-lg-1 col-lg-4 order-1 order-lg-2">
        <Results class="results" :savings="savings" />
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Calculator from "@/components/Calculator.vue";
import Results from "@/components/Results.vue";

export default {
  name: "Home",
  data() {
    return {
      savings: 0,
      plan: null,
      userDetails: null,
      houseSize: null,
      occupants: null
    };
  },
  components: {
    Calculator,
    Results
  },
  methods: {
    planSelected(plan) {
      this.plan = plan.name;
      this.savings += plan.savings;
    },
    locationSubmitted(userDetails) {
      this.userDetails = userDetails;
    },
    sizeSelected(houseSize) {
      this.houseSize = houseSize.size;
      this.savings += houseSize.savings;
    },
    occupantsSelected(occupants) {
      this.occupants = occupants;
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: calc(100vh - 100px);
  overflow: hidden;
  padding: 0;
  @media (min-width: 581px) {
    padding: 100px 0;
  }

  .results {
    @media screen and (max-width: 581px) {
      padding: 20px;
    }
  }
}
</style>
