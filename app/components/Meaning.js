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
        </section>
      ))}
    </div>
  );
}
