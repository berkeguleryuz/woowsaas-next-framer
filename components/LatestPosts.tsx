import React from "react";
import Card from "@/components/core/Card";

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
        <div className="mt-16 flex flex-col gap-8">
          {[...new Array(4)].fill(0).map((item, itemIndex) => (
            <Card key={itemIndex} buttonText="Read More">
              <div className="px-3 py-1.5 uppercase font-serif font-extrabold tracking-wider  text-xs bg-fuchsia-500/15 text-fuchsia-500 inline-flex rounded-full">
                Technology
              </div>
              <h3 className="font-serif font-black text-3xl mt-4">
                Regular Updates
              </h3>
              <p className="text-lg text-zinc-400 mt-6">
                Understand the regular blockchain updates and what is means for
                the future of blockchain
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
