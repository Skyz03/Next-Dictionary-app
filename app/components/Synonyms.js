export default function Synonyms({ synonyms = [], antonyms = [] }) {
  return (
    <>
      {/* Synonyms Section */}
      <div className="flex flex-row gap-4">
        <p className="text-gray-500">Synonyms</p>
        <p className="text-brandPurple font-bold">
          {/* Join the synonyms array with a comma separator */}
          {synonyms.length > 0 ? synonyms.join(", ") : "No synonyms available"}
        </p>
      </div>

      {/* Antonyms Section */}
      <div className="flex flex-row gap-4 mt-2">
        <p className="text-gray-500">Antonyms</p>
        <p className="text-brandPurple font-bold">
          {/* Join the antonyms array with a comma separator */}
          {antonyms.length > 0 ? antonyms.join(", ") : "No antonyms available"}
        </p>
      </div>
    </>
  );
}
