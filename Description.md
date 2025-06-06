# Planets Fullstack Web Project


## 1. Project Description
This is a fullstack web application focused on planets. It allows users to view information about different planets with images and descriptions. The backend is built with Django and Python, while the frontend uses HTML, CSS, and JavaScript.


## 2. Technologies Used
- Python
- Django
- HTML
- CSS
- JavaScript
- SQLite (default Django database)
  

## 3. How to Run Locally
### Prerequisites
- Python 3.x installed
- Git installed
- (Optional) A virtual environment tool like `virtualenv`

  
### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/NikolozWDev/Planets.git
   cd Planets
2. Create and activate a virtual environment:
   ```bash
   python -m venv env
   env\Scripts\activate
3. Install dependencies:
    pip install -r requirements.txt
4. Run database migrations:
    python manage.py migrate
5. Start the development server:
    python manage.py runserver
6. Open your browser and visit:
    http://127.0.0.1:8000/
