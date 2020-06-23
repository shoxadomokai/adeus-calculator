<template>
  <transition-group name="slide" tag="div" class="card box">
    <div class="questions" v-show="!dataComplete" key="questions">
      <div class="card-header">
        <h4 class="mb-3">
          Switching with us is always fast, simple and hassle-free. We’ve just
          got a few quick questions.
        </h4>
        <p class="info mb-5">
          You can also contact us for a specialised quote
        </p>
        <hr />
        <transition-group class="input-grid" name="list-complete">
          <ServicePlan
            :plans="plans"
            @planSelected="planSelected"
            key="services"
          />
          <Location
            v-if="showLocation"
            class="location"
            key="location"
            @locationSubmitted="locationSubmitted"
          />
          <HouseSize
            v-if="userDetails"
            :plan="plan"
            class="house-size"
            key="houseSize"
            @sizeSelected="sizeSelected"
          />
          <form
            class="occupants"
            key="occupants"
            v-if="size"
            @submit.prevent="occupantsSelected"
          >
            <h6><strong>How many people live there?</strong></h6>
            <div class="form-group" :key="size">
              <input
                required
                class="form-control"
                list="occupants-list"
                id="occupant-input"
                v-model="numberOfOccupants"
              />
              <datalist id="occupants-list">
                <option
                  v-for="n in size + 1"
                  :value="n > 1 ? n + ' People' : n + ' Person'"
                  :key="n"
                >
                  Save as much as...
                </option>
              </datalist>
            </div>
            <button
              class="btn btn-outline-dark btn-block"
              :disabled="!numberOfOccupants"
            >
              View Complete Savings
            </button>
          </form>
        </transition-group>
      </div>
    </div>
    <div v-show="dataComplete" class="container result" key="result">
      <span class="go-back mt-3 mb-5" @click="dataComplete = false">
        <img src="@/assets/back.svg" />
        <small>Go Back to Inputs</small>
      </span>
      <div class="options-grid mb-4">
        <div class="card">
          <svg
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="110"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Image cap"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>
          <div class="card-body">
            <ul>
              <li>
                <p class="card-text">
                  Pay £ / month
                </p>
              </li>
              <li>
                <p class="card-text">Save £{{ savings / 12 }} / month</p>
              </li>
              <li>
                <p class="card-text">
                  Save Kg CO2 / month
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="card">
          <svg
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="110"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Image cap"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>
          <div class="card-body">
            <ul>
              <li>
                <p class="card-text">
                  Recieve X KWh / month
                </p>
              </li>
              <li>
                <p class="card-text">
                  Enough energy to heat a {{ size }} bedroom house
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="card">
          <svg
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="110"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Image cap"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>
          <div class="card-body">
            <p class="card-text">
              Add on our sharing service and share or trade excess you may need
              or require
            </p>
          </div>
        </div>
        <div class="card">
          <svg
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="110"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Image cap"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>
          <div class="card-body">
            <p>Service may require the installation of the following devices</p>
            <ol>
              <li>
                <p class="card-text"></p>
              </li>
              <li>
                <p class="card-text"></p>
              </li>
              <li>
                <p class="card-text"></p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
import ServicePlan from "@/components/ServicePlan";
import Location from "@/components/Location";
import HouseSize from "@/components/HouseSize";
export default {
  props: {
    plan: {
      type: String
    },
    userDetails: {
      type: Object
    },
    size: {
      type: Number
    },
    savings: {
      type: Number
    }
  },
  components: {
    ServicePlan,
    Location,
    HouseSize
  },
  data() {
    return {
      plans: [
        {
          name: "Lifestyle",
          savings: 800
        },
        {
          name: "Home",
          savings: 250
        },
        {
          name: "Mobility",
          savings: 400
        },
        {
          name: "Electricity",
          savings: 100
        },
        {
          name: "Heat",
          savings: 80
        },
        {
          name: "EV",
          savings: 250
        }
      ],
      numberOfOccupants: null,
      dataComplete: false
    };
  },
  methods: {
    planSelected(plan) {
      this.$emit("planSelected", plan);
      if (!this.userDetails) {
        setTimeout(() => {
          document.querySelector(".location").scrollIntoView({
            behavior: "smooth"
          });
        }, 1);
      }
    },
    locationSubmitted(userDetails) {
      this.$emit("locationSubmitted", userDetails);
      if (!this.size) {
        setTimeout(() => {
          document.querySelector(".house-size").scrollIntoView({
            behavior: "smooth"
          });
        }, 1);
      }
    },
    sizeSelected(houseSize) {
      this.$emit("sizeSelected", houseSize);
      if (houseSize.size) {
        setTimeout(() => {
          document.querySelector(".occupants").scrollIntoView({
            behavior: "smooth"
          });
        }, 1);
      }
    },
    occupantsSelected() {
      this.$emit("occupantsSelected", this.numberOfOccupants);
      if (this.plan && this.userDetails && this.size) this.dataComplete = true;
      setTimeout(() => {
        document.querySelector(".go-back").scrollIntoView({
          behavior: "smooth"
        });
      }, 600);
    }
  },
  computed: {
    showLocation() {
      return this.plan || this.userDetails;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box {
  height: calc(100vh - 100px - 200px);
  overflow-y: auto;
  scrollbar-width: none;
  border: none;
  border-radius: 0;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
    display: none;
  }

  .questions {
    transition: 0.5s all ease;
    .card-header {
      background: transparent;
      h4 {
        font-weight: bold;
        color: #9f4fff;
      }
    }

    .input-grid {
      display: grid;
      grid-gap: 2rem;

      form {
        transition: all 1s;
      }
    }
  }

  .result {
    transition: 0.5s all ease;
    .options-grid {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  }

  .go-back {
    height: 30px;
    cursor: pointer;
    align-items: center;
    display: flex;

    img {
      height: 70%;
      margin-right: 5px;
      transition: 0.3s all ease;
    }

    &:hover {
      img {
        margin-right: 8px;
      }
    }
  }
}

.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
.slide-leave-active,
.slide-enter-active {
  position: absolute;
}
</style>
