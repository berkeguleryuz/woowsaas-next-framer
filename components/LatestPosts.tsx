import React from "react";

type Props = {};

const LatestPosts = (props: Props) => {
  return (
    <section className="py-60">
      <div className="container mx-auto">
        <h2 className="font-serif font-black text-4xl">
          Your portal to the future
        </h2>
        <p className="text-xl text-center text-zinc-400 mt-8">
          Keep up with the new features, updates, trends and insights in the
          blockchain world!
        </p>
        <div>
          {[...new Array(4)].fill(0).map((item, itemIndex) => (
            <div key={itemIndex}>
              <div>Technology</div>
              <h3>Regular Updates</h3>
              <p>
                Understand the regular blockchain updates and what is means for
                the future of blockchain
              </p>
              <div>
                <button>Read more</button>
                <div>arrow</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
