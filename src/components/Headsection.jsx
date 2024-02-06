const Headsection = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-12   m-5      ">
        <h1 className="text-5xl font-semibold text-gray">Helping companies</h1>
        <h1 className="text-5xl font-semibold text-gray p-2">
          build internal tools rapidly
        </h1>
        <p className="pt-3 text-lg">
          At ToolJet, we empower companies to rapidly build custom internal
          tools. Our low-code platform
        </p>
        <p className="text-lg ">
          enables organizations to create powerful tools without extensive
          coding, saving time and
        </p>
        <p className="text-lg">
          resources. Join us in revolutionizing internal tool development for
          enhanced efficiency and success.
        </p>
      </div>
      <div className="flex justify-center align-center text-5xl font-bold text-primary">
        <p className="pr-12 mr-5">25K+</p>
        <p className="pl-12 ml-5">500+</p>
      </div>
      <div className="flex justify-center align-center text-md text-gray pt-5">
        <p className="">Stars on Github</p>
        <p className="pl-12 ml-12">Open-source Contributors</p>
      </div>
    </div>
  );
};

export default Headsection;
