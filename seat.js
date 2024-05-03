<!DOCTYPE index.html>
<html>
<head>
    <title>좌석 선택</title>
    <style>
        .seat {
            width: 50px;
            height: 50px;
            border: 1px solid #ccc;
            display: inline-block;
            margin: 5px;
            cursor: pointer;
        }
        .selected {
            background-color: red;
        }
    </style>
</head>
<body>
    <h1>좌석 선택</h1>
    <div id="seats">
        <!-- 좌석 표시 -->
    </div>
    <p id="selectedSeat"></p>
    <script>
        // 좌석 정보
        var seats = [];
        var rows = 10;
        var cols = 10;
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                seats.push(String.fromCharCode(65 + i) + (j + 1));
            }
        }
        
        // 좌석 선택 이벤트 처리
        function selectSeat(seat) {
            if (document.getElementById(seat).classList.contains('selected')) {
                document.getElementById(seat).classList.remove('selected');
                document.getElementById('selectedSeat').textContent = '';
            } else {
                document.getElementById(seat).classList.add('selected');
                document.getElementById('selectedSeat').textContent = '선택된 좌석: ' + seat;
            }
        }

        // 좌석 표시
        var seatContainer = document.getElementById('seats');
        seats.forEach(function(seat) {
            var seatElement = document.createElement('div');
            seatElement.setAttribute('class', 'seat');
            seatElement.setAttribute('id', seat);
            seatElement.textContent = seat;
            seatElement.addEventListener('click', function() {
                selectSeat(seat);
            });
            seatContainer.appendChild(seatElement);
        });
    </script>
</body>
</html>
