Here’s a simple README for your Movie Recommender chatbot project:

Movie Recommender Chatbot

Welcome to the Movie Recommender by Anirudh Vasudevan! This is an AI-powered movie recommendation system that uses embeddings and vector databases to recommend movies based on user input.

Features
	•	Movie recommendations: The chatbot can suggest movies based on the query you input, using AI models to analyze the context and give the most relevant movie suggestions.
	•	Natural language interaction: The chatbot understands and responds to questions like “Recommend a movie for action lovers” or “What movie is similar to Inception?”

How It Works
	1.	Embedding Generation: The user query is converted into an embedding vector using OpenAI’s text-embedding-ada-002 model.
	2.	Supabase Vector Search: The embedding is then used to search for semantically similar movie descriptions in the Supabase database.
	3.	Chat Completion: The OpenAI GPT-4 model is used to generate conversational responses based on the movie descriptions returned from the database.
	4.	Interactive UI: The system provides a user-friendly interface where users can interact with the bot and receive personalized movie recommendations.

Tech Stack
	•	OpenAI: Used to generate embeddings and responses for conversational interaction.
	•	Supabase: Used to store movie data and perform vector searches.
	•	Vite: Used to set up the frontend with fast development and bundling.
	•	HTML/CSS/JS: Used for the interactive chatbot interface.

Setup and Installation

To set up the project locally, follow these steps:
	1.	Clone the repository:

git clone <repo-url>
cd <project-folder>


	2.	Install dependencies:

npm install


	3.	Set up environment variables:
Create a .env file in the root directory and add your OpenAI and Supabase keys:

VITE_OPENAI_API_KEY=your-openai-api-key
VITE_SUPABASE_API_KEY=your-supabase-api-key
VITE_SUPABASE_URL=your-supabase-url


	4.	Start the development server:

npm run dev


	5.	Access the chatbot UI:
Open your browser and visit http://localhost:3000 to interact with the movie recommender chatbot.

Usage
	•	After the server is running, type in the input field and ask the chatbot about movie recommendations.
	•	The chatbot will analyze your query and return suggestions based on the closest matching movie descriptions from the database.

Contributors
	•	Anirudh Vasudevan - Developer and creator of the Movie Recommender chatbot.

Contact

For queries, contact Anirudh Vasudevan at anirudhvasudevan11@gmail.com.

