import Image from "next/image";
import { Button } from "primereact/button";

export default function PlayText({ word, phonetics, isDarkMode }) {
  return (
    <div className="flex justify-between items-center">
      <div className="space-y-2">
        {/* Word in lowercase */}
        <h1
          className={`text-heading-l-mobile lowercase md:text-heading-l-mobile font-bold ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          {word}
        </h1>

        {/* Pronunciation if available */}
        {phonetics && phonetics.text && (
          <p className="text-body-m md:text-body-m text-brandPurple">
            {phonetics.text}
          </p>
        )}
      </div>

      {/* Play button for audio */}
      {phonetics && phonetics.audio && (
        <Button
          aria-label="Play"
          className="p-2 bg-transparent border-none focus:outline-none"
          onClick={() => {
            const audio = new Audio(phonetics.audio);
            audio.play();
          }}
        >
          <Image
            width={48}
            height={48}
            src="/assets/images/icon-play.svg"
            alt="Play"
          />
        </Button>
      )}
    </div>
  );
}
