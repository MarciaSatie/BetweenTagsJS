
import AEditor from '../../../Editor/AceEditor'


const cardTitle ="Add Prefix in multiple files";
const cardDate = createDate("2024-03-28");
const cardContent = CardContent();

function CardContent() {
  return (
  <>
    <ol >
      <li>In a folder add all the files that will have the same Prefix</li>
      <li>Open Powershell:click "windows+x" to open Power options, then click on option "Terminal"</li>
      <li><p>at Powershell you need to specify file's location typing: cd "add your file path" (Exemple of file path:"C:\User\folder_path")</p>
      <details>
          <summary>
            How to get the file's path:
          </summary>
          <ul>
            <li>Click on one of the files inside of the folder with the mouse's RIGHT button.</li>
            <li>Click on Properties</li>
            <li>Copy the file's path from the Location line. </li>
          </ul>
        </details>
      </li>

    <li><p>Back to Powershell type the code bellow, just replace "Prefix_" by the new prefic that you want to add): </p>
    <AEditor
      code ={`$items=Get-ChildItem;
$items | Rename-Item -NewName { "Prefix_" + $_.Name };`}
      h = {"60px"}/>
    
    </li>
    <li>And Press Enter</li>
    </ol>
    <br />
    Done all the files wil be renamed.
    

  </>
    
  )
}

// adding information to a Map
const NewCard = new Map();
NewCard.set ("title",cardTitle);
NewCard.set ("date", cardDate);
NewCard.set ("cardContent",cardContent);
NewCard.set ("key",GenerateKey())

const cardObj = convertMapToObj(NewCard);
export default cardObj;



//////////////////////Functions //////////////////////////////////////////
function GenerateKey(){
    const nameKey = cardTitle.replace(/\s+/g, ''); // Removes all whitespace
    const keyAssemble = nameKey + Math.random().toString(36);
    return keyAssemble;
}

function createDate(dateImput){
    const x = new Date (dateImput);

    const month = x.toLocaleString("en-US",{month:"long"});
    const day = x.toLocaleString("en-US",{day:"2-digit"});
    const year = x.getFullYear();

    return day+" "+month+" "+year;
}

function convertMapToObj(map) {
    const obj = {};
    for (let [key, value] of map) {
        obj[key] = value;
    }
    return obj;
}