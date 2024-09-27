export default function Meaning({ meanings }) {
  return (
    <div>
      {meanings.map((meaning, meaningIndex) => (
        <div key={meaningIndex}>
          {/* Display partOfSpeech and "Meaning" only once per meaning */}
          <div className="flex flex-row justify-between items-center mb-2">
            <p className="font-bold lowercase my-4">{meaning.partOfSpeech}</p>
            <hr className="w-[85%]" />
          </div>

          <p className="font mb-4 text-gray-500">Meaning</p>
          <ul className="list-disc list-inside ml-5 text-purple-600">
            {/* Now map over definitions */}
            {meaning.definitions.map((definition, defIndex) => (
              <li
                key={defIndex}
                className="mb-2 text-white"
                style={{ textIndent: "-1.5em", paddingLeft: "1em" }}
              >
                {definition.definition}
                {definition.example && (
                  <blockquote
                    className="italic text-gray-400 mt-2"
                    style={{ textIndent: "-1.5em", paddingLeft: "1em" }}
                  >
                    “{definition.example}“
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
