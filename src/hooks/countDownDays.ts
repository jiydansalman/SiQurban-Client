import { useState, useEffect } from 'react';

export const useCountDown = (targetDate: string) => {
    const [days, setDays] = useState(0);

    useEffect(() => {
        const calculateDaysLeft = () => {
            const target = new Date(targetDate).getTime();
            const now = new Date().getTime();
            const difference = target - now;

            // Calculate days left
            const daysLeft = Math.ceil(difference / (1000*60*60*24));
            setDays(daysLeft >= 0 ? daysLeft : 0);
        };

        calculateDaysLeft();
        // Update every Hour
        const timer = setInterval(calculateDaysLeft, 3600000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return days;
}
