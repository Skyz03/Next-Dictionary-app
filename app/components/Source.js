import Image from "next/image";
import { Button } from "primereact/button";

export default function Source({ source }) {
  return (
    <div className="space-y-2">
      {/* Source Label */}
      <p className="underline text-lightGray opacity-50 text-sm leading-relaxed">
        Source
      </p>

      {/* Render each source link */}
      {source?.map((url, index) => (
        <div key={index} className="flex items-center space-x-2">
          {/* Display the source URL */}
          <a
            href={url}
            className="underline hover:text-blue-800 text-sm leading-relaxed"
            target="_blank"
            rel="noopener noreferrer"
          >
            {url}
          </a>

          {/* Button for opening the URL in a new tab */}
          <Button
            onClick={() => window.open(url, "_blank")}
            className="p-button-text"
          >
            <Image
              src="/assets/images/icon-new-window.svg"
              alt="New window icon"
              width={12}
              height={12}
            />
          </Button>
        </div>
      ))}
    </div>
  );
}
