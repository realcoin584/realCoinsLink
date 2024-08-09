import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";

const firebaseConfig = {
apiKey: "AIzaSyDIvJlBHEb4HabZjIBBenSkLsPDa_h8geA",
authDomain: "real-coin-information1.firebaseapp.com",
databaseURL: "https://real-coin-information1-default-rtdb.firebaseio.com",
projectId: "real-coin-information1",
storageBucket: "real-coin-information1.appspot.com",
messagingSenderId: "1086454324175",
appId: "1:1086454324175:web:5332664a445e42a5f810ba",
measurementId: "G-PK30V0GRRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


import { getDatabase,set,ref,remove,update,child,onValue } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";
const db =getDatabase();










let realCoinsLink_CD_I=document.querySelector('.realCoinsLink_CD_I');
//realCoinsLink_CD_button
document.querySelector('.realCoinsLink_CD_button').addEventListener('click',()=>{
    
    if(realCoinsLink_CD_I.value===''){
        realCoinsLink_CD_I.style.boxShadow="0px 0px 6px red";
    }else if(localStorage.getItem('AlreadyFollowLink')===null){ 
        realCoinsLink_CD_I.style.boxShadow="0px 0px 6px green";
        update(ref(getDatabase(),`${window.location.search.slice(1,window.location.search.length)}`),{
            Name:realCoinsLink_CD_I.value
        }).then(()=>{

            
            let url="https://t.me/Realcoingames_bot";
            window.open(url,"_blank").focus();
            realCoinsLink_CD_I.value='';
            realCoinsLink_CD_I.style.boxShadow="0px 0px 6px transparent";
            localStorage.setItem('AlreadyFollowLink','')
        })
    }
})


setInterval(()=>{
if(localStorage.getItem('AlreadyFollowLink')!=null){
     let url="https://t.me/Realcoingames_bot";
     window.open(url,"_blank").focus();
}
    
},100)


    
    










