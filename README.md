# Personal_assistant
# Personal Assistant - AI Chatbot (Django + Hugging Face Model)
A simple AI-powered personal assistant built using Django, Python, and Hugging Face Transformer models.
The assistant runs completely using Hugging Face—no OpenAI key required.

# Features

 * Uses Hugging Face model locally or via API
* Text generation using transformer models
* Django-based web interface
* Real-time chatbot-style response
* Clean, easy-to-understand project structure

# Tech Stack

* Python 3.12+
* Django
* Hugging Face Transformers
* Hugging Face Hub (optional)
* HTML / CSS / JavaScript
* .env for environment variables

# Supported Hugging Face Models

we can use:
* Django (backend) 
* llama.cpp (for running the GGUF model locally)
* RealRobot Chatbot LLM (realrobot_chatbot_llm-q8_0.gguf)
* Secure environment variable handling
* Simple web-based chat UI
* Using:
  https://api-inference.huggingface.co/models/realrobot_chatbot_llm-q8_0.gguf

# how to run 
1️⃣ Clone the repository
git clone https://github.com/Anshikam0905/Personal_assistant.git
cd Personal_assistant

2️⃣ Install dependencies
pip install -r requirements.txt

3️⃣ (Optional) Create .env

If using Hugging Face Inference API:

HF_API_KEY= your_key_here
HF_MODEL= your_model_name_here

If using local model, you don't need a key.

4️⃣ Run the Django server
python manage.py runserver

Open in browser:
http://127.0.0.1:8000/

# 💬 Usage

Go to the homepage
Type your message in the chat box
The Hugging Face model replies using Django backend


No secret keys are included

.gitignore prevents __pycache__ & .env leaks
