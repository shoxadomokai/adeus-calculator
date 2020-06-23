<template>
  <form>
    <h6><strong>How many bedrooms do you have?</strong></h6>
    <div class="checkbox service-plans">
      <div
        class="card"
        @click="chooseSize(size)"
        :class="{ active: selectedSize === size.name }"
        v-for="(size, index) in houseSize"
        :key="size.name"
      >
        <span class="beds mt-4 mx-auto">
          <img
            v-for="n in index + 1"
            :key="n"
            src="@/assets/bedrooms/bed.svg"
            alt="bed"
          />
        </span>
        <div class="card-body text-center">
          <p class="card-text mb-0">
            {{ size.name }}
          </p>
          <small
            >Save as much <strong>£{{ size.savings }}/year</strong>
          </small>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    plan: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selectedSize: null,
      prevSavings: null,
      plans: {
        electricity: [
          {
            name: "1 Bedroom",
            size: 1,
            savings: 100
          },
          {
            name: "2 Bedrooms",
            size: 2,
            savings: 135
          },
          {
            name: "3 Bedrooms",
            size: 3,
            savings: 160
          },
          {
            name: "4 Bedrooms",
            size: 4,
            savings: 185
          },
          {
            name: "5 Bedrooms",
            size: 5,
            savings: 215
          },
          {
            name: "6+ Bedrooms",
            size: 6,
            savings: 250
          }
        ],
        heat: [
          {
            name: "1 Bedroom",
            size: 1,
            savings: 250
          },
          {
            name: "2 Bedrooms",
            size: 2,
            savings: 250
          },
          {
            name: "3 Bedrooms",
            size: 3,
            savings: 250
          },
          {
            name: "4 Bedrooms",
            size: 4,
            savings: 250
          },
          {
            name: "5 Bedrooms",
            size: 5,
            savings: 250
          },
          {
            name: "6+ Bedrooms",
            size: 6,
            savings: 250
          }
        ],
        ev: [
          {
            name: "1 Bedroom",
            size: 1,
            savings: 100
          },
          {
            name: "2 Bedrooms",
            size: 2,
            savings: 135
          },
          {
            name: "3 Bedrooms",
            size: 3,
            savings: 160
          },
          {
            name: "4 Bedrooms",
            size: 4,
            savings: 250
          },
          {
            name: "5 Bedrooms",
            size: 5,
            savings: 185
          },
          {
            name: "6+ Bedrooms",
            size: 6,
            savings: 215
          }
        ],
        home: [
          {
            name: "1 Bedroom",
            size: 1,
            savings: 100
          },
          {
            name: "2 Bedrooms",
            size: 2,
            savings: 135
          },
          {
            name: "3 Bedrooms",
            size: 3,
            savings: 160
          },
          {
            name: "4 Bedrooms",
            size: 4,
            savings: 250
          },
          {
            name: "5 Bedrooms",
            size: 5,
            savings: 185
          },
          {
            name: "6+ Bedrooms",
            size: 6,
            savings: 215
          }
        ],
        lifestyle: [
          {
            name: "1 Bedroom",
            size: 1,
            savings: 100
          },
          {
            name: "2 Bedrooms",
            size: 2,
            savings: 135
          },
          {
            name: "3 Bedrooms",
            size: 3,
            savings: 160
          },
          {
            name: "4 Bedrooms",
            size: 4,
            savings: 250
          },
          {
            name: "5 Bedrooms",
            size: 5,
            savings: 185
          },
          {
            name: "6+ Bedrooms",
            size: 6,
            savings: 215
          }
        ],
        mobility: [
          {
            name: "1 Bedroom",
            size: 1,
            savings: 100
          },
          {
            name: "2 Bedrooms",
            size: 2,
            savings: 135
          },
          {
            name: "3 Bedrooms",
            size: 3,
            savings: 160
          },
          {
            name: "4 Bedrooms",
            size: 4,
            savings: 250
          },
          {
            name: "5 Bedrooms",
            size: 5,
            savings: 185
          },
          {
            name: "6+ Bedrooms",
            size: 6,
            savings: 215
          }
        ]
      }
    };
  },
  methods: {
    chooseSize(size) {
      if (this.selectedSize === size.name) {
        this.selectedSize = null;
        this.$emit("sizeSelected", {
          name: null,
          size: null,
          savings: -this.prevSavings
        });
        this.prevSavings = 0;
      } else {
        this.selectedSize = size.name;
        const newSize = { ...size };
        newSize.savings = size.savings - this.prevSavings;
        this.$emit("sizeSelected", newSize);
        this.prevSavings = size.savings;
      }
    }
  },
  computed: {
    houseSize() {
      const name = this.plan.toString().toLowerCase();
      return this.plans[name];
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
      height: 30px;
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
