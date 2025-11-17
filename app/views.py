from django.http import JsonResponse
from django.shortcuts import render
from llama_cpp import Llama

# Load the model once
model_path = r"C:\Users\lenovo\Downloads\realrobot_chatbot_llm-q8_0.gguf"

llm = Llama(
    model_path=model_path,
    n_ctx=2048,
    n_threads=4,
)

def chat_page(request):
    return render(request, "chat.html")

def chat_api(request):
    user_message = request.GET.get("message", "")

    if not user_message:
        return JsonResponse({"response": "Please type a message."})

    prompt = f"""
<start_of_turn>user
{user_message}
<end_of_turn>
<start_of_turn>model
"""

    result = llm(
        prompt,
        max_tokens=256,
        stop=["<end_of_turn>"],
        temperature=0.7,
    )

    response = result["choices"][0]["text"]

    return JsonResponse({"response": response})
