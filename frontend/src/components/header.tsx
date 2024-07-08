import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <h1 className="text-2xl font-mono pb-2">🪩discomail🪩</h1>
            <nav className="flex flex-row pb-2">
                <div className="flex flex-row gap-4">
                    <p><Link to="/">*dashboard</Link></p>
                    <p><Link to="/mailing-lists">*mailing Lists</Link></p>
                    <p><Link to="/compose">*compose</Link></p>
                </div>
            </nav>
        </div>
    )
}