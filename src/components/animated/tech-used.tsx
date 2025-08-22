import { InfiniteMovingCardsTechUsed } from "@/components/animated/moving-cards-tech-used";
import { type usedTechnologies } from "./tech";

const TechUsed = ({ techUsed }: { techUsed: typeof usedTechnologies }) => {
  return (
    <div className="mx-4 mb-4 w-auto rounded-2xl border border-gray-200/50 bg-gradient-to-br from-neutral-50 to-neutral-100 py-4 shadow-sm dark:border-neutral-800/50 dark:from-neutral-900 dark:to-neutral-950 md:mx-6 md:mb-8 lg:mx-8">
      <section className="w-auto py-4 md:py-8 lg:py-10">
        <div className="container grid gap-4 px-4 text-center md:gap-5 md:px-6 lg:gap-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 sm:text-3xl md:text-4xl">
              Technologies I Use
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 md:text-base max-w-2xl mx-auto">
              Modern tools and frameworks that power my projects and this website
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            {/* Gradient fade edges for better visual effect */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-neutral-50 to-transparent dark:from-neutral-900 z-10 md:w-12 lg:w-16" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-neutral-50 to-transparent dark:from-neutral-900 z-10 md:w-12 lg:w-16" />
            
            <div className="infinite-scroll-mask scroller w-full px-2 md:px-4">
              <InfiniteMovingCardsTechUsed 
                speed="normal" 
                items={techUsed} 
                direction="left"
                pauseOnHover={true}
              />
            </div>
          </div>
          
          {/* Mobile indicator */}
          <div className="lg:hidden flex justify-center items-center mt-4">
            <div className="flex items-center text-xs text-neutral-500 dark:text-neutral-500">
              <span className="mr-2">Swipe to explore</span>
              <svg 
                className="h-4 w-4 animate-bounce-horizontal" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes bounce-horizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .animate-bounce-horizontal {
          animation: bounce-horizontal 1s infinite;
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .infinite-scroll-mask {
            mask-image: linear-gradient(
              to right,
              transparent 0%,
              white 10%,
              white 90%,
              transparent 100%
            );
          }
        }
        
        @media (min-width: 641px) and (max-width: 1024px) {
          .infinite-scroll-mask {
            mask-image: linear-gradient(
              to right,
              transparent 0%,
              white 5%,
              white 95%,
              transparent 100%
            );
          }
        }
        
        @media (min-width: 1025px) {
          .infinite-scroll-mask {
            mask-image: linear-gradient(
              to right,
              transparent 0%,
              white 2%,
              white 98%,
              transparent 100%
            );
          }
        }
      `}</style>
    </div>
  );
};

export default TechUsed;