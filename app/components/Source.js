import Image from "next/image";
import { Button } from "primereact/button";

export default function Source() {
  return (
    <div className="space-y-2">
      <p className="underline text-lightGray opacity-50 text-sm leading-relaxed">
        Source
      </p>
      <div className="flex items-center">
        <a
          href="https://en.wiktionary.org/wiki/keyboard"
          className="underlinehover:text-blue-800 text-sm leading-relaxed"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://en.wiktionary.org/wiki/keyboard
        </a>
        <Button
          icon={
            <Image
              src="/assets/images/icon-new-window.svg"
              alt="New window icon"
              width={12}
              height={12}
            />
          }
          className="p-button-text"
        />
      </div>
    </div>
  );
}
