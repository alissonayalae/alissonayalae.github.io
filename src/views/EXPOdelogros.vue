<script setup lang="ts"></script>

<template>
  <div class="bg-black min-h-[100px] relative overflow-hidden">
    <div class="image-container w-full relative">
      <img src="@/images/BGV3.png" alt="Background image" />

      <div class="absolute inset-0 flex flex-col items-center justify-center text-center mb-200">
        <p class="font-semibold text-white text-7xl drop-shadow-lg">EXPO de logros</p>
        <p class="text-7xl font-extrabold tracking-[0.03em] text-landaVERDE drop-shadow-md mt-2">
          TrackMate
        </p>
        <p class="text-white text-left max-w-[50%] mt-9 drop-shadow-md text-[20px]">
          The Expo de Logros of Centro ¡Supérate! Fundación Poma is an annual event where
          second-year students present the technological projects they have developed throughout the
          program. It is a space to showcase the knowledge, skills, and creativity gained during
          their training, while also demonstrating how technology and design can be applied to
          real-world challenges.
        </p>
      </div>

      <div class="relative grid grid-cols-2 items-center mt-[-80px] z-10 mb-10">
        <p class="text-white max-w-[60%] ml-40 text-[20px] leading-relaxed mb-50">
          In 2024, the Expo de Logros was presented under the name Bright Minds, a title that
          captured the creativity and innovative spirit of the students.<br /><br />
          This edition celebrated not only the final projects but also the teamwork,
          problem-solving, and leadership demonstrated throughout the process. It highlighted how
          young people can turn ideas into impactful technological solutions, showcasing the skills
          and dedication gained during their time in the ¡Supérate! program.
        </p>

        <div
          class="relative flex justify-end"
          data-aos="fade-left"
          data-aos-offset="30"
          data-aos-duration="500"
        >
          <img
            src="@/images/TrackMateexpodelogros.png"
            alt="Best Code Award"
            class="w-[700px] shadow-xl -mt-20 mb-40"
          />
        </div>
      </div>
    </div>
    <div class="inset-0 flex flex-col items-center justify-center text-center">
      <p class="text-white max-w-[65%] mt-9 drop-shadow-md text-[20px]">
        Among the projects showcased was TrackMate, an application designed to connect vehicle
        owners with reliable mechanical workshops and help manage car maintenance efficiently. I
        worked as the UX designer and branding lead, focusing on creating a user-friendly interface
        and a strong, memorable visual identity that reflects the reliability and modernity of the
        service.
      </p>
    </div>

    <section class="relative flex items-center justify-center min-h-screen mt-20 overflow-hidden">
      <div class="relative flex items-center justify-between max-w-[1200px] w-full px-10 z-10 gap-16">
        <div class="flex-[3]">
          <p class="font-extrabold text-7xl drop-shadow-lg text-landaVERDE mt-30">
            Brand <br></br>
            <span class="text-white tracking-[0.03em] drop-shadow-md font-Ablack"> idenity </span>
          </p>

          <p class="mt-10 text-white text-[20px] leading-relaxed max-w-8/10">
            The UX design of TrackMate screen uses a sleek dark theme with blue and purple accents
            to create a modern, tech-driven feel. The main headline is clear, and the gradient
            “Start now” button stands out as the primary call to action, supported by a secondary
            “Try our demo” option. Simple navigation, concise descriptions, and a minimal car
            illustration make the interface intuitive, readable, and visually engaging.
          </p>
        </div>

        <div
          class="flex-[2] flex justify-center"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-duration="700"
          data-aos-easing="ease-out-cubic"
        >
          <img
            src="@/images/Brandguidelines.png"
            alt="TrackMate mockup"
            class="w-[400px] ml-20 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>

    <div
      class="absolute w-[450px] h-[550px] bg-landaVERDELIGHT/80 rounded-full blur-3xl m-50 ml-130"
    ></div>
    <section class="relative flex items-center justify-center min-h-screen mt-20 overflow-hidden">
      <div
        class="relative flex items-center justify-between max-w-[1200px] w-full px-10 z-10 gap-16"
      >
        <div
          class="flex-[3] flex justify-center"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="700"
        >
          <img
            src="@/images/2 PHONE.png"
            alt="TrackMate mockup"
            class="w-[500px] ml-20 drop-shadow-2xl"
          />
        </div>

        <div class="flex-[2]">
          <p class="font-extrabold text-7xl drop-shadow-lg text-landaVERDE mt-30">
            UX
            <span class="text-white tracking-[0.03em] drop-shadow-md font-Ablack"> Design </span>
          </p>

          <p class="mt-10 text-white text-[20px] leading-relaxed max-w-none">
            Our UX design follows a simple yet elegant approach, prioritizing intuitive navigation and a 
            smooth user experience. Every element was carefully structured to ensure that users can easily 
            access the app's features while enjoying a visually appealing and functional interface that 
            aligns with the brand's identity.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
