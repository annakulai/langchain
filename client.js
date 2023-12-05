import { OpenAIChat } from 'langchain/llms/openai';

export const azureChat = new OpenAIChat({
  temperature: 0.9,
  azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY,
  azureOpenAIApiVersion: process.env.AZURE_OPENAI_API_VERSION,
  azureOpenAIBasePath: process.env.AZURE_OPENAI_BASE_PATH,
  azureOpenAIApiDeploymentName:
    process.env.AZURE_OPENAI_API_EMBEDDINGS_DEPLOYMENT_NAME,
  cache: false,
});

export const invoke = async (prompt) => {
  const result = await azureChat.invoke(prompt);
  return result;
};

export const call = async (prompt) => {
  const result = await azureChat.call(prompt);
  return result;
};
