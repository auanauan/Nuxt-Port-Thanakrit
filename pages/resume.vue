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

    <section class="timeline">
      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Company Iconsiam Signature
          </h4>
          <span>Jan 2024 — Present</span>
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
    </section>

    <!-- <section class="skill">
      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Your Skill
            </h5>
            <data value="90">90%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%;" />
          </div>
        </li>

      </ul>
    </section> -->
  </article>
</template>
