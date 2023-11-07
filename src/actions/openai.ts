import  OpenAI  from "openai";
import { stringify } from "querystring";


const openai = new OpenAI();

export async function getOpenAI() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}


export async function trainModel() {
  try {
    const response = await openai.fineTunes.create({
        training_file:'file-ZK8uZMLjCXWrU2d9Dg4y5uyn',
        
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

// export const getAllChampions = () =>
//   riotApi.champions
//     .getAllChampions()
//     .then((response) => Promise.resolve(response.data))
//     .catch((e) => Promise.reject(e.response));


