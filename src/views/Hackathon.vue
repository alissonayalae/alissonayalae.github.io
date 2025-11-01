<script setup lang="ts"></script>

<template>
  <div class="bg-black min-h-[100px] relative overflow-hidden">
    <!-- Imagen de fondo -->
    <div class="image-container w-full relative">
      <img src="@/images/BGV2.png" alt="Background image" />

      <div
        class="absolute inset-0 flex flex-col items-center justify-center text-center mb-200 mt-20"
      >
        <p class="font-semibold text-white text-7xl drop-shadow-lg">Hackathon 2023</p>
        <p class="text-7xl font-extrabold tracking-[0.03em] text-landaVERDE drop-shadow-md mt-2">
          ECO-SCRAP
        </p>
        <p class="text-white text-left max-w-[50%] mt-9 drop-shadow-md mt-10 text-[20px]">
          The ¡Supérate! Hackathon is an innovation event where first-year students collaborate to
          create technological solutions using Microsoft Power Apps. It encourages creativity,
          teamwork, and problem-solving by challenging participants to design projects that address
          real-world issues and contribute to their communities.
        </p>
      </div>

      <div class="relative grid grid-cols-2 items-center mt-[-80px] z-10 mb-10">
        <p class="text-white max-w-[60%] ml-40 text-[20px] leading-relaxed mb-50">
          Eco-Scrapt is an innovative digital directory created to make recycling more accessible
          and convenient for everyone. Its main goal is to help people quickly locate nearby
          collection points where they can take recyclable products such as plastics, paper, glass,
          or electronic waste.
        </p>

        <div
          class="absolute w-[140px] h-[200px] bg-landaVERDELIGHT rounded-full blur-3xl mt-150 ml-140"
        ></div>
        <div
          class="relative flex justify-end"
          data-aos="fade-left"
          data-aos-offset="30"
          data-aos-duration="500"
        >
          <img
            src="@/images/ECO-SCRAP.png"
            alt="Best Code Award"
            class="w-[700px] shadow-xl -mt-20 mb-40"
          />
        </div>
      </div>
    </div>

    <div class="relative grid grid-cols-2 items-center mt-40 z-10">
      <div class="relative" data-aos="fade-right" data-aos-offset="30" data-aos-duration="500">
        <img
          src="@/images/TECNOLOGIAS.jpg"
          alt="Best Code Award"
          class="w-[700px] shadow-xl -mt-20 mb-40"
        />
      </div>
      <p class="text-white max-w-[60%] ml-40 text-[20px] leading-relaxed mb-30">
        The platform will feature a friendly and interactive chatbot that assists users in their
        search by providing instant recommendations, directions, and details about each location,
        such as operating hours or accepted materials. By simplifying the process of finding
        recycling centers, Eco Scrapt not only promotes environmental awareness but also encourages
        individuals and communities to adopt more sustainable habits in their daily lives.
      </p>
    </div>
  </div>
</template>
