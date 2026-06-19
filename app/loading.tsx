export default function Loading() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-background">
      <div className="glass p-8 rounded-3xl flex flex-col items-center gap-6 shadow-xl">
        <div className="w-12 h-12 rounded-full border-4 border-brand/20 border-t-brand animate-spin" />
        <p className="text-brand font-medium animate-pulse text-lg">Loading Sagent...</p>
      </div>
    </div>
  );
}
