<script setup>
useHead({
  title: 'Work Experince',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>

    <!-- <section class="timeline">
      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            E-C.O.P (Thailand) Limited
          </h4>
          <span>Oct 2024 — Present</span>
          <p class="timeline-item-desc">
            Location NT Tower Bangrak
          </p>
          <p class="timeline-text">
            Position Cybersecurity Analyst
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Company Iconsiam Signature
          </h4>
          <span>Jan 2024 — Sep 2024</span>
          <p class="timeline-item-desc">
            Location BKK
          </p>
          <p class="timeline-text">
            Position IT Officer
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Company KEC(Thailand)Co.,ltd.
          </h4>
          <span>Jan 2022 — December 2023</span>
          <p class="timeline-item-desc">
            Location Lampoon
          </p>
          <p class="timeline-text">
            Position IT & Network Engineer
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Company 3BB (Thailand) CO.,ltd.
          </h4>
          <span>March 2021 — December 2022</span>
          <p class="timeline-item-desc">
            Location Chiang Mai
          </p>
          <p class="timeline-text">
            Position Technician
          </p>
        </li>
      </ol>
    </section> -->

    <section class="timeline">
      <ol class="timeline-list">
        <li class="timeline-item">
          <div class="flex items-start">
            <img src="https://media.licdn.com/dms/image/v2/D560BAQEA2D6s-N4-0A/company-logo_200_200/company-logo_200_200/0/1688443484785?e=2147483647&v=beta&t=3E04eZfTKZXNjCAQvF0sECSTCUHn_lfyb1TfaqILn18" alt="E-C.O.P (Thailand) Limited Logo" class="w-16 h-16 mr-4 rounded-lg">
            <div>
              <h4 class="h4 timeline-item-title">
                E-C.O.P (Thailand) Limited
              </h4>
              <span>Oct 2024 — Present</span>
              <p class="timeline-item-desc">
                Location NT Tower Bangrak
              </p>
              <p class="timeline-text">
                Position Cybersecurity Analyst
              </p>
            </div>
          </div>
        </li>

        <li class="timeline-item">
          <div class="flex items-start">
            <img src="https://yt3.googleusercontent.com/tQ3_cQ5s71ZH9Gf0H96_L7631gld5i7q82ix39E-jPllBW4szsiQURB8vMrcK0QhKw_0uz0=s900-c-k-c0x00ffffff-no-rj" alt="Iconsiam Logo" class="w-16 h-16 mr-4 rounded-lg">
            <div>
              <h4 class="h4 timeline-item-title">
                Company Homepro
              </h4>
              <span>Jan 2024 — Sep 2024</span>
              <p class="timeline-item-desc">
                Location Nonthaburi
              </p>
              <p class="timeline-text">
                Position Programmer
              </p>
            </div>
          </div>
        </li>

        <li class="timeline-item">
          <div class="flex items-start">
            <img src="https://www.veswin.com/uploads/mfg/KEC.jpg" alt="KEC Logo" class="w-16 h-16 mr-4 rounded-lg">
            <div>
              <h4 class="h4 timeline-item-title">
                Company KEC(Thailand)Co.,ltd.
              </h4>
              <span>Jan 2022 — December 2023</span>
              <p class="timeline-item-desc">
                Location Lampoon
              </p>
              <p class="timeline-text">
                Position IT & Network Engineer
              </p>
            </div>
          </div>
        </li>

        <li class="timeline-item">
          <div class="flex items-start">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTch_e_41bBDNiV-rcMD54VeQuzP1x4rCT6iw&s" alt="3BB Logo" class="w-16 h-16 mr-4 rounded-lg">
            <div>
              <h4 class="h4 timeline-item-title">
                Company 3BB (Thailand) CO.,ltd.
              </h4>
              <span>March 2021 — December 2022</span>
              <p class="timeline-item-desc">
                Location Chiang Mai
              </p>
              <p class="timeline-text">
                Position Technician
              </p>
            </div>
          </div>
        </li>
      </ol>
    </section>

  </article>
</template>
