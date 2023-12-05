import {
  ChatPromptTemplate,
  PromptTemplate,
  SystemMessagePromptTemplate,
  AIMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from 'langchain/prompts';
import { AIMessage, HumanMessage, SystemMessage } from 'langchain/schema';
import { call, invoke } from './client.js';

export const simplePrompt = async () => {
  const azureResult = await call(
    'What would be a good company name a company that makes colorful socks?'
  );

  return azureResult;
};

export const promptWithVariable = async () => {
  const prompt = new PromptTemplate({
    inputVariables: ['adjective'],
    template: 'Tell me a {adjective} joke.',
  });
  const formattedPrompt = await prompt.format({
    adjective: 'funny',
  });

  return await call(formattedPrompt);
};

export const promptWithDifferentTemplates = async () => {
  const systemTemplate =
    'You are a helpful assistant that translates {input_language} to {output_language}.';
  const humanTemplate = '{text}';

  const chatPrompt = ChatPromptTemplate.fromMessages([
    ['system', systemTemplate],
    ['human', humanTemplate],
  ]);

  // Format the messages
  const formattedChatPrompt = await chatPrompt.formatMessages({
    input_language: 'English',
    output_language: 'French',
    text: 'I love programming.',
  });

  return await invoke(formattedChatPrompt);
};
