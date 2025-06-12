export default function PricingPage() {
  const basicPlan = [
    "Get Started Instantly",
    "Essential Data Generation",
    "Cost-Free Exploration",
    "Community Support",
    "Perfect for Prototyping",
  ];
  const standardPlan = [
    "Accelerate Development",
    "Unlock Advanced Data",
    "Seamless Integration",
    "Dedicated Assistance",
    "Expand Your Projects",
  ];
  const premiumPlan = [
    "Unleash Ultimate Scale",
    "Comprehensive Customization",
    "Enterprise-Grade Performance",
    "Premium Support & SLA",
    "Streamline Operations",
  ];

  return (
    <>
      <div className="flex flex-col bg-black h-screen items-center justify-center">
        <div className="mb-5 font-bold text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400">
          Choose a plan that fits your needs
        </div>

        <div className="flex flex-row mt-5">
          <div>
            <Plan planName="Basic" price="9.99" description={basicPlan} />
          </div>
          <div>
            <Plan
              planName="Standard"
              price="14.99"
              description={standardPlan}
            />
          </div>
          <div>
            <Plan planName="Premium" price="19.99" description={premiumPlan} />
          </div>
        </div>
      </div>
    </>
  );
}

function Plan({
  planName,
  price,
  description,
}: {
  planName: string;
  price: string;
  description: string[];
}) {
  return (
    <>
      <div className="flex items-center justify-center h-[560px] w-[310px] m-10 rounded-xl bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400 hover:scale-110 hover:shadow-xl transition duration-300 ease-in-out">
        <div className="group bg-black h-[550px] w-[300px] flex flex-col items-center rounded-xl hover:bg-gradient-to-r hover:from-pink-500 hover:via-yellow-300 hover:to-cyan-400 transition">
          <div className="p-2 m-2 font-bold text-6xl text-center text-transparent bg-clip-text bg-gradient-to-l from-pink-500 via-yellow-300 to-cyan-400 group-hover:text-black transition">
            {planName}
          </div>
          <div className="flex items-center justify-center font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-l from-pink-500 via-yellow-300 to-cyan-400 group-hover:text-black transition text-center h-[50px] w-[150px]">
            {price}
          </div>
          <div className="h-[150px] w-[300px] flex flex-col items-center m-5 space-y-2">
            {description.map((i) => (
              <div className="text-center text-transparent bg-clip-text bg-gradient-to-l from-pink-500 via-yellow-300 to-cyan-400 group-hover:text-black transition">
                {i}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center m-5 h-[55px] w-[210px] rounded-xl bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400 hover:scale-110 hover:shadow-xl transition duration-300 ease-in-out">
            <button className="bg-black h-[50px] w-[200px] flex flex-col items-center justify-center rounded-xl text-white">
              SELECT PLAN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
