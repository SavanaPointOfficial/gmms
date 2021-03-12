

export const Motivation = () => {
    const cards = [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1509909756405-be0199881695?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        title: "Grupo de Apoio psicossocial e Acompanhamentor",
        
        rating: "5.0",
        reviews: "87",
        url: "#"
      }
    ];
  
    
    return cards.sort(() => Math.random() - 0.5);
  };
  