
import { Skeleton } from "@/components/ui/skeleton"

export default function ProductSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-5 flex-grow">
      {[...Array(8)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}

 function SkeletonCard() {
  return (
    <div className="relative rounded-lg shadow-md bg-neutral animate-pulse">
      <div className="w-full h-56 bg-gray-300 rounded-t-lg"></div>
      <div className="bg-white p-4 h-40 rounded-b-lg dark:bg-[#F0F8FF]">
        <div className="w-3/4 h-6 bg-gray-300 mb-2"></div>
        <div className="w-full h-4 bg-gray-300 mb-2"></div>
        <div className="w-1/2 h-6 bg-gray-300"></div>
      </div>
    </div>
  );
};