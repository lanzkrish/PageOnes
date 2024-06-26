
const  process = [
    {
        num:'01',
        headingText:'Information Gathering',
        paraText: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

    },
    {
        num:'02',
        headingText:'Planning',
        paraText: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

    },
    {
        num:'03',
        headingText:'Design',
        paraText: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

    },
    {
        num:'04',
        headingText:'Development',
        paraText: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

    },
    {
        num:'05',
        headingText:'Testing and Delivery',
        paraText: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

    },
    {
        num:'06',
        headingText:'Maintenance',
        paraText: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

    },

];
const processBox = document.getElementById('ProcessBox');
console.log(document.getElementById('ProcessBox'));
let str=``;
for (let i=0; i< process.length; i++){
    str+=` <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 ProcessBorder">
    <div class="step ProcessBoxBorder processBox${i}" onclick='activateBorder()' id="ProcessBoxBorder${i}">
      <span class="number" id="processBoxNumber">${process[i].num}</span>
      <h3 id="ProcessBoxHeader">${process[i].headingText}</h3>
      <p class="mb-3 font-14" id="ProcessBoxPara">${process[i].paraText} </p>
    </div>
  </div>`


}

processBox.innerHTML = str;
console.log(processBox);




function activateBorder(){

    for (let i=0; i<process.length; i++){
        let cls= `processBox${i}`
        console.log(document.getElementById(`ProcessBoxBorder${i}`).classList)
        if (cls in document.getElementById(`ProcessBoxBorder${i}`).classList){
            console.log(document.getElementById(`ProcessBoxBorder${i}`).classList)
            document.getElementById(`ProcessBoxBorder${i}`).classList.add ('active');
        }else{
            document.getElementById(`ProcessBoxBorder${i}`).classList.remove ('active');
        }
    }
}





const clients=[
    {
        clientLogo:'https://preview.colorlib.com/theme/pageone/images/logo-goldline.png.webp',
        clientName:'Goldline',
        about:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

    },
    {
        clientLogo:'https://preview.colorlib.com/theme/pageone/images/logo-foxhub.png.webp',
        clientName:'Foxhub',
        about:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

    },
    {
        clientLogo:'https://preview.colorlib.com/theme/pageone/images/logo-ideaa.png.webp',
        clientName:'Ideaa',
        about:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

    },
    {
        clientLogo:'https://preview.colorlib.com/theme/pageone/images/logo-nirastate.png.webp',
        clientName:'Nirastate',
        about:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

    },
]


const clientBox = document.getElementById('clientBox');
console.log(document.getElementById('clientBox'));
let clientstr=``;
for (let i=0 ; i<clients.length;i++){
    clientstr+=`<div class="col-xs-12 col-sm-6 col-md-6 clientBorder">
    <div class="step clientBox${i}" id="ProcessBoxBorder${i}">
      <span class="image " id="clientLogo"><img class="clientLogo" src="${clients[i].clientLogo}" alt="${clients[i].clientName}"></span>
      <h3 id="clientName" class="redtext">${clients[i].clientName}</h3>
      <p class="mb-3 font-14" id="clientBoxPara">${clients[i].about} </p>
    </div>
  </div>`
}
clientBox.innerHTML = clientstr;



const features = [
    {
        featureLogo:'./assets/png/vector.png',
        featureName:"illustration",
        featureDescription:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    },
    {
        featureLogo:'./assets/png/chat.png',
        featureName:"24/7 Support",
        featureDescription:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    },
    {
        featureLogo:'./assets/png/setting.png',
        featureName:"easy to Use",
        featureDescription:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    },
    {
        featureLogo:'./assets/png/imac.png',
        featureName:"web development",
        featureDescription:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    },
    {
        featureLogo:'./assets/png/send.png',
        featureName:"intuitive",
        featureDescription:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    },
    {
        featureLogo:'./assets/png/dictionary.png',
        featureName:"documentaion",
        featureDescription:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    },
]


const featureBox = document.getElementById('featureBox');
console.log(featureBox)
let featurestr='';
for (let i=0; i<features.length;i++){
    featurestr+=`<div class="col-xs-12 col-sm-6 col-md-6 col-lg-5 featureb">
    <div class="step featureBox " id="fetureBox">
        <span><img class="flaticon ${features[i].featureName}" src="${features[i].featureLogo}" alt=""></span>
        <h3 id="FeatureName" class="redtext text-capitalize">${features[i].featureName}</h3>
        <p class="mb-3 font-14" id="clientBoxPara">${features[i].featureDescription}</p>
    </div>
</div>`
}

featureBox.innerHTML = featurestr;
