import Image from "next/image";
import { Button } from "primereact/button";

export default function PlayText() {
  return (
    <div className="flex justify-between items-center">
      <div className="space-y-2">
        {/* Add vertical spacing */}
        <h1 className="text-heading-l-mobile lowercase md:text-heading-l-mobile font-bold">
          Keyboard
        </h1>
        <p className="text-body-m md:text-body-m text-brandPurple">
          /ˈkiːbɔːd/
        </p>
      </div>

      <Button
        aria-label="Play"
        className="p-2 bg-transparent border-none focus:outline-none"
      >
        <Image
          width={48}
          height={48}
          src="/assets/images/icon-play.svg"
          alt="Play"
        />
      </Button>
    </div>
  );
}
