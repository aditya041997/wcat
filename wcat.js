let fs=require('fs');
let input=process.argv.slice(2);
console.log(input);
let options=[],filepaths=[];

//segregating options and filepaths
for(let i=0;i<input.length;i++){
    //let firstchar=input[i].charAt(0);
    if(input[i]=="-b" ||input[i]=="-n" || input[i]=="-s"){
        options.push(input[i]);
    }
    else{
        filepaths.push(input[i]);
    }
}
//console.log(options);
//console.log(filepaths);

//checking if file in filepaths exists
for(let i=0; i<filepaths.length; i++){
    let filepresent=fs.existsSync(filepaths[i]);
    //console.log(filepresent);
    if(filepresent==false){
        console.log("Filepath",filepaths[i],"is not present");
        return;
    }
}
let totalcontent="";
for(let i=0; i<filepaths.length; i++){
    let content=fs.readFileSync(filepaths[i]);
    totalcontent=totalcontent+content+"\r\n";
}
console.log(totalcontent);

//if option is -s 
let tempArr=[]
let isSOption=options.includes("-s");
if(isSOption==true){
    let outputArr=totalcontent.split("\r\n");
    //console.log(outputArr);
    for(let i=0;i<outputArr.length;i++){
        if(outputArr[i]!=""){
            tempArr.push(outputArr[i]);
        }
    }
    outputArr=tempArr
    totalcontent=outputArr.join("\n");

    console.log(totalcontent);
}

//if option is -n
let arr=[];
let isNOption=options.includes('-n');
if(isNOption==true){
    if(isSOption==true)
        arr=totalcontent.split('\n');
    else
        arr=totalcontent.split('\r\n');
    console.log(arr);
    let count=1;
    for(let i=0;i<arr.length;i++){
        arr[i]=count+". "+arr[i];
        count++;
    }
    totalcontent=arr.join('\r\n');
    console.log(totalcontent);
}

//if option is -b
let isBOption=options.includes('-b');

if(isBOption==true){
    if(isSOption==true)
        arr=totalcontent.split('\n');
    else
        arr=totalcontent.split('\r\n');
    console.log(arr);
    let count=1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=''){
            arr[i]=count+". "+arr[i];
            count++;
        }
    }
    totalcontent=arr.join('\n');
    console.log(totalcontent);
}
