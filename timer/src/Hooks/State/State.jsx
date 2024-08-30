//// React عمل عداد وقت
import { useState } from 'react';

export default function State() {
    const [seconds, setSeconds] = useState(0);

    function upDate() {
        const delay = 1000; // تأخير لمدة ثانية واحدة بين كل تحديث

        const incrementValue = () => {
            setSeconds(prevValue => prevValue + 1);
            setTimeout(incrementValue, delay);
        };

        incrementValue(); // ابدأ عملية التحديث
    }

    // حساب الساعات والدقائق والثواني من القيمة
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const displaySeconds = seconds % 60;

    return (
        <>
            <h2>
                {String(hours).padStart(2, '0')}:
                {String(minutes).padStart(2, '0')}:
                {String(displaySeconds).padStart(2, '0')}
            </h2>
            <button onClick={upDate}>Start</button>
        </>
    );
}