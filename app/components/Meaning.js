export default function Meaning({ meanings }) {
  return (
    <div>
      {meanings.map((meaning, meaningIndex) => (
        <div key={meaningIndex}>
          {/* Display partOfSpeech and "Meaning" only once per meaning */}
          <div className="flex flex-row justify-between items-center mb-2">
            <p className="font-bold lowercase my-8">{meaning.partOfSpeech}</p>
            <hr className="w-[85%]" />
          </div>

          <p className="font-bold mb-4">Meaning</p>

          {/* Now map over definitions */}
          {meaning.definitions.map((definition, defIndex) => (
            <li key={defIndex} className="mb-2">
              {definition.definition}
              {definition.example && (
                <blockquote className="italic text-gray-400 mt-2">
                  Example: {definition.example}
                </blockquote>
              )}
            </li>
          ))}
        </div>
      ))}
    </div>
  );
}
