import { useState } from "react";

export const useIncDec = () => {
    const [count, setCount] = useState(0);

    return {
        count,
        onClick: (e) => {
            e.preventDefault();
            if(e.target.innerHTML === '+') setCount(count+1);
            else setCount(count-1);
        }
    }
}