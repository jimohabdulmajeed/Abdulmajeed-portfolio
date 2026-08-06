"use client"

import CountUp from "react-countup";

const stats = [
  {
    num: 5,
    text: "Years of experience",
  },
  {
    num: 20,
    text: "Projects completed",
  },
  {
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 150,
    text: "Code commits",
  },
];
const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="card-surface-hover flex flex-col items-center xl:items-start gap-2 px-6 py-6 border-t-2 border-t-accent"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl font-extrabold xl:text-5xl text-accent"
                />
                <p className="leading-snug text-white/70 text-center xl:text-left">
                    {item.text}

                  </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

  );


};

export default Stats;