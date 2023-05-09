import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptly is a cutting-edge, open-source AI prompting solution designed
        for today's world, enabling users to explore, generate, and exchange
        imaginative prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
