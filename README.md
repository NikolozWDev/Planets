# Planets Fullstack Web Project


## 1. Project Description
This is a fullstack web application focused on planets. It allows users to view information about different planets with images and descriptions. The backend is built with Django and Python, while the frontend uses HTML, CSS, and JavaScript.
This project does not have a traditional home page. Instead, by UI/UX design (as specified in the original Figma prototype), the default landing page is the Mercury planet page. When a user accesses the root URL (/), the application automatically redirects to /MERCURY, treating it as the default page.


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
    pip install -r requirements.txt (not this deleted)
4. pip install django pillow
5. Run database migrations:
    python manage.py migrate (not this deleted)
6. Start the development server:
    python manage.py runserver
7. Open your browser and visit:
    http://127.0.0.1:8000/
