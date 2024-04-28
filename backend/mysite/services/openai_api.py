from openai import OpenAI
from pathlib import Path
import json

# Set the absolute path
bsdir = str(Path(__file__).parent.parent.resolve())

# Replace with your own path and name of the key
API_KEY_FILE = open(f'{bsdir}/config/openAIApiKey.json', 'r')
API_KEY_DATA = json.load(API_KEY_FILE)['openAIApiKey']
client = OpenAI(api_key = API_KEY_DATA)

def Request(prompt):
    # Make a chat completion request using GPT-3.5 Turbo
    response = client.chat.completions.create(
        model='gpt-3.5-turbo',
        messages=[
            {
                'role': 'user',
                'content': prompt,
            }
        ],
        temperature=0.7
    )

    # The mock response below is used to test out connection
    """
    mock_response = open(f'{bsdir}/file/mock_response.json','r', encoding='utf-8')
    mock_response = json.load(mock_response)
    if prompt.lower() == "what is the origin of the word tea":
        response = mock_response['origin_tea']
    elif prompt.lower() == "give me example sentences of the word tea":
        response = mock_response['example_tea']
    elif prompt.lower() == "how to pronounce it of the word tea":
        response = mock_response['pronunciation_tea']
    else:
        response = "Not Found"
    return response
    """
     
    return response.choices[0].message['content']