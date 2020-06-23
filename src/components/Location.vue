<template>
  <form name="locationForm">
    <h6><strong>Tell us where you live</strong></h6>
    <div class="form-group mb-3">
      <input
        type="text"
        class="form-control"
        v-model="userDetails.name"
        placeholder="Your Fullname*"
        required
      />
    </div>
    <div class="form-group">
      <select
        v-model="userDetails.location"
        class="form-control"
        @change="submitForm()"
        :disabled="!userDetails.name"
      >
        <option disabled>Select your location*</option>
        <option>North Scotland</option>
        <option>North West</option>
        <option>South East</option>
        <option>South Scotland</option>
        <option>South Wales</option>
        <option>Southern</option>
        <option>West Midlands</option>
        <option>Yorkshire</option>
        <option>United Kingdom</option>
      </select>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userDetails: {
        name: null,
        location: "Select your location*"
      }
    };
  },
  methods: {
    submitForm() {
      if (this.userDetails.name) {
        this.$emit("locationSubmitted", this.userDetails);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
