const AboutUs = () => {
  return (
    <div>
      <h2 id="about" className="text-3xl text-center mt-14 mb-5 font-bold">About Us</h2>
      <section className="bg-base-200">
        <div className="container">
          <div className="hero min-h-screen lg:w-full">
            <div className="hero-content flex-col lg:flex-row  lg:w-full lg:justify-between">
              <img
                src="https://pbs.twimg.com/media/DT51HhAW4AE8R0Y.jpg"
                className="w-1/2 rounded-md"
                alt=""
              />
              <div className="max-w-lg">
                <h2 className="text-xl font-bold ">Your Mission</h2>
                <p>
                  You don’t need to outright say, “our mission is ____,” but you
                  should convey the mission of your business in your About Us
                  copy. This is key for attracting talent, as well as leads that
                  have Corporate Social Responsibility (CSR) goals.
                </p>
                <h2 className="text-xl font-bold">Your Story (History)</h2>
                <p>
                  Every business has an origin story worth telling, and usually,
                  one that justifies why you even do business and have clients.
                  Some centennial enterprises have pages of content that can fit
                  in this section, while startups can tell the story of how the
                  company was born, its challenges, and its vision for the
                  future.
                </p>
                <h2 className="text-xl font-bold">Your Services (And Benefits)</h2>
                <p>
                  Of course, you have a homepage and dedicated pages for your
                  products, but summarizing your offerings on the About Us page
                  is crucial to tie them in with brand values in your messaging.
                  Highlight the benefits and showcase what you do (and why it is
                  unique).
                </p>
                <h2 className="text-xl font-bold">Your Social Proof</h2>
                <p>
                  Reviews, client logos, case studies, and results bring
                  consistency to your About Us page. It’s what really proves
                  what you are saying is real and the impact you can bring to
                  future clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
