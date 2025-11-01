<script setup lang="ts"></script>

<template>
  <div class="bg-black min-h-[100px] relative overflow-hidden">
    <!-- Imagen de fondo -->
    <div class="image-container w-full relative">
      <img src="@/images/BGV2.png" alt="Background image" />

      <div class="absolute inset-0 flex flex-col items-center justify-center text-center mb-60">
        <p class="font-semibold text-white text-7xl drop-shadow-lg">EXPO Tech</p>
        <p class="text-7xl font-extrabold tracking-[0.03em] text-landaVERDE drop-shadow-md mt-2">
          TrackMate
        </p>
        <p class="text-white text-left max-w-[50%] mt-9 drop-shadow-md text-[20px]">
          The ¡Supérate! Program offers three years of high-quality education in English,
          technology, and values to high-achieving students, complementing their public schooling.
          By the end of the program, they earn international certifications that prove advanced
          English proficiency and strong skills in Microsoft Office and programming.
        </p>
        <p class="text-white text-left max-w-[50%] mt-9 drop-shadow-md text-[20px]">
          The event gathered students from all ¡Supérate! Centers to showcase innovative tech
          projects with a business focus. My team presented TrackMate, a mobile app that connects
          vehicle owners with trusted repair shops to simplify and organize car maintenance.
        </p>
      </div>
    </div>

    <!-- Sección texto + imagen premio -->
    <div class="relative grid grid-cols-2 items-center mt-[-80px] z-10">
      <p class="text-white max-w-[60%] ml-40 text-[20px] leading-relaxed mb-50">
        TrackMate is a smart platform that helps users keep their vehicles in optimal condition by
        tracking maintenance history, sending reminders, and connecting them with trusted workshops.
        It acts as a digital assistant for car care, storing all service records in one place and
        reducing the risk of costly repairs through preventive alerts.<br /><br />
        Our project was proudly recognized at EXPO Tech, where we received the award for Best Code,
        highlighting the quality and innovation behind our development.
      </p>

      <div
        class="relative flex justify-end"
        data-aos="fade-left"
        data-aos-offset="60"
        data-aos-duration="400"
      >
        <img
          src="@/images/Best code expotech.png"
          alt="Best Code Award"
          class="w-[700px] shadow-xl -mt-20 mb-40"
        />
      </div>
    </div>

    <!-- Sección experiencia personal -->
    <div class="inset-0 flex flex-col items-center justify-center text-center">
      <p class="text-white max-w-[65%] mt-9 drop-shadow-md text-[20px]">
        In TrackMate, I worked mainly in the UX/UI design area, focusing on creating an intuitive
        user experience and a clean, modern interface. I also contributed to the branding process,
        including the restructuring of the color palette to achieve a more cohesive and professional
        visual identity. Additionally, I had the opportunity to present the project at EXPO Tech
        alongside one of my teammates, sharing our concept and design improvements with a wider
        audience.
      </p>
    </div>

    <!-- Sección UX/UI -->
    <div
      class="absolute w-[350px] h-[350px] bg-landaVERDELIGHT/60 rounded-full blur-3xl mt-120 ml-90"
    ></div>
    <section class="relative flex items-center justify-center min-h-screen mt-20 overflow-hidden">
      <div
        class="relative flex items-center justify-between max-w-[1200px] w-full px-10 z-10 gap-16"
      >
        <!-- Imagen -->
        <div
          class="flex-[2] flex justify-center"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="700"
          data-aos-easing="ease-out-cubic"
        >
          <img
            src="@/images/PHONE.png"
            alt="TrackMate mockup"
            class="w-[400px] ml-20 drop-shadow-2xl"
          />
        </div>

        <!-- Texto -->
        <div class="flex-[3]">
          <p class="font-extrabold text-7xl drop-shadow-lg text-landaVERDE mt-30">
            UX
            <span class="text-white tracking-[0.03em] drop-shadow-md font-Ablack"> Design </span>
          </p>

          <p class="mt-10 text-white text-[20px] leading-relaxed max-w-none">
            The UX design of TrackMate screen uses a sleek dark theme with blue and purple accents
            to create a modern, tech-driven feel. The main headline is clear, and the gradient
            “Start now” button stands out as the primary call to action, supported by a secondary
            “Try our demo” option. Simple navigation, concise descriptions, and a minimal car
            illustration make the interface intuitive, readable, and visually engaging.
          </p>
        </div>
      </div>
    </section>

    <!-- Sección Responsive / Laptop -->
    <section class="relative flex items-center justify-center min-h-[90vh] mt-20 overflow-hidden">
      <div
        class="relative flex items-center justify-between max-w-[1200px] w-full px-10 z-10 gap-16"
      >
        <!-- Texto -->
        <div class="flex-[3] text-white">
          <p class="font-extrabold text-5xl drop-shadow-lg">
            Our design is
            <span class="text-landaVERDE tracking-[0.03em] drop-shadow-md font-Ablack">
              adaptable
            </span>
          </p>

          <p class="mt-10 text-[20px] leading-relaxed max-w-none">
            to different devices, ensuring a consistent and seamless user experience whether
            accessed on mobile, tablet, or desktop.
          </p>
        </div>

        <!-- Imagen -->
        <div
          class="flex-[6] flex justify-center"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-duration="400"
        >
          <img
            src="@/images/LAPTOP.png"
            alt="TrackMate laptop design"
            class="w-[1000px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
    <div class="relative flex items-center justify-center min-h-100 bg-black">
      <!-- Glow detrás de la palabra -->
      <div
        class="absolute w-[90px] h-[90px] bg-landaVERDELIGHT/100 rounded-full blur-2xl mb-26 ml-80"
      ></div>

      <!-- Texto -->
      <h1 class="text-white font-extrabold text-7xl text-center leading-tight">
        Our <span class="text-green-400">color</span><br />palette
      </h1>
    </div>
    <div
      class="flex justify-center items-center"
      data-aos="fade-up"
      data-aos-offset="60"
      data-aos-duration="400"
    >
      <img src="@/images/COLOR PALETTE TM.png" alt="" class="w-[900px] mb-20" />
    </div>
    <div
      class="absolute w-[350px] h-[350px] bg-landaVERDELIGHT/60 rounded-full blur-3xl ml-250"
    ></div>
  </div>
</template>
