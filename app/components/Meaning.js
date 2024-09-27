export default function Meaning({ meanings }) {
  return (
    <div>
      {meanings.map((meaning, meaningIndex) => (
        <section key={meaningIndex} className="mb-6">
          {/* Part of speech and divider */}
          <div className="flex flex-row justify-between items-center mb-2">
            <p className="font-bold lowercase my-4">{meaning.partOfSpeech}</p>
            <hr className="w-[85%]" />
          </div>

          <p className="font mb-4 text-gray-500">Meaning</p>

          <ul className="ml-5">
            {meaning.definitions.map((definition, defIndex) => (
              <li key={defIndex} className="mb-2 text-white relative pl-6">
                <span className="text-purple-600 absolute -left-1">•</span>{" "}
                {/* Custom purple bullet */}
                {definition.definition}
                {definition.example && (
                  <blockquote className="italic text-gray-400 mt-2">
                    “{definition.example}“
                  </blockquote>
                )}
              </li>
            ))}
          </ul>

          {/* Synonyms Section */}
          {meaning.synonyms && meaning.synonyms.length > 0 && (
            <div className="flex flex-row gap-4 mt-4">
              <p className="text-gray-500">Synonyms</p>
              <p className="text-brandPurple font-bold">
                {meaning.synonyms.join(", ")}
              </p>
            </div>
          )}

          {/* Antonyms Section */}
          {meaning.antonyms && meaning.antonyms.length > 0 && (
            <div className="flex flex-row gap-4 mt-2">
              <p className="text-gray-500">Antonyms</p>
              <p className="text-brandPurple font-bold">
                {meaning.antonyms.join(", ")}
              </p>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
