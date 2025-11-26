export default function UniLogos() {
  return (
    <div className="mt-8 w-full px-4">
      <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-4 text-center">
        Trusted by students at
      </p>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 opacity-40 grayscale">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png"
          className="h-6 sm:h-8 w-auto invert brightness-0"
          alt="Harvard"
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png"
          className="h-6 sm:h-8 w-auto invert brightness-0"
          alt="MIT"
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_Stanford_University.svg/1200px-Seal_of_Stanford_University.svg.png"
          className="h-6 sm:h-8 w-auto invert brightness-0"
          alt="Stanford"
        />
      </div>
    </div>
  );
}
