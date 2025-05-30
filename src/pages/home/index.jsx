export const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative pt-16">
      <section className="container mx-auto px-4 py-16 flex-col md:flex-row items-center" id="#home">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-white font-bold text-4xl md:text-6xl mb-6">Hi, I'm <span className="text-blue-200 gradient-text">Huy</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
            <span id="typed-text" className="font-medium">Web Developer</span>
            <span className="cursor-blink"> |</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-lg">
            I create beautiful digital experiences with a focus on user interface and experience design.
          </p>
        </div>
      </section>
    </div>
  );
};
