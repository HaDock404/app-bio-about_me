import ScrollBar from "../components/ScrollBar";
import Tree from "../components/Tree";
import Content1 from "../components/text_FR/Content1.jsx";
import Elypse from "../components/Elypse";
import Stump from "../components/Stump";
import Axe from "../components/Axe";
import Text1 from "../components/Text1";
import Text2 from "../components/Text2";
import Stage2 from "../components/Stage2";
import Board from "../components/Board";
import Machine from "../components/Machine";
import Toolbox from "../components/Toolbox";
import Content2 from "../components/text_FR/Content2.jsx";
import Flat2 from "../components/Flat2";
import Picture2 from "../components/Picture2";
import Content3 from "../components/text_FR/Content3.jsx";
import Content4 from "../components/text_FR/Content4.jsx";
import Content5 from "../components/text_FR/Content5.jsx";
import Butterfly1 from "../components/Butterfly1";
import Butterfly2 from "../components/Butterfly2";
import Butterfly3 from "../components/Butterfly3";
import Butterfly4 from "../components/Butterfly4";
import Butterfly5 from "../components/Butterfly5";
import Butterfly6 from "../components/Butterfly6";
import Butterfly7 from "../components/Butterfly7";

import GlobalStyle from '../styles/createGlobalStyle.jsx'

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
        </>
    )
}

export default HomePage