const textdata = {
longText: "ॐ सूर्याय  नमः /nॐ अर्यम्णे नमः /nॐ भगाय नमः /nॐ त्वष्ट्रे नमः /nॐ पूष्णे नमः /nॐ अर्काय नमः /nॐ सवित्रे नमः /nॐ रवये नमः /nॐ गभस्तये नमः /nॐ अजाय नमः /nॐ कालाय नमः /nॐ मृत्यवे नमः /nॐ धात्रे नमः /nॐ प्रभाकराय नमः /nॐ पृथिव्यै नमः /nॐ तेजसे नमः /nॐ खाय नमः /nॐ वायवे नमः /nॐ परायणाय नमः /nॐ सोमाय  नमः /nॐ बृहस्पतये  नमः /nॐ शुक्राय नमः /nॐ बुधाय नमः /nॐ अङ्गारकाय नमः /nॐ इन्द्राय नमः /nॐ विवस्वते नमः /nॐ दीप्तांशवे नमः /nॐ शुचये नमः /nॐ शौरये नमः /nॐ शनैश्चराय नमः /nॐ ब्रह्मणे नमः /nॐ विष्णवे नमः /nॐ रुद्राय नमः /nॐ स्कन्दाय नमः /nॐ वैश्रवणाय नमः /nॐ यमाय नमः /nॐ वैद्युताय नमः /nॐ जाठराय नमः /nॐ अग्नये नमः /nॐ ऐन्धनाय  नमः /nॐ  तेजसां पतये  नमः /nॐ धर्मध्वजाय नमः /nॐ वेदकर्त्रे नमः /nॐ वेदाङ्गाय नमः /nॐ वेदवाहनाय नमः /nॐ कृताय नमः /nॐ त्रेत्रे नमः /nॐ द्वापराय नमः /nॐ कलये नमः /nॐ सर्वामराश्रयाय नमः /nॐ कलाकाष्ठाय नमः /nॐ मुहूर्ताय नमः /nॐ पक्षाय नमः /nॐ मासाय नमः /nॐ ऋतवे नमः /nॐ संवत्सरकराय नमः /nॐ अश्वत्थाय नमः /nॐ कालचक्राय नमः /nॐ विभावसवे नमः /nॐ पुरुषाय  नमः /nॐ शाश्वताय  नमः /nॐ योगिने नमः /nॐ व्यक्ताव्यक्ताय नमः /nॐ सनातनाय नमः /nॐ लोकाध्यक्षाय नमः /nॐ प्रजाध्यक्षाय नमः /nॐ विश्वकर्मणे नमः /nॐ तमोनुदाय नमः /nॐ कालाध्यक्षाय नमः /nॐ वरुणाय नमः /nॐ सागराय नमः /nॐ अंशवे नमः /nॐ जीमूताय नमः /nॐ जीवनाय नमः /nॐ अरिघ्ने नमः /nॐ भूताश्रयाय नमः /nॐ भूतपतये नमः /nॐ सर्वलोकनमस्कृताय नमः /nॐ स्रष्ट्रे नमः /nॐ संवर्तकाय  नमः /nॐ  वह्नये  नमः /nॐ सर्वस्यादये नमः /nॐ अलोलुपाय नमः /nॐ अनन्ताय नमः /nॐ कपिलाय नमः /nॐ भानवे नमः /nॐ कामदाय नमः /nॐ सर्वतोमुखाय नमः /nॐ जयाय नमः /nॐ विशालाय नमः /nॐ वरदाय नमः /nॐ सर्वधातुनिषेचित्रे नमः /nॐ मनसे नमः /nॐ सुपर्णाय नमः /nॐ भूतादये नमः /nॐ शीघ्रगाय नमः /nॐ प्राणधारणाय नमः /nॐ धन्वन्तरये नमः /nॐ धूमकेतवे नमः /nॐ आदिदेवाय  नमः /nॐ अदितेः सुताय  नमः /nॐ द्वादशात्मने नमः /nॐ अरविन्दाक्षाय नमः /nॐ पित्रे नमः /nॐ मात्रे नमः /nॐ पितामहाय नमः /nॐ स्वर्गद्वाराय नमः /nॐ प्रजाद्वाराय नमः /nॐ मोक्षद्वाराय नमः /nॐ त्रिविष्टपाय नमः /nॐ देहकर्त्रे नमः /nॐ प्रशान्तात्मने नमः /nॐ विश्वात्मने नमः /nॐ विश्वतोमुखाय नमः /nॐ चराचरात्मने नमः /nॐ सूक्ष्मात्मने नमः /nॐ मैत्रेण वपुषान्विताय  नमः"
};

  const datastor = textdata.longText.split('/n');
  const container = document.querySelector('.container');

  datastor.forEach((line,i) => {
  const keyDivs = document.createElement("div");
  keyDivs.setAttribute("class", "key");
  // keyDivs.innerHTML = `<a href='bhashy/visnuBhashyam (${i+1}).html' class='index' style='float:left';>&#8663;</a>${line}`;
  keyDivs.innerHTML = i+1+" "+" "+line;
  container.appendChild(keyDivs);
  });


const keys = document.querySelectorAll('.key');
const divLen = container.querySelectorAll(".key").length;

// Create an array of audio files
const audioFiles = [];
for (let i = 1; i <= divLen; i++) {
  audioFiles.push(`path-dhvani/suryAudios/key (${i}).mp3`);
}

// Add an audio element to each key div
keys.forEach((key, index) => {
  const audio = new Audio(audioFiles[index]);
  audio.setAttribute('data-index', index);
  key.appendChild(audio);
});

let selector1 = document.querySelector('#selector1');
let selector2 = document.querySelector('#selector2');

keys.forEach(function(key, i){
  var option = document.createElement('option');
  var x = key.innerText;
  option.text = x.substring(x.search(/॥/)+1).slice(0,-1);
  option.value = i + 1;
  selector1.appendChild(option); 

  var option2 = document.createElement('option');
  option2.text =x.substring(x.search(/॥/)+1).slice(0,-1);
  option2.value = i + 1;
  selector2.appendChild(option2);
  }); 
  
  selector1.selectedIndex = 0;
  selector2.selectedIndex = 107;
  selector1.addEventListener('change', (event) => {
    const selectedOption = event.target.value;
    const allOptions = selector1.querySelectorAll('option');
    const selectedIndex = Array.from(allOptions).findIndex(option => option.value === selectedOption);
  
    selector2.innerHTML = ''; 
    for (let i = selectedIndex; i < allOptions.length; i++) {
      const option = document.createElement('option');
      option.value = allOptions[i].value;
      option.textContent = allOptions[i].textContent;
      selector2.appendChild(option);  
    }
    selector2.value = selectedOption;
     playButton.click();
  });

   selector2.addEventListener('change', () => {
     playButton.click();
   });