import React from "react";

const Home = () => {
  return (
    <main>
      <section className="relative w-full h-[100dvh] text-white overflow-hidden">
        <div className="absolute">
          <div className="absolute inset-0 justify-center">
            <div className="bg-shape1 bg-teal opacity-50 bg-blur"></div>
            <div className="bg-shape2 bg-primary opacity-50 bg-blur"></div>
            <div className="bg-shape1 bg-purple opacity-50 bg-blur"></div>
          </div>
        </div>
        <h1>BANG UDAH BANG</h1>
      </section>
    </main>
  );
};

export default Home;
