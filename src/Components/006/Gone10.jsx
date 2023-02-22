import { useEffect } from "react";

function Gone10() {

    useEffect(() => {
            console.log('GONE is born');
            return () => {
                console.log('GONE is dead');
            }
    }, [])

    return  <h2> I'm still Here</h2>

}

export default Gone10;