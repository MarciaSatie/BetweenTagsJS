
import { LanguageOptions } from "./LanguageOptions";

const languages = Object.entries(LanguageOptions); 

function LanguagerSelector({language, onSelect}) {



  return (
    <>
   
   <div className="bg-black pt-4 pl-4 pb-2">
        <select
          name="Code Language"
          id="codeLanguage"
          className="bg-black text-pink-500"
          value={language} // Set selected value based on props.language
          onChange={(event)=>{ 
            const selectedLanguage = event.target.value;
            onSelect(selectedLanguage);
          }}
        >
          {languages.map(([language, version]) => (
            <option key={language} value={language}>
              {language} {version}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default LanguagerSelector
