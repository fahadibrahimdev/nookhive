<script setup>
import {heroSectionContent, buttonsLabel, footerContent} from "@/@core/constants/home-view";
import SiteButton from "@/@core/components/SiteButton.vue";
import {scrollToSection} from "@/@core/utils/functions";
</script>

<template>
  <section id="home" class="bg-hero-bg pt-40 pb-24 xl:py-56 3xl:py-64">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-20 lg:gap-10 3xl:gap-10">
        <div class="text-white">
          <h1 class="text-4.5xl lg:text-5xl 3xl:text-7xl font-bold pb-5">
            {{ heroSectionContent.heading }}
          </h1>
          <p class="text-base lg:text-xl 2xl:text-3xl">
            {{ heroSectionContent.text }}
          </p>
          <div class="social-icons flex gap-7 xl:gap-12 text-white pt-5 pb-1 sm:pt-7 sm:pb-3">
            <template v-for="({ icon, link }, i) in footerContent.socialIcons" :key="i">
              <a :href="link" target="_blank">
                <span :class="`icon-${icon}`" class="text-4xl opacity-50 2xl:text-5xl cursor-pointer"></span>
              </a>
            </template>
          </div>
          <p class="text-base lg:text-xl 2xl:text-3xl">
            {{ heroSectionContent.updateLine }}
            <br>
            {{ heroSectionContent.socials }}
          </p>
          <div class="flex gap-5 pt-12 lg:pt-20 xl:pt-24 3xl:pt-38">
            <SiteButton>
              {{ buttonsLabel.CTOBtn }}
            </SiteButton>
            <SiteButton outlined @click="scrollToSection('whyUs')">
              {{ buttonsLabel.accent }}
            </SiteButton>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <img :src="heroSectionContent.image" :alt="heroSectionContent.alt">
        </div>
      </div>
    </div>
  </section>
</template>
