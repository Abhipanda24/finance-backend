from flask import Flask, request, jsonify

app = Flask(__name__)

# Sample data (like a mini database)
students = [
    {"id": 1, "name": "Abhi", "course": "Python"},
    {"id": 2, "name": "Ravi", "course": "Java"}
]

# Home route
@app.route('/')
def home():
    return "Student API is running!"

# Get all students
@app.route('/students', methods=['GET'])
def get_students():
    return jsonify(students)

# Get student by ID
@app.route('/students/<int:id>', methods=['GET'])
def get_student(id):
    for student in students:
        if student['id'] == id:
            return jsonify(student)
    return jsonify({"message": "Student not found"}), 404

# Add new student
@app.route('/students', methods=['POST'])
def add_student():
    new_student = request.json
    students.append(new_student)
    return jsonify(new_student), 201

# Run server
if __name__ == '__main__':
    app.run(debug=True)