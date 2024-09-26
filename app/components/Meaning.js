export default function Meaning({ meanings }) {
  return (
    <div>
      <p className="font-bold">Meaning</p>

      {meanings.map((meaning, index) => (
        <div key={index} className="mt-4">
          <h4 className="text-md italic">{meaning.partOfSpeech}</h4>

          <ul className="list-disc m-4 px-4">
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
          </ul>
        </div>
      ))}
    </div>
  );
}
