import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../components/dashboard";
import EmailCompose from "../components/emailCompose";
import MailingListManager from "../components/mailinglistManager";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard  />} />
            <Route path="/mailing-lists" element={<MailingListManager />} />
            <Route path="/compose" element={<EmailCompose />} />
        </Routes>
    )
}