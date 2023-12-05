import { HuggingFaceInference } from 'langchain/llms/hf';

export const huggingFace = async () => {
  const model = new HuggingFaceInference({
    apiKey: process.env.HF_TOKEN,
    model: 'google/flan-t5-xxl',
    temperature: 0.9,
    cache: false,
  });

  return await model.call(
    'What would be a good company name a company that makes colorful socks?'
  );
};
