from fastapi.testclient import TestClient
# Adjust the import below to match your project structure
from ..main import app 

client = TestClient(app)

def test_read_main():
    """
    Tests the root endpoint to ensure it returns a successful status code and expected JSON.
    """
    response = client.get("/")
    assert response.status_code == 200
    # Optional: You can also check the content of the response
    # assert response.json() == {"message": "Hello World"}
