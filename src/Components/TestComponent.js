import { Link } from "react-router-dom";

export default function TestComponent() {
    const content = 'message!';

    return (
        <div>
        <h1>Test Page!</h1>
        <Link
        to={"/"}
        state={{test: content}}>Go back</Link>
        
        </div>
        
    )
}