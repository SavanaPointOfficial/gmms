

export const MaidDosmestica = () => {
    const cards = [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1517837817850-607cd9ff1015?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=800",
        title: "Apoio Com Tarefas de Casa (Empregadas Domesticas)",
       
        rating: "5.0",
        reviews: "87",
        url: "#"
      }
    ];
  
    
    return cards.sort(() => Math.random() - 0.5);
  };
  