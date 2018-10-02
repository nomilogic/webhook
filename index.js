// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
var body;
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
  body=request.body;
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
 
  function onWaterBrand(agent) {
   console.log("Total params", body.queryResult.outputContexts);
    }

  // // Uncomment and edit to make your own intent handler
  // // uncomment `intentMap.set('your intent name here', yourFunctionHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  var paramSequence;
  
  
  function fetchFinalParams(parameters)
  {
     for(var i in parameters){
        
        
        if(i.charAt(i.length-9)==".")
        continue;
        if(parameters[i]=="")
        continue;
        
        console.log(i,parameters[i])
    }
      
      
  }
  function serviceTest4()
  {
      
      var rp = require('request-promise-native');
 var myJSONObject ={
      title: 'foo',
      body: 'bar',
      userId: 1
    }
      
       var options = {
  method: 'post',
  uri: 'https://json-trace.herokuapp.com/',
  body: JSON.stringify(myJSONObject),
  json: true,
  family:4
};
      
  rp(options)
    .then(function (body) {
        // Request succeeded but might as well be a 404
        console.log("body-res", body)
        // Usually combined with resolveWithFullResponse = true to check response.statusCode
    })
    .catch(function (err) {
        // Request failed due to technical reasons...4
           console.log("err-res", body)
    });    
      
      
  }
  function serviceTest2()
  {
      
     /* fetch('https://json-trace.herokuapp.com/', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))*/
  }
    var doco;
 var rp = require('request-promise-native');
 var myJSONObject ={
      title: 'foo',
      body: 'bar',
      userId: 1
    }
var orchName = 'TEST05';
  var postData = JSON.stringify(myJSONObject);
  function serviceTest3()
  {
    
 return networkCall(postData,orchName).then((response)=>{
			console.log('response is'+response)            
             console.log("+++++++++++++=DOCO=+++++++++ "+response);
             doco = doco1;
             //agent.add(`Order number is ${doco1}`);
             
        }).catch((response) => {
      console.log(`ERROR: `+response);
    });
	
console.log('doco'+doco);	


      
      
  }
  function networkCall(postData, orchName) {
    return new Promise((resolve,reject) =>{
      var options = {
  method: 'post',
  uri: 'https://json-trace.herokuapp.com/',
  body: JSON.stringify(myJSONObject),
  json: true,
  family:4
};
return rp( options )
  .then( body => {
	 // var test = JSON.stringify(body)
	 var doco =body.ServiceRequest1.subforms.z_DOCO_137.value;
	console.log('DOCO '+doco);
    resolve( doco );
  })
  .catch( err => {
	  console.log('FAILED'+err);
    reject( err );
  });
    });
}
  function serviceTest()
  {
      
      
        const request = require('request');
       var options={
            url: "https://json-trace.herokuapp.com/",
            method: 'POST',
            json: true,
            body:JSON.stringify({
              title: 'foo',
              body: 'bar',
              userId: 1
            }),
            headers: {
                'Content-Type':     'application/json'
            },
        };
        
        request.post(options, (error, response, body) => {
            if (error) {
                console.log(`Dialog flow error response : ${response}`);
                console.log(`Dialog flow error : ${error}`);
                reject(error);
            }
            resolve(body);
            console.log(response);
        });
      
  }
  function yourFunctionHandler(agent) {
     
  if(!paramSequence)
      paramSequence=Object.keys(agent.parameters);
   console.log("Total params", body.queryResult.outputContexts[0].parameters);
     //console.log(body.queryResult.queryText);
    //agent.add(new Suggestion(body.queryResult.queryText));
    // agent.add(new Suggestion(`Suggestion`));
   
    

    for(let i in agent.parameters)
    {
        var param=agent.parameters[i];
    
        if(!param)
        {
            //serviceTest2();
           //serviceTest();
           serviceTest4()
          //  serviceTest3()
          // console.log(i, param,"hello");
         /*   if(i=="paymentMode")
            {
                
                const quickReplies = new Suggestion({
                title: "Please select your payment method?",
                reply: "Online"
                 })
                quickReplies.addReply_("Cash On Delivery")
                agent.add(quickReplies);
                return;
                
                
            }*/
            if(i=="waterType")
            {
                
                const quickReplies = new Suggestion({
                title: "Please which type of water do you use?",
                reply: "Boiled Water"
                 })
                quickReplies.addReply_("Filtered Water")
                quickReplies.addReply_("Branded Water")
                agent.add(quickReplies);
                return;
                
                
            }
            agent.add(body.queryResult.fulfillmentText);
             return
        }
       else
       {
           if(i=="waterType" && param=="Branded Water")
            {
                
         agent.add("Please Enter the name of your water supplier brand?");
                return;
                
                
            }
            else if(i=="waterType" && param!="Branded Water")
            {
                
            agent.add("Thanks for ordering Aquafina, You'll be contacted soon by us.");
                
            }
            
           
           
           
       }
    }
    console.log("messages",body.queryResult.fulfillmentText);
    // for (var j=0; j<paramSequence.length;j++)
    // {
        
        
    //   // console.log(j,"hello");
    //   var i=paramSequence[j]
    //      var param=agent.parameters[i];
    //   //console.log(i, param=='',"lo");
       
    //     if(param=="")
    //     {
    //       // console.log(i, param,"hello");
    //         if(i=="paymentMode")
    //         {
                
    //             const quickReplies = new Suggestion({
    //             title: "Please select your payment method?",
    //             reply: "Online" 
    //              });
    //             quickReplies.addReply_("Cash On Delivery");
    //             agent.add(quickReplies);
    //             return; 
                
                
    //         }
           
    //       //agent.add(body.fulfillmentMessages[0].text.text[0]);
    //     }
    //   //return
    // }

   
  }

   
   

  // // Uncomment and edit to make your own Google Assistant intent handler
  // // uncomment `intentMap.set('your intent name here', googleAssistantHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function googleAssistantHandler(agent) {
  //   let conv = agent.conv(); // Get Actions on Google library conv instance
  //   conv.ask('Hello from the Actions on Google client library!') // Use Actions on Google library
  //   agent.add(conv); // Add Actions on Google library responses to your agent's response
  // }
  // // See https://github.com/dialogflow/dialogflow-fulfillment-nodejs/tree/master/samples/actions-on-google
  // // for a complete Dialogflow fulfillment library Actions on Google client library v2 integration sample

  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();

  intentMap.set('aquafina_order', yourFunctionHandler);
  intentMap.set('brandType', onWaterBrand);
  // intentMap.set('your intent name here', googleAssistantHandler);
  agent.handleRequest(intentMap);
});
