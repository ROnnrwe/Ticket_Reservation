from flask import Flask, render_template, request, jsonify

app = Flask(__name__, template_folder=r'C:\Users\강태훈\OneDrive\바탕 화면\Ticket')

# 좌석 정보를 저장할 딕셔너리
tickets = {}
MAX_TICKETS = 100

@app.route('/')
def index():
    return render_template('index.html', soldSeats=list(tickets.values()))

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form['name']
    student_id = request.form['student_id']
    selected_seat = request.form['seat']
    
    if student_id in tickets:
        return jsonify({'message': '이미 티켓을 구매하셨습니다.'}), 400
    
    if len(student_id) != 9:
        return jsonify({'message': '학번 9자리를 제대로 입력해주세요.'}), 400
    
    if not selected_seat or selected_seat in tickets.values() or len(tickets) >= MAX_TICKETS:
        return jsonify({'message': '티켓 구매에 실패하였습니다.'}), 400

    tickets[student_id] = selected_seat
    return jsonify({'message': f'티켓 구매에 성공하였습니다. {name}님의 좌석번호는 {selected_seat}입니다.'})

if __name__ == '__main__':
    app.run(debug=True)
