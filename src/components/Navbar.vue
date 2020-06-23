<template>
  <header>
    <nav class="container navigation d-flex">
      <img
        src="https://a-deus.com/wp-content/uploads/2020/05/Website_Wireframe_Assets_A-DEUS_Logo.png"
        alt=""
        class="logo img-fluid"
      />

      <div class="contact text-right">
        <h4>
          Need help?
          <a href="mailto:information@a-deus.ng">Mail information@a-deus.ng</a>
        </h4>
        <small>Mon to Fri - 9am to 8pm, Sat/Sun - 9am to 5pm</small>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  background: white;

  .navigation {
    height: 100px;
    padding: 20px 0;
    justify-content: space-between;
    align-items: center;

    .logo {
      height: 30px;
    }

    .contact {
      width: fit-content;
      h4 {
        font-weight: bold;
        margin: 0;
      }
    }
  }
}
</style>
