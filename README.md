# LLM Application

This is a web application that integrates with your LLM. It consists of a FastAPI backend and a React frontend.

## Setup

### Backend Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the backend:
```bash
cd app
python main.py
```

The backend will run on http://localhost:8000

### Frontend Setup

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Run the frontend:
```bash
npm start
```

The frontend will run on http://localhost:3000

## Integration with Your LLM

To integrate your LLM:

1. Open `app/main.py`
2. Locate the `process_query` function
3. Replace the TODO comment with your LLM integration code
4. Make sure to handle any API keys or authentication in a `.env` file

## Project Structure

- `app/` - Backend FastAPI application
- `frontend/` - React frontend application
- `requirements.txt` - Python dependencies
- `README.md` - This file 