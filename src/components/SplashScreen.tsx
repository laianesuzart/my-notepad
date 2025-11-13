export function SplashScreen() {
  return (
    <div className="h-svh w-svw grid place-items-center">
      <h1 className="font-title font-bold text-primary text-5xl md:text-8xl">My Notepad</h1>
      <div className="flex gap-1.5">
        <div className="size-5 bg-[#d85a8c] rounded-full motion-safe:animate-bounce"></div>
        <div
          className="size-5 bg-[#d85a8c] rounded-full motion-safe:animate-bounce opacity-80"
          style={{ animationDelay: '100ms' }}
        ></div>
        <div
          className="size-5 bg-[#d85a8c] rounded-full motion-safe:animate-bounce opacity-60"
          style={{ animationDelay: '200ms' }}
        ></div>
        <div
          className="size-5 bg-[#d85a8c] rounded-full motion-safe:animate-bounce opacity-40"
          style={{ animationDelay: '300ms' }}
        ></div>
      </div>
    </div>
  );
}
