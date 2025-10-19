<script setup lang="ts"></script>

<template>
  <div class="image-container w-full bg-black">
    <img
      src="@/images/BGV.png"
      alt="Background image"
      class="w-full h-auto object-cover rounded-lg"
    />

    <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
      <p class="font-semibold text-white text-7xl drop-shadow-lg">Hello! I am</p>
      <p class="text-7xl font-extrabold tracking-[0.03em] text-landaVERDE drop-shadow-md mt-2">
        Alisson Ayala
      </p>
      <p class="text-white text-base-7 text-left max-w-5/10 mt-9 drop-shadow-md text-[20px]">
        I’m a recent high school graduate and aspiring designer with a deep passion for interior,
        product, and UX design. My goal is to continue developing my creative vision while
        contributing innovative and impactful projects that combine creativity, purpose, and
        functionality.
      </p>
      <img class="w-15 mt-25" src="@/images/Arrow.png" alt="Arrow icon" />
    </div>

    <div class="bg-black flex justify-center gap-4 mt-50">
      <p class="font-Asemibold font-semibold text-6xl text-white">Featured</p>
      <p class="font-Asemibold font-semibold text-6xl text-landaVERDE">projects</p>
    </div>

    <div class="flex justify-center items-center mt-9 bg-black">
      <img class="w-60" src="@/images/Line 1.png" alt="Decorative line" />
    </div>

    <!-- EXPO TECH -->
    <section class="min-h-150 bg-black flex items-center justify-center text-white relative">
      <div
        class="absolute right-100 w-[430px] h-[400px] bg-landaVERDELIGHT/50 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute right-40 w-[450px] h-[400px] bg-landaVERDELIGHT/35 rounded-full blur-3xl"
      ></div>

      <div class="relative flex items-center justify-between w-8/12 max-w-6xl">
        <div class="flex flex-col items-start max-w-md">
          <p class="text-landaVERDE font-semibold">Featured Project</p>
          <h2 class="text-3xl font-bold mt-1">EXPO Tech</h2>
          <h3 class="text-3xl text-greenmint font-semibold">TrackMate</h3>

          <div
            class="relative mt-8 w-[600px] bg-darkgreen/60 rounded-lg p-7 text-white text-[14px] leading-relaxed font-regular shadow-xl backdrop-blur-md"
            style="box-shadow: inset 0 0 40px rgba(58, 255, 130, 0.1)"
          >
            The event gathered students from all ¡Supérate! Centers to showcase innovative tech
            projects with a business focus. My team presented
            <span class="text-landaVERDE font-regular">TrackMate</span>, a mobile app that connects
            vehicle owners with trusted repair shops to simplify and organize car maintenance.
          </div>

          <div class="flex gap-3">
            <img src="@/images/Click.png" alt="Click icon" class="mt-6 w-5" />
            <img src="@/images/Click.png" alt="Click icon" class="mt-6 w-5" />
          </div>
        </div>

        <div>
          <img
            src="@/images/TM mockup.png"
            alt="TrackMate mockup"
            class="w-[500px] rounded-lg shadow-2xl border-t-40 border-l-40 border-verdechuco"
          />
        </div>
      </div>
    </section>

    <!-- EXPO DE LOGROS -->
    <section class="min-h-100 bg-black flex items-center justify-center text-white relative">
      <div
        class="absolute bottom-23 left-30 w-[260px] h-[210px] bg-landaVERDELIGHT/70 rounded-full blur-3xl"
      ></div>

      <div class="relative flex items-center justify-between w-8/12 max-w-6xl gap-10">
        <img
          src="@/images/TM mockup expo delogros.png"
          alt="TrackMate mockup"
          class="w-[500px] rounded-lg shadow-2xl border-t-40 border-l-40 border-verdechuco"
        />

        <div class="flex flex-col items-end max-w-md">
          <p class="text-landaVERDE font-semibold">Featured Project</p>
          <h2 class="text-3xl font-bold mt-1">EXPO de logros</h2>
          <h3 class="text-3xl text-greenmint font-semibold">TrackMate</h3>

          <div
            class="relative mt-8 w-[600px] bg-darkgreen/60 rounded-lg p-7 text-white text-[14px] leading-relaxed font-regular shadow-xl backdrop-blur-md"
            style="box-shadow: inset 0 0 40px rgba(58, 255, 130, 0.1)"
          >
            The EXPO de Logros of Centro ¡Supérate! Fundación Poma is an annual event where students
            showcase the knowledge and skills gained throughout the program. It serves as a platform
            to present innovative projects, demonstrate creativity, and highlight the impact of
            technology and design in solving real-world problems.
          </div>

          <div class="flex gap-3">
            <img src="@/images/Click.png" alt="Click icon" class="mt-6 w-5" />
            <img src="@/images/Click.png" alt="Click icon" class="mt-6 w-5" />
          </div>
        </div>
      </div>
    </section>

    <!-- JOVENES UNIDOS A UNA SOLA VOZ -->
    <section class="min-h-150 bg-black flex items-center justify-center text-white relative">
      <div
        class="absolute right-100 w-[430px] h-[400px] bg-landaVERDELIGHT/50 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute right-40 w-[450px] h-[400px] bg-landaVERDELIGHT/35 rounded-full blur-3xl"
      ></div>

      <div class="relative flex items-center justify-between w-8/12 max-w-6xl">
        <div class="flex flex-col items-start max-w-md">
          <p class="text-landaVERDE font-semibold">Featured Project</p>
          <h2 class="text-3xl font-bold mt-1">Jovenes unidos a una sola voz</h2>
          <h3 class="text-3xl text-greenmint font-semibold">TrackMate</h3>

          <div
            class="relative mt-8 w-[600px] bg-darkgreen/60 rounded-lg p-7 text-white text-[14px] leading-relaxed font-regular shadow-xl backdrop-blur-md"
            style="box-shadow: inset 0 0 40px rgba(58, 255, 130, 0.1)"
          >
            This project aimed to turn challenges within schools into opportunities for improvement
            in the educational community. I participated in Rincón Renueva, where we revitalized an
            unused area of Centro Escolar Daniel Hernández and transformed it into a dining hall and
            recreational space, benefiting both students and the wider community.
          </div>

          <div class="flex gap-3">
            <img src="@/images/Click.png" alt="Click icon" class="mt-6 w-5" />
            <img src="@/images/Click.png" alt="Click icon" class="mt-6 w-5" />
          </div>
        </div>

        <div>
          <img
            src="@/images/2. Rincon Renueva.pptx.png"
            alt="TrackMate mockup"
            class="w-[500px] rounded-lg shadow-2xl border-t-40 border-l-40 border-verdechuco"
          />
        </div>
      </div>
    </section>

    <!-- HACKATHON -->
    <section class="min-h-100 bg-black flex items-center justify-center text-white relative">
      <div
        class="absolute bottom-23 left-30 w-[260px] h-[210px] bg-landaVERDELIGHT/70 rounded-full blur-3xl"
      ></div>

      <div class="relative flex items-center justify-between w-8/12 max-w-6xl gap-10">
        <img
          src="@/images/ECO-SCRAP.png"
          alt="TrackMate mockup"
          class="w-[500px] rounded-lg shadow-2xl border-t-40 border-l-40 border-verdechuco"
        />

        <div class="flex flex-col items-end max-w-md">
          <p class="text-landaVERDE font-semibold">Featured Project</p>
          <h2 class="text-3xl font-bold mt-1">Hackathon</h2>
          <h3 class="text-3xl text-greenmint font-semibold">Eco-Scrap</h3>

          <div
            class="relative mt-8 w-[600px] bg-darkgreen/60 rounded-lg p-7 text-white text-[14px] leading-relaxed font-regular shadow-xl backdrop-blur-md"
            style="box-shadow: inset 0 0 40px rgba(58, 255, 130, 0.1)"
          >
            The ¡Supérate! Hackathon brought together first-year students to develop technological
            projects using Microsoft Power Apps. My team created Eco Scrapt, a digital directory
            that helps people locate nearby collection points for recyclable products, promoting
            environmental care and sustainability.
          </div>

          <div class="flex gap-3">
            <img src="@/images/Click.png" alt="Click icon" class="mt-6 w-5" />
            <img src="@/images/Click.png" alt="Click icon" class="mt-6 w-5" />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-black">
      <div class="bg-black mt-50 text-center flex flex-col items-center justify-center">
        <p class="font-Asemibold font-semibold text-6xl text-white">Certifications</p>
        <img class="w-60 mt-9" src="@/images/Line 1.png" alt="Decorative line" />
        <p class="text-white max-w-6/10 mt-3">
          During my scholarship at Centro ¡Supérate! Fundación Poma, I earned several certifications
          that strengthened my academic and professional profile. The ¡Supérate! Program is a
          three-year initiative that provides training in English, technology, and values, aiming to
          empower young students with the skills and opportunities needed to succeed in both their
          personal and professional lives.
        </p>
      </div>

      <section class="bg-black flex justify-center items-center mt-20">
        <div class="relative w-[1050px]">
          <img src="@/images/rectangle11.png" alt="Background" class="w-full h-full object-cover" />
          <div class="absolute inset-0 flex items-center gap-6 px-10">
            <img
              src="@/images/javascript-logo-javascript-icon-transparent-free-png.webp"
              alt="JavaScript Logo"
              class="w-15 h-15"
            />
            <div>
              <p class="text-white font-semibold text-lg">
                2025 – Information Technology Specialist (JavaScript)
              </p>
              <p class="text-gray-300 text-sm mt-2 max-w-8/10">
                Certified in JavaScript programming, demonstrating strong knowledge in coding,
                problem-solving, and developing interactive applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-black flex justify-center items-center mt-7">
        <div class="relative w-[1050px]">
          <img src="@/images/rectangle12.png" alt="Background" class="w-full h-full object-cover" />
          <div class="absolute inset-0 flex items-center gap-6 px-10">
            <img src="@/images/2.png" alt="JavaScript Logo" class="w-15 h-15" />
            <div>
              <p class="text-white font-semibold text-lg">
                2024 - TOEIC listening & reading (Golden medal recognition)
              </p>
              <p class="text-gray-300 text-sm mt-2 max-w-8/10">
                Certified in English proficiency through the TOEIC test, with a high score that
                granted me the recognition of a Gold Medal for outstanding performance in listening
                and reading comprehension.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-black flex justify-center items-center mt-7">
        <div class="relative w-[1050px]">
          <img src="@/images/rectangle13.png" alt="Background" class="w-full h-full object-cover" />
          <div class="absolute inset-0 flex items-center gap-6 px-10">
            <img src="@/images/3.png" alt="JavaScript Logo" class="w-15 h-15" />
            <div>
              <p class="text-white font-semibold text-lg">
                2024 - Microsoft MOS excel (Microsoft 365 Apps)
              </p>
              <p class="text-gray-300 text-sm mt-2 max-w-8/10">
                Achieved certification in Microsoft Excel, proving advanced skills in data
                management, analysis, formulas, and automation within the Microsoft 365 environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="min-h-40">
        <div class="bg-black flex justify-center gap-4 mt-50">
          <p class="font-Asemibold font-semibold text-6xl text-white">Volunteering</p>
          <p class="font-Asemibold font-semibold text-6xl text-landaVERDE">work</p>
        </div>

        <div class="flex justify-center items-center mt-9 bg-black">
          <img class="w-60" src="@/images/Line 1.png" alt="Decorative line" />
        </div>
      </section>
    </section>

    <section class="min-h-150 bg-black flex items-center justify-center">
  <div class="grid grid-cols-2 gap-6 mx-40">

    <div
      class="w-[595px] h-[275px] rounded-lg p-7 text-white text-[14px] leading-relaxed font-regular shadow-xl backdrop-blur-md flex items-center justify-center"
      style="color: #FFFFFF; background: linear-gradient(257deg, rgba(1,30,10,1) 0%, rgba(1,120,75,0.4) 39%, rgba(22,241,136,0.5) 100%);">
      
      <div class="text-left max-w-9/10">
        <p class="font-semibold mb-2 text-[15px]">Annual Fundraising<br>TECHO El Salvador</p>
        <p>
          I participated in a fundraising campaign to support the construction of emergency housing 
          for people living in poverty as part of TECHO El Salvador’s annual collection. This experience 
          allowed me to contribute to improving living conditions for vulnerable families, raise awareness 
          about social issues, and develop skills in teamwork, organization, and community engagement 
          while supporting a meaningful cause.
        </p>
      </div>
    </div>

    <div>
      <img src="@/images/TECHO.png" alt="" class="w-[550px] h-[275px] object-cover rounded-lg">
    </div>

    <div>
      <img src="@/images/Glasswinng.png" alt="" class="w-[595px] h-[275px] object-cover rounded-lg">
    </div>

    <div
      class="w-[550px] h-[275px] rounded-lg text-white text-[14px] leading-relaxed font-regular shadow-xl backdrop-blur-md flex items-center justify-center"
      style="color: #FFFFFF; background: linear-gradient(257deg, rgba(1,30,10,1) 0%, rgba(1,120,75,0.4) 39%, rgba(22,241,136,0.5) 100%);">
      
      <div class="p-7 text-left  max-w-9/10">
        <p class="font-bold mb-2 text-[15px]">“Voluntariado que suma”<br>Glasswing International</p>
        <p>
          I volunteer with Glasswing International by supporting elementary school children with their 
          homework and overall academic development through a school club. In this role, I help 
          them strengthen their understanding of different subjects, encourage positive study habits, and build 
          confidence in their abilities. This experience has allowed me to contribute to their growth while also 
          developing my own skills in communication, leadership, and teamwork.
        </p>
      </div>
    </div>
  </div>
