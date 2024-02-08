import React from "react";

export const AboutCard = () => {
  return (
    <div className=" col-span-1 " id="about">
      <div
        className=" w-full rounded-md bg-gradient-to-b from-sky-100
          via-blue-100 to-cyan-300 p-2 flex flex-col gap-y-2 py-4"
      >
        <h2 className=" text-lg  text-center font-serif font-semibold  text-blue-500">
          ROY WAWERU MATHERI
        </h2>

        <div className=" w-full">
          <p className=" font-semibold font-sans text-medium text-black tracking-wide">
            Hey there! Im Roy, a passionate software developer with a keen
            focus on web and mobile application development. Let me tell you a
            bit about myself: <br />
            💻 Web Development: I have a deep love for crafting robust and
            user-friendly web applications. From designing responsive layouts to
            implementing interactive features, I strive to create seamless
            digital experiences. Im well-versed in front-end technologies like
            HTML5, CSS3,Next js, and JavaScript, and I stay up-to-date with the
            latest frameworks and libraries like React and Angular. <br />
            📱 Mobile Application Development: I thrive in the world of mobile
            app development, where I transform ideas into innovative mobile
            experiences. Whether its Android or iOS, I have a solid
            understanding of native development, and Im comfortable working
            with languages like Kotlin. Im also skilled in cross-platform
            development using frameworks such as React Native . <br />
            🌐 Full-Stack Proficiency: With my expertise in both web and mobile
            development, I consider myself a full-stack developer. I enjoy
            working on end-to-end projects, tackling challenges at every layer
            of the technology stack. From creating server-side APIs using
            frameworks like Node.js and Django, to managing databases such as
            MySQL and MongoDB, I can handle it all.
          </p>
        </div>
      </div>
    </div>
  );
};
