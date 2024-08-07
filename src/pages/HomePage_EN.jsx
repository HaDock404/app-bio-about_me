import ScrollBar from "../components/about/ScrollBar.jsx";
import Tree from "../components/about/Tree.jsx";
import Content1 from "../components/text_EN/Content1.jsx";
import Content2 from "../components/text_EN/Content2.jsx";
import Content3 from "../components/text_EN/Content3.jsx";
import Content4 from "../components/text_EN/Content4.jsx";
import Content5 from "../components/text_EN/Content5.jsx";
import Elypse from "../components/Elypse.jsx";
import Stump from "../components/about/Stump.jsx";
import Axe from "../components/about/Axe.jsx";
import Text1 from "../components/about/Text1.jsx";
import Text2 from "../components/about/Text2.jsx";
import Stage2 from "../components/about/Stage2.jsx";
import Board from "../components/about/Board.jsx";
import Machine from "../components/about/Machine.jsx";
import Toolbox from "../components/about/Toolbox.jsx";
import Flat2 from "../components/about/Flat2.jsx";
import Picture2 from "../components/about/Picture2.jsx";
import Butterfly1 from "../components/about/Butterfly1.jsx";
import Butterfly2 from "../components/about/Butterfly2.jsx";
import Butterfly3 from "../components/about/Butterfly3.jsx";
import Butterfly4 from "../components/about/Butterfly4.jsx";
import Butterfly5 from "../components/about/Butterfly5.jsx";
import Butterfly6 from "../components/about/Butterfly6.jsx";
import Butterfly7 from "../components/about/Butterfly7.jsx";

import GlobalStyle from '../styles/createGlobalStyle.jsx'
import HomeLogoAbout from "../components/Home_logo_about.jsx";

function HomePage() {
    return (
        <>
            <GlobalStyle/>
            <Tree/>
            <Content1/>
            <Elypse/>
            <Butterfly1/>
            <Butterfly2/>
            <Butterfly3/>
            <Butterfly4/>
            <Butterfly5/>
            <Butterfly6/>
            <Butterfly7/>
            <Stump/>
            <Axe/>
            <Text1/>
            <Text2/>
            <Stage2/>
            <Board/>
            <Machine/>
            <Toolbox/>
            <Content2/>

            <Picture2/>
            <Content3/>
            <Content4/>
            <Flat2/>
            <Content5/>
            
            <ScrollBar/>
            <HomeLogoAbout/>
        </>
    )
}

export default HomePage