export default function Meaning({ meanings, isDarkMode }) {
  return (
    <div>
      {meanings.map((meaning, meaningIndex) => (
        <section key={meaningIndex} className="mb-6">
          {/* Part of speech and divider */}
          <div className="flex flex-row justify-between items-center mb-2">
            <p
              className={`font-bold lowercase my-4 ${
                isDarkMode ? "text-white" : "text-slateBlack"
              }`}
            >
              {meaning.partOfSpeech}
            </p>
            <hr
              className={`w-[85%] ${
                isDarkMode ? "border-[#3a3a3a]" : "border-[#3a3a3a]"
              }`}
            />
          </div>

          <p className="font mb-4 text-mediumGray">Meaning</p>

          <ul className="ml-5">
            {meaning.definitions.map((definition, defIndex) => (
              <li
                key={defIndex}
                className={`mb-2 relative pl-6 ${
                  isDarkMode ? "text-white" : "text-slateBlack"
                }`}
              >
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
              <p className="text-slateBlack">Synonyms</p>
              <p className="text-brandPurple font-bold">
                {meaning.synonyms.map((synonym, index) => (
                  <a
                    key={index}
                    href={`https://www.google.com/search?q=${encodeURIComponent(
                      synonym
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {synonym}
                    {index < meaning.synonyms.length - 1 ? ", " : ""}
                  </a>
                ))}
              </p>
            </div>
          )}

          {/* Antonyms Section */}
          {meaning.antonyms && meaning.antonyms.length > 0 && (
            <div className="flex flex-row gap-4 mt-2">
              <p className="text-gray-500">Antonyms</p>
              <p className="text-brandPurple font-bold">
                {meaning.antonyms.map((antonym, index) => (
                  <a
                    key={index}
                    href={`https://www.google.com/search?q=${encodeURIComponent(
                      antonym
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {antonym}
                    {index < meaning.antonyms.length - 1 ? ", " : ""}
                  </a>
                ))}
              </p>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
