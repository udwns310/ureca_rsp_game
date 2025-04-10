// src/App.jsx
import React, { useState } from 'react';
import styles from './css/App.module.css';

import Card from './components/Card';
import Button from './components/Button';

// 이미지 리소스 임포트
import rockImg from './assets/rock.png';
import paperImg from './assets/paper.png';
import scissorsImg from './assets/scissors.png';
import questionImg from './assets/question.png';

// 가위바위보 선택 데이터
const choices = [
    { id: 'scissors', name: '가위', img: scissorsImg },
    { id: 'rock', name: '바위', img: rockImg },
    { id: 'paper', name: '보', img: paperImg },
];

// 승부 판별 함수
function getResult(user, computer) {
    if (user === computer) return 'draw'; // 비김
    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'scissors' && computer === 'paper') ||
        (user === 'paper' && computer === 'rock')
    ) {
        return 'win';
    }
    return 'lose';
}

function App() {
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(''); // 'win', 'lose', 'draw' or ''

    // 컴퓨터의 랜덤 선택
    const getRandomChoice = () => {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    };

    // 유저가 선택했을 때 실행
    const handleClick = (choice) => {
        // 1) 유저 선택 저장
        setUserChoice(choice);

        // 2) 컴퓨터 랜덤 선택
        const randomChoice = getRandomChoice();
        setComputerChoice(randomChoice);

        // 3) 결과 계산
        const gameResult = getResult(choice.id, randomChoice.id);
        setResult(gameResult);
    };

    // 다시하기(리셋) 버튼
    const handleReset = () => {
        setUserChoice(null);
        setComputerChoice(null);
        setResult('');
    };

    return (
        <div className={styles.container}>
            {/* 카드들을 감싸는 wrapper */}
            <div className={styles.cardContainer}>
                <Card
                    title="너님"
                    img={userChoice ? userChoice.img : questionImg}
                    result={
                        result === 'win' ? '이겼다' : result === 'lose' ? '졌다' : result === 'draw' ? '비겼다' : ''
                    }
                />
                <Card
                    title="상대선수"
                    img={computerChoice ? computerChoice.img : questionImg}
                    result={
                        result === 'lose' ? '이겼다' : result === 'win' ? '졌다' : result === 'draw' ? '비겼다' : ''
                    }
                />
            </div>

            {/* 버튼 영역 */}
            <div className={styles.buttons}>
                {choices.map((c) => (
                    <Button key={c.id} onClick={() => handleClick(c)}>
                        {c.name}
                    </Button>
                ))}
            </div>

            {/* 다시하기 버튼 */}
            <Button onClick={handleReset} className={styles.resetBtn}>
                다시하기
            </Button>
        </div>
    );
}

export default App;
