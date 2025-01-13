<template>
  <div class="copyright bg-gray">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12">
          <a
            href="https://www.captaincontrat.com/contrats-commerciaux-cgv/cgv-cgu-cga/cgu-conditions-generales-utilisation">
            Conditions générale d'utilisation</a>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
          <p class="p-small ">Copyright © 2025 pour Les Choupettes .inc</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.align-content-center {
  display: inline-flex;
}

.footer {
  position: relative;
  padding-top: 7.5rem;
  padding-bottom: 6rem;
  text-align: center;
}

.footer .decoration-circles {
  position: absolute;
  top: 96px;
  left: -60px;
}

.footer div[class*="col"] {
  /* selects all elements which have classes starting with col */
  /* needed so that the absolute positioned decoration stays behind */
  position: relative;
}

.footer a {
  color: #223150;
  text-decoration: none;
}

.footer h4 {
  margin-bottom: 1.875rem;
}

.footer .fa-stack {
  width: 2em;
  margin-bottom: 1.25rem;
  margin-right: 0.375rem;
  font-size: 1.5rem;
}

.footer .fa-stack .fa-stack-1x {
  color: #0092ff;
  transition: all 0.2s ease;
}

.footer .fa-stack .fa-stack-2x {
  color: #ffffff;
  transition: all 0.2s ease;
}

.footer .fa-stack:hover .fa-stack-1x {
  color: #ffffff;
}

.footer .fa-stack:hover .fa-stack-2x {
  color: #0092ff;
}

.copyright {
  padding-top: 1.5rem;
  border-top: 1px solid #d0dae2;
  text-align: center;
}

.copyright a {
  text-decoration: none;
}

.copyright .list-unstyled,
.copyright .statement {
  opacity: 0.7;
}
</style>