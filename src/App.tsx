import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import IndexPage from "@/pages/index";
import SkillsPage from "@/pages/skills";
import ProjectsPage from "@/pages/projects";
import NotFound from "@/pages/404";

const titles: Record<string, string> = {
    "/": "Home - Zikapedia",
    "/skills": "Skills - Zikapedia",
    "/projects": "Projects - Zikapedia",
};

export function TitleUpdater() {
    const location = useLocation();

    useEffect(() => {
        document.title = titles[location.pathname] || "Zikapedia";
    }, [location.pathname]);

    return null;
}

function App() {
    return (
        <>
            <TitleUpdater />
            <Routes>
                <Route element={<IndexPage />} path="/" />
                <Route element={<SkillsPage />} path="/skills" />
                <Route element={<ProjectsPage />} path="/projects" />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
