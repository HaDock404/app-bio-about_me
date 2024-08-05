const articles = [
    {
      id: 1,
      title: "Comprendre le WebScrapping",
      intro: "Le web scraping est une technique informatique permettant d'extraire des données à partir de sites web. C'est un outil puissant qui s'appuie sur des algorithmes et des programmes pour extraire des informations spécifiques d'un site Internet, souvent de manière automatique et à grande échelle. Comprendre le web scraping est essentiel pour quiconque souhaite tirer parti des vastes quantités de données disponibles en ligne, que ce soit pour des recherches, des analyses de marché ou pour développer des services web innovants.",
      content: (
        <>
          <h2 className="SectionTitle">Qu'est-ce que le Web Scraping ?</h2>
            <p className="Paragraph">
              Le web scraping consiste à parcourir le contenu des pages web et à extraire des données pertinentes. Cette technique peut être utilisée pour collecter des informations variées comme des prix de produits, des avis de consommateurs, des actualités ou des données statistiques. Contrairement aux API qui fournissent généralement des données structurées et prêtes à l'emploi, le scraping va chercher directement les informations affichées sur une page web.
            </p>

          <h2 className="SectionTitle">Pourquoi Utiliser le Web Scraping ?</h2>
            <p className="Paragraph">
              Le web scraping est souvent utilisé dans des contextes où les données recherchées ne sont pas facilement accessibles par d'autres moyens. Par exemple, un analyste de marché pourrait vouloir suivre les prix des produits sur plusieurs sites de e-commerce pour en tirer des analyses comparatives. De même, des chercheurs peuvent scrapper des forums ou des réseaux sociaux pour étudier les tendances et les opinions du public. Pour les développeurs, le web scraping peut servir à créer des bases de données complètes à partir de plusieurs sources en ligne.
            </p>

          <h2 className="SectionTitle">Comment Fonctionne le Web Scraping ?</h2>
            <p className="Paragraph">
              La technique du web scraping repose sur l'automatisation de la collecte de données grâce à des scripts ou des logiciels dédiés. Ces outils analysent le code HTML des pages web pour repérer et extraire les informations ciblées. Python est souvent utilisé pour réaliser du web scraping grâce à des bibliothèques comme Beautiful Soup, Scrapy, et Selenium, qui facilitent le traitement des données.
            </p>

            <ul className="List">
              <li className="ListItem">
                <strong>Analyse de la Page :</strong> Le processus débute par l'analyse de la structure du site web. Cela implique de comprendre l'organisation du HTML et de localiser les éléments qui contiennent les données d'intérêt.
              </li>
              <li className="ListItem">
                <strong>Extraction des Données :</strong> Une fois la page analysée, le script récupère les informations ciblées. Cela peut inclure du texte, des images, ou d'autres types de données.
              </li>
              <li className="ListItem">
                <strong>Nettoyage des Données :</strong> Les données extraites nécessitent souvent un nettoyage et une mise en forme pour être exploitables. Cela peut inclure la suppression des balises HTML ou la conversion des données dans un format approprié.
              </li>
              <li className="ListItem">
                <strong>Stockage :</strong> Enfin, les données nettoyées sont stockées dans une base de données ou un fichier pour une utilisation future.
              </li>
            </ul>

          <h2 className="SectionTitle">Éthique et Légalités</h2>
            <p className="Paragraph">
              Il est crucial de comprendre les aspects éthiques et légaux du web scraping. Tous les sites ne permettent pas cette pratique, et certains disposent de mesures de sécurité pour empêcher l'extraction automatique de données. La lecture des fichiers robots.txt des sites et la vérification des conditions d'utilisation sont des étapes importantes pour s'assurer que le scraping est permis. Dans certains cas, le non-respect de ces règles peut entraîner des poursuites légales.
            </p>

          <h2 className="SectionTitle">Conclusion</h2>
            <p className="Paragraph">
              Le web scraping offre un accès puissant à une multitude d'informations disponibles en ligne, ouvrant la voie à des analyses approfondies et à des applications innovantes. Cependant, il est essentiel d'utiliser ces techniques de manière responsable et légale. En fin de compte, le web scraping représente un formidable levier pour transformer le web en une mine de données exploitables, mais il nécessite une compréhension claire de ses possibilités et de ses limites.
            </p>
        </>
      ),
      image: "https://kinsta.com/wp-content/uploads/2022/07/what-is-web-scraping-768x384.jpg",
    },
    {
      id: 2,
      title: "L'Anaconda dans mon Mac",
      intro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry ...",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "https://resizing.flixster.com/zbZILG2Xx2QOOTFPb-ca6sMh6Rw=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19239_p_v13_af.jpg",
    },
    {
      id: 3,
      title: "Pourquoi tester son code ?",
      intro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry ...",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "https://www.guru99.com/images/1/011019_1320_PyTestTutor3.png",
    },
    {
      id: 4,
      title: "Git Git Gitgit Git",
      intro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry ...",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "https://miro.medium.com/v2/resize:fit:750/format:webp/0*tmfbLDU_hIeg0B3B.jpg",
    },
    {
      id: 5,
      title: "Github Action, vers l'infini et au delà",
      intro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry ...",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/05/Tony-Stark-from-Iron-Man.jpg?q=50&fit=crop&w=480&h=270&dpr=1.5",
    },
    {
      id: 6,
      title: "Tracking ? avec MLflow",
      intro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry ...",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "https://www.datanami.com/wp-content/uploads/2018/06/MLflow-logo-768x435.png",
    },
    {
      id: 7,
      title: "Les bases des Dataframes",
      intro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry ...",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/finallpandas.png",
    },
    {
      id: 8,
      title: "Ngrok et la liberté",
      intro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry ...",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "https://images.theconversation.com/files/392086/original/file-20210328-21-m098nv.jpg?ixlib=rb-4.1.0&rect=11%2C203%2C3964%2C1982&q=45&auto=format&w=1356&h=668&fit=crop",
    },
    {
      id: 9,
      title: "Deviens un hacker avec SSH",
      intro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry ...",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "https://miro.medium.com/v2/resize:fit:750/format:webp/0*ngAthWxOvKZHvsw9",
    },
    {
      id: 10,
      title: "La baleine Docker",
      intro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry ...",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "https://www.voyage-australie.com/wp-content/uploads/adobestock-184976931-1280x800.png",
    },
    {
      id: 11,
      title: "L'art de MLOps",
      intro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry ...",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "https://www.auditorium-lyon.com/sites/default/files/styles/cover_md/public/upload/images/ONL_%20c_C.Gaby_.jpg?h=1999a0bf&itok=VS-cEwde",
    },
    {
      id: 12,
      title: "Pourquoi Fortnite ?",
      intro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry ...",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "https://media.gqmagazine.fr/photos/5fa952e2a6095c6ef665d60d/1:1/w_640,c_limit/fortnite-battle-royale-1920x1080-864336699.jpg",
    }
  ];
  
  export default articles;
  