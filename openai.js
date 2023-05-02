import {
  Configuration,
  OpenAIApi,
} from 'openai';

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
async function callAPI(){
  const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{role: "user", content: "Hello world"}],
  });
  console.log(completion.data.choices[0].message);
}
callAPI();
