const articles = [
    {
      id: 1,
      title: "Comprendre le WebScrapping",
      intro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry ...",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
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
  