export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-slate-950">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <h2 className="mt-5 text-white text-2xl font-bold">
          Loading Portfolio...
        </h2>
      </div>
    </div>
  );
}