</section>

  <section class="min-h-100 bg-black flex flex-col items-center justify-center text-center text-white">
    
    <div class="bg-black flex justify-center gap-4 mt-50">
            <p class="font-Asemibold font-semibold text-6xl text-white">Get in</p>
            <p class="font-Asemibold font-semibold text-6xl text-landaVERDE">touch</p>
          </div>

          <div class="flex justify-center items-center mt-9 bg-black">
            <img class="w-60" src="@/images/Line 1.png" alt="Decorative line" />
          </div>

    <div
      class="flex flex-col items-start gap-1 w-[420px] p-6 rounded-lg shadow-lg backdrop-blur-md mt-20 border-t-4 border-landaVERDE/60"
      style="background: linear-gradient(257deg, rgba(1,30,10,1) 0%, rgba(1,120,75,0.4) 39%, rgba(22,241,136,0.5) 100%);"
    >
      <div class="flex items-center gap-2">
       <img src="@/images/Email.png" alt="" class="w-6 h-6">
        <p class="font-medium">Email</p>
      </div>
      <p class="text-lg">alissonayala369@gmail.com</p>
    </div>

    <div class="flex gap-6 mt-10 mb-40">
      <img src="@/images/Facebook.png" alt="" class="w-10 h-10">

      <img src="@/images/Linkedin.png" alt="" class="w-10 h-10">
    </div>
  </section>

  </div>

</template>



<style scoped></style>
