
//Load Config:
const config = require('../config.json');

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration(config.openai);
const openai = new OpenAIApi(configuration);

//console.log(config);
runPrompt();

async function runPrompt(){

    let messages = [
        {"role": "system", "content": "The assistant must user hungarian language"},
        {"role": "user", "content": "Say this is a test!"}
    ];

    const completion = await openai.createChatCompletion({
        "model": "gpt-3.5-turbo",
        "messages": messages,
        "temperature": 0.7
      })



    console.log("Open AI tokes Burnt: " + completion.data.usage.total_tokens)
    console.log(completion.data.choices[0]);
    
    //let newProperty = await openai.getCompletition(prompt);
    //console.log(newProperty);


}