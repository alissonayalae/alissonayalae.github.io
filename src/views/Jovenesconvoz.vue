<script setup lang="ts"></script>

<template>
  <div class="bg-black min-h-screen relative overflow-hidden">
    <!-- Imagen de fondo -->
    <div class="relative w-full">
      <img
        src="@/images/BGV4.png"
        alt="Background image"
        class="w-full h-full object-cover opacity-40"
      />

      <!-- Sección de título centrado -->
      <div
        class="absolute inset-0 flex flex-col items-center justify-center text-center px-8 mb-60"
      >
        <p class="font-semibold text-white text-6xl md:text-7xl drop-shadow-lg">
          Jóvenes unidos a una sola voz
        </p>
        <p
          class="text-6xl md:text-7xl font-extrabold tracking-[0.03em] text-landaVERDE drop-shadow-md mt-2"
        >
          Rincón Renueva
        </p>
        <p
          class="text-white text-center max-w-[70%] mt-8 drop-shadow-md text-[18px] md:text-[20px] leading-relaxed"
        >
          Jóvenes Unidos con una Sola Voz is an initiative led by Aldeas Infantiles SOS and Fundemas
          that empowers young people to become leaders and agents of positive change in their
          communities. This program provides guidance and opportunities for youth to develop
          essential skills such as teamwork and project management, enabling them to identify local
          challenges creating impactful solutions that benefit their communities.
        </p>
      </div>
    </div>

    <!-- Sección imagen + textos (lado a lado) -->
    <div class="relative z-10 flex flex-col md:flex-row gap-10 px-10 pb-20 -mt-50 items-start">
      <!-- Imagen -->
      <div
        class="flex-[1] flex justify-start relative"
        data-aos="fade-right"
        data-aos-offset="30"
        data-aos-duration="500"
      >
        <img
          src="@/images/jovenesconvoz.png"
          alt="Jóvenes con Voz"
          class="w-[500px] md:w-[700px] shadow-xl relative z-10"
        />
      </div>

      <!-- Contenedor de los dos textos -->
      <div class="flex-[1] flex flex-col relative z-20 -ml-40 mt-10 space-y-14">
        <!-- Texto de Rincón Renueva -->
        <div class="text-white text-[18px] md:text-[20px] leading-relaxed mr-20">
          <p>
            Rincón Renueva is a community project developed as part of this initiative with the goal
            of transforming an unused area of Centro Escolar Daniel Hernández into a functional and
            welcoming space.
          </p>
        </div>

        <!-- Texto de UX Design -->
        <div class="text-right mr-20 mt-100">
          <p class="font-extrabold text-6xl md:text-7xl drop-shadow-lg text-landaVERDE">
            Our
            <span class="text-white tracking-[0.03em] drop-shadow-md font-Ablack"> Project </span>
          </p>

          <p class="mt-6 text-white text-[20px] leading-relaxed ml-35">
            The project focused on revitalizing the neglected area to create a dining hall and
            recreational spot where students and the wider community can gather, share meals, and
            enjoy a safe environment for social interaction and relaxation. This transformation not
            only improved the school's infrastructure but also fostered a sense of unity and care
            within the educational community.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